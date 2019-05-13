# 预览
(组件库官网) [https://firenzia.github.io/sakura-ui/]
(github) [https://github.com/Firenzia/sakura-ui/]

# 学习组件库制作会学到
* 组件封装技能，良好的接口设计, 组件设计套路
* 夯实js/css基础
* 深入对vue的理解
  
# 制作流程
1. 组件设计/开发
2. 发布npm
3. 制作官网展示

## 组件设计/开发
我针对自己已完成的16个组件，所涉及到的技术点，整理如下表格。组件设计的思想包括单数据流/ eventBus事件中心，核心动作是组件通信，会涉及到的vue api包括
* $childrem ： 获取当前组件子组件
* $parent：  获取当前组件父组件
* $refs： 获取当前组件某个组件或者dom
* $el: 组件的根dom结点
* provide： 
* inject ：
* $on： 组件监听自定义事件
* $emit： 组件触发自定义事件
* .sync：语法糖，父组件监听到子组件修改props的意图后父组件修改传入的props



| 组件类型 | 组件|单数据流 | vue插件开发 | eventBus| 原生js操作dom & 事件| 递归|媒体查询&flex布局| 
| :------| ------: | :------: |:------| :------| :------: |:------|:------|
| 基础| button |-  |-| -|-  |-  |-  |
| 基础| icon |-  |-| -|-  |-  |-  |
| 基础| grid |-  |-| -|-  |-  | yes |
| 基础| layout |-  |-| -|-  |-  | yes |
| 表单| input |-  |-| -|-  |-  |-  |
| 表单| cascader | yes  |-| -|-  | yes  |-  |
| 表单| form |-  |-| -|-  |-  |-  |
| 表单| datepicker |-  |-| -| yes |-  |-  |
| 导航| tab |-  |-| yes|-  |-  |-  |
| 导航| step |-  |-| -| -  |-  |-  |
| 通知| toast |-  |yes| -|yes |-  |-  |
| 通知| popover |-  |-| -| yes | -  |-  |
| 通知| modal |-  |yes| -|yes | -  |-  |
| 其他| collapse | yes  |-| yes|-  |-  |-  |
| 其他| slide | yes  |-| -|-  |-  |-  |
| 其他| sticky |-  |-| -|-  |-  |-  |

## 发布npm
1. 使用vue cli3 的库模式打包代码，修改package.json 中的"build": "vue-cli-service build --target lib --name sakura src/index.js"，打包后输出umd构建版本, 参考[vue cli](https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93)
```
File                     Size                     Gzipped

dist/sakura.umd.min.js    13.28 kb                 8.42 kb
dist/sakura.umd.js        20.95 kb                 10.22 kb
dist/sakura.common.js     20.57 kb                 10.09 kb
dist/sakura.css           0.33 kb                  0.23 kb
```
2. 在package.json指明模块入口"main":"dist/sakura.umd.min.js"
3. 在npm 上注册一个用户
4. 在命令行输入，注意每次发布都要修改package.json中的 "version": "0.0.x"，"private"必须设置成false才能发布
   ```
   npm adduser
   npm publish
   ```
## 官网制作
使用vue press
### 引入自己的vue组件
### 覆盖默认主题样式
在.vuepress下新增style.styl进行覆盖，(参考)[]
### 部署到github
在项目根目录下新增deploy.sh

