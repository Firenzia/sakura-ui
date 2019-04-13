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

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect
// 测试按钮是否是setting
{
  let Con = Vue.extend(button)
  let vm = new Con({
      propsData:{
        icon: 'setting'
      }
  })
  vm.$mount()
  let href = vm.$el.querySelector('use').getAttribute('xlink:href')
  expect(href).to.equal('#i-setting')
  vm.$el.remove()
  vm.$destroy()
}

// 测试加了icon 和loading, 只显示loading
{
    let Con = Vue.extend(button)
    let vm = new Con({
        propsData:{
          icon: 'setting',
          loading:true
        }
    })
    vm.$mount()
    let href = vm.$el.querySelector('use').getAttribute('xlink:href')
    expect(href).to.equal('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
//  测试不传icon-position, icon在左侧
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let Con = Vue.extend(button)
    let vm = new Con({
        propsData:{
          icon: 'setting',
        }
    })
    vm.$mount(div)
    let {order} = window.getComputedStyle(vm.$el.querySelector('svg'))
    expect(order).to.equal('1')
    vm.$el.remove()
    vm.$destroy()
}
//  测试传icon-position, icon在右侧
{
    let div = document.createElement('div')
    document.body.appendChild(div)
    let Con = Vue.extend(button)
    let vm = new Con({
        propsData:{
          icon: 'setting',
          iconPosition:'right'
        }
    })
    vm.$mount(div)
    let {order} = window.getComputedStyle(vm.$el.querySelector('svg'))
    expect(order).to.equal('2')
    vm.$el.remove()
    vm.$destroy()
}

//  测试点击
{
    let Con = Vue.extend(button)
    let vm = new Con({
        propsData:{
          icon: 'setting',
          loading:true
        }
    })
    vm.$mount()
    // mock data
    let spy = chai.spy(function(){})
    vm.$on('click', spy)

    let btn =vm.$el
    btn.click()
    expect(spy).to.have.been.called()   
    vm.$el.remove()
    vm.$destroy()
}
