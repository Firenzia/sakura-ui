# 组件库开发流程
  1. 使用parcel内置服务器本地开发
     ```
     "start:"npx parcel index.html --no-cache"
     ```
     index.html引入app.js
     app.js用es6引入vue,挂载vue跟组件
  2. 测试框架 karma + mocha + sinon+ chai
     Karma（卡玛）是一个测试运行器，它可以呼起浏览器，加载测试脚本，然后运行测试用例
     Mocha（摩卡）是一个单元测试框架/库，它可以用来写测试用例
     Sinon（西农）是一个 spy / stub / mock 库，用以辅助测试
     chai.js 是一套TDD(测试驱动开发)/BDD(行为驱动开发)的断言库
  3. npm发布
     * 先新建index.js 文件
     * 为了方便用户，npm包入口文件用babel转换成ES5, 使用npm run build, 将package.json中"main":"index.js"修改成 "dist/index.js",
     * 注册npm用户
     * npm 发布
       ```
       npm adduser
       npm publish
       ``` 
       使用vue cli3 lib模式发布(--target lib)，新建src/index.js，执行记得修改package.json中的"main":"dist/sakura.umd.min.js"，指示入口文件地址
   4. npm link
      在本地开发npm模块的时候，我们可以使用npm link命令，将npm 模块链接到对应的运行项目中去，方便地对模块进行调试和测试
      首先，在开发的npm模块npm-link-module文件夹根目录下使用npm link命令，npm-link-module会根据package.json上的配置，被链接到全局
      然后，进入npm-link-example项目，执行 npm link npm-link-module.

      对npm-link-module的修改会被直接映射到 npm-link-example/node_modules/npm-link-module下面,实际上全局和项目目录下都会有个npm_link_modules快捷方式

# 组件开发要点
***

## Icon
使用淘宝iconfont [链接在此](https://www.iconfont.cn)
拷贝项目下面生成的symbol代码到本地，
使用方式如下
```
 <svg  class="s-icon" aria-hidden="true">
      <use :xlink:href="`#i-${name}`"></use>
  </svg>
```

## Button
slot : 是用户输入的文字
props: 
  * icon
  * iconPosition (默认在左)
  * loading
event: $emit('click')

技术点：
使用flex布局的order属性修改icon的位置顺序

## ButtonGroup
slot: Button组件
校验: mounted的时候判断$children是不是button

技术点：
按钮的样式，负margin解决两倍border问题
```
border-radius:0;
&:not(:first-child){
    margin-left:-1px;
}

&:hover{
    position: relative;
    z-index: 1;
}
```
## Input
props: 
  * value
  * disabled
  * readonly
  * error
event: $emit('input')/$emit('change')/$emit('focus')/$emit('blur') 
memo: 支持v-model

## Grid (s-row)

### row
slot: col组件
props: 
   * gutter
   * align

技术点：
row传入gutter的时候让每个col有左右gutter/2的padding, 此时会出现最左/右的col没有对齐边框，
再设置row左右margin 是负的gutter/2, 再mounted阶段使用$children实现row给col传值

### col
slot: 用户自定义内容
props:
   * span
   * offset
   * xs/sm/md/lg/xl

技术点：
实现响应式，传入xs/sm/md/lg/xl为col生成对应的类名，如col-xs-2, 结合媒体查询，使得在特点媒体条件下类名生效。
scss批量生成类名
```
$offset-npc-prefix:offset-npc-;
@for $i from 1 through 24 {
.#{$col-npc-prefix}#{$i} {width: 1/24*$i*100%}
}
```

## Container
### layout
slot: layout/header/content/footer/sider

技术点：
flex 弹性布局
默认layout是纵向排列，在里面有sider的时候横向排列；考虑到嵌套layout的情况，layout的flex-grow:1
content的flex-grow:1
header/footer可以设置高度,sider可以设置宽度

## Toast
从用户角度考虑，是用方法触发展示toast,那么就要去修改vue原型链。对于这种修改原型链的操作，vue推荐使用插件方式，这样规避2个问题：
开发者对于引入vue版本的问题；是否引入插件会覆盖原有原型链方法，让代码有侵入性

开发思路：在插件的install方法修改vue原型链，方法中引入我们的组件，手动调用extend方法获得组件构造器，然后new 一个组件实例，传递数据，再进行组件的$mount方法，让组件构建dom树保存在内存中，再调用document.body.appendChild(vm.$el)手动挂载组件。

暴露组件方法给用户调用，在组件内部调用callBack的时候参数传入this, 然后用户在自定义callBack的时候能通过参数拿到toast组件，从而调用toast组件内部方法。

## Tabs
技术点：
.sync 修饰符语法糖 （父组件）对应子组件内部抛出 $emit('update:eventName')
跨祖孙组件通信： provide inject
eventBus， 使用new Vue(), 因为new 出来的vue有$on/$off/$emit3个接口
注意vue组件的事件不会冒泡，html标签会
考虑到切换的时候，选中的tab-item下面的线会滑来滑去有动画，不考虑用after画线，用js实现在tab-head下面动态画线，使用到的原生js api Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。 (点我)[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect] 

一个事件中心 eventBuss
| 标签 | 触发 | 监听 |
| :------| ------: | :------: |
| tab | emit(只有初始化的时候emit) | - |
| tabHead|  | on(移动line)  |
| tabItem| emit(点击tabItem的时候emit) | on(设置item active)  |
| tabPane|  |  on(切换pane)|
 
注意！
provide 的函数不要用箭头函数，这样this不是指向vm
对ui操作放到nextTick


## popover
技术点：
这个组件要放外面，避免出现在一个overflow:hidden的元素中看不见
事件的冒泡处理 @click.stop 但是也会有其他问题：用户在自己div上写了click事件，但是组件阻止了冒泡
场景的考虑：点击（鼠标进入）按钮出现popover, （鼠标划出）点击popover以外区域popover隐藏
window.scrollY 滚动距离; 根元素中元素绝对定位相对于body


created 处理全局事件监听问题？ 用e.target判断点击对象 
API:Node.contains()返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点。
关于事件监听：
refrence的事件监听函数是切换visible的boolean
点击refrence出现popover,即visible是true,然后异步document添加监听函数（切记，要异步，否则document会监听到第一次click事件 ）
document监听函数如果被点击的target是popover或者被popover包含, 隐藏popover并且移除监听


## collapse
| 标签 | 触发 | 监听 |
| :------| ------: | :------: |
| collapse |update| add/remove |
| collapse-item| add/remove|update  |

核心：
单向数据流，让父组件来修改数据，通知子组件，子组件不要自己修改数据，子组件把要修改的意图通过事件发送给父组件，让父组件修改数据。
怎么抹平有无accordion差异？数组！让父元素操作被选中的值的数组并emit，子组件监听到做处理

## 1 cascader
问题1？多层v-for, 组件内部自己调用自己，必须用name属性， 左右递归的思想
单项数据流解决点了当展开三项，点了第一项其他则隐藏第三项, 
* 父组件控制全部selected数组，让每个item都知道全部选中项（数组）
* vue 修改data中的数组
* vue 不允许子组件修改props， item中的变更意图通过层层$emit让顶级组件自己修改
| | 左 | 右（递归组件） |
| :------| ------: | :------: |
| dataSource | 原始| 上一个的children |
| level| 0| 上一个+1  |
| 全局selected| 一样|一样  |
| 事件监听| 一样| 一样  |


## 2 animation


## 3 slider
技术点：使用了vue的过渡组件（适用场景：在插入、更新或者移除 DOM 时，v-if， v-show, 动态组件）,slide-item是块状元素，纵向排列，让上一个元素在离场动画变成绝对定位脱离文档流从而让第二个元素出现在第一个元素的默认位置上。
组件数据变化会触发updated钩子函数
思想： 父组件控制数据selected, 传给子组件，子组件知道出现哪个就让哪个动画形式出现
暂停动画就是取消定时器

幻灯片滑动方向需要区分用户轮播和手动轮播

## 4 nav
## 5 form
done

## 6 pagination
## 7 table
## 8 uploader
.+
## 9 sticky
原理：元素距离文档的距离（top+scrollY）大于scrollY 变成fiexed定位
bugs: 只有第一次获取top
      因为fixed脱离文档流导致内容变化可能让滚动条消失，所以让里面的元素fixed,外部元素用js设置高度
      定位元素的left top
mounted的时候改了有副作用的代码，如添加监听，要移除beforeDestory()
否则会造成内存泄露，webpack热更新会移除旧组件，旧的还会监听window的事件，但是这时候可能会找不到dom（因为已经被移除了）

## 10 datepicker
使用 scoped 后，父组件的样式将不会渗透到子组件中。 /deep/ https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
输入框用computed 依赖是value
选择下方日期或者修改输入框会通过$emit修改value,
当输入框输入不合法日期后，使用js原生方法将输入框value手动修改为正确的值，同时用computed属性的set方法修改computed的值

## 11 router

## 12 steps
done

bugs
1. cascader 用户怎传selected 
2. slider刚出场不应该有动画

<span class="code-string">
 <span class="code-row"><span></span></span>

 代码 layout container input cascader tab toast popover
attr : tab  

selectStart??
1 range
2 done add btn 今天 清除 关闭popover
3 done 选中日期后关闭
4 done  每次打开都是天 popover触发事件
5 done input 校验 同步 
   // 用原生js 改 input
   // 使用Date的getTime()方法，Invalid Date对象返回的是一个NaN, 使用isNaN()判断 https://www.jianshu.com/p/43b383b03ec9
7 start date 0 1
8 暴露的事件
9 done 年 月 选择

### 13 modal
bug 怎么判断要不要生成同一个modal?

# todo
input icon


