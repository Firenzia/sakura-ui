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


Vue.component('s-button-group', ButtonGroup)
Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-row', Row)
Vue.component('s-col', Col)

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



new Vue({
    el:'#app',
    data:{
        loading1:true,
        testMsg:'testMsg'
    },
    methods:{
        say(e){
            console.log('trigger say')
            console.log(e)
        }
    },
    mounted(){
    }
})