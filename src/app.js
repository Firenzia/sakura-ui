import  Vue from 'vue'
import button from './button'
import icon from './icon'

Vue.component('s-button', button)
Vue.component('s-icon', icon)

new Vue({
    el:'#app',
    data:{
        loading1:true
    }
})