import modal from '../notice/modal'

export default {
  install (vue, options) {
    const Construtor = vue.extend(modal)

    let modalVm // 保证全局只有一个modal实例
    let lastOption
    vue.prototype.$modal = (options) => {
      // propsData 只用于 new 创建的实例中。

      if (lastOption !== JSON.stringify(options)) { //! modalVm
        modalVm = new Construtor({ propsData: options })
        modalVm.$mount()

        document.body.append(modalVm.$el)
      }
      lastOption = JSON.stringify(options)
      modalVm.isVisible = true
    }
  }
}
