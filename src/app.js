import  Vue from 'vue'
import button from './button'
import icon from './icon'
import buttonGroup from './button-group'
import input from './input'
import col from './col'
import row from './row'


Vue.component('s-button-group', buttonGroup)
Vue.component('s-button', button)
Vue.component('s-icon', icon)
Vue.component('s-input', input)
Vue.component('s-row', row)
Vue.component('s-col', col)


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
    }
})