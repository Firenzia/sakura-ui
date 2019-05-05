import toast from '../notice/toast'
export default {
  install (Vue, options) {
    let toast
    Vue.prototype.$toast = function (userConfig) {
      // 多次点击，销毁之前的toast
      if (toast) {
        console.log('销毁上一个')
        toast.close()
      }
      toast = createToast({ Vue,
        userConfig,
        onClose: () => { console.log('监听到已关闭'); toast = null } })
    }
  }
}

function createToast ({ Vue, userConfig, onClose }) {
  let Constructor = Vue.extend(toast)
  let vm = new Constructor({
    propsData: {
      ...userConfig
    }
  })

  vm.message = userConfig.message
  vm.$on('closed', onClose)
  vm.$mount()
  document.body.appendChild(vm.$el)
  return vm
}
