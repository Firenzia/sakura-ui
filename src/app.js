import  Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'

Vue.component('s-button-group', buttonGroup)
Vue.component('s-button', button)
Vue.component('s-icon', icon)


new Vue({
    el:'#app',
    data:{
        loading1:true
    }
})