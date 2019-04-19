import toast from '../toast'
export default {
  install(Vue, options){
    Vue.prototype.$toast = function(options){
        let Constructor = Vue.extend(toast)
        let vm = new Constructor()
        vm.message = options.message
        vm.$mount()
        document.body.appendChild(vm.$el)
    }
  }
}