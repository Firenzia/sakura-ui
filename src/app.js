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

Vue.component('test-comp', TestComp)


new Vue({
    el:'#app',
    data:{
        arr:["1"],
        loading1:true,
        testMsg:'testMsg',
        number:100,
        number2:100
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