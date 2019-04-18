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


## Tabs
技术点：
.sync 修饰符语法糖 （父组件）对应子组件内部抛出 $emit('update:eventName')
跨祖孙组件通信： provide inject
eventBus， 使用new Vue(), 因为new 出来的vue有$on/$off/$emit3个接口
注意vue组件的事件不会冒泡，html标签会
考虑到切换的时候，选中的tab-item下面的线会滑来滑去有动画，不考虑用after画线，用js实现在tab-head下面动态画线，使用到的原生js api Element.getBoundingClientRect()方法返回元素的大小及其相对于视口的位置。 (点我)[https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect] 
 
注意！provide 的函数不要用箭头函数，这样this不是指向vm


