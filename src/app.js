import  Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

import Col from './col'
import Row from './row'

import Layout from './layout'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'

import Tab from './tab'
import TabHead from './tab-head'
import TabItem from './tab-item'
import TabBody from './tab-body'
import TabPane from './tab-pane'

import Collapse from './collapse'
import CollapseItem from './collapse-item'

import Popover from './popover'
import TestComp from './sync'
import ToastPlugin from './plugins/toast'

import Cascader from './cascader'
import CascaderItem from './cascader-item'

Vue.use(ToastPlugin)

Vue.component('s-button-group', ButtonGroup)
Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)
Vue.component('s-popover',Popover)

Vue.component('s-layout', Layout)
Vue.component('s-header', Header)
Vue.component('s-sider', Sider)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)

Vue.component('s-tab', Tab)
Vue.component('s-tab-head', TabHead)
Vue.component('s-tab-item', TabItem)
Vue.component('s-tab-body', TabBody)
Vue.component('s-tab-pane', TabPane)

Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)

Vue.component('s-cascader', Cascader)
Vue.component('s-cascader-item', CascaderItem)

Vue.component('test-comp', TestComp)


new Vue({
    el:'#app',
    data:{
        arr:["1","4"],
        value:'3',
        loading1:true,
        testMsg:'testMsg',
        number:100,
        number2:100,
        selected: [],
        options:[{
            label:"美国",
            children:[
              {
                label:"德克萨斯",
                children:[
                  {label:"休斯顿"},
                  {label:"达拉斯"}
                ]
              }
            ]
          },
          {
            label:"中国",
            children:[
              {
                label:"广东",
                children:[
                  {label:"汕头"},
                  {label:"揭阳"}
                ]
              },
              {
                label:"江苏",
                children:[
                  {label:"苏州"},
                  {label:"南京"}
                ]
              }
            ]
          }
        ]
    },
    methods:{
        say(e){
            console.log('trigger say')
            console.log(e)
        }
    },
    mounted(){
    },
    methods:{
        showToast(){
            this.$toast({
            'message':'<p>123</p>',
            'enableHtml':true
           
            })
        },
        showToast2(){
            this.$toast({
                'message':'duration是5s', 
                'duration':5000,
                'position':'bottom'
            })
        },
        showToast3(){
            this.$toast({'message':'更新元素可以重新考虑是否通过使用组件来替代。', 
            'autoClose': false,
            'closeBtn':{'btnText':'',
                        'callback':function(arg){
                            // console.log('用户说他知道啦')
                            // console.log(arg.componentMethod());
                        }
                      },
            'position':'middle'
            })
        }
    }
})