
// import Vue from 'vue'
// import button from '../src/button'
// const expect = chai.expect

// describe('button',()=>{
//     it('可以设置icon', ()=>{
//         let Con = Vue.extend(button)
//         let vm = new Con({
//             propsData:{
//                 icon: 'setting'
//             }
//         })
//         vm.$mount()
//         let href = vm.$el.querySelector('use').getAttribute('xlink:href')
//         expect(href).to.equal('#i-setting')
//         vm.$el.remove()
//         vm.$destroy()
//     })
//     it('可以设置loading', ()=>{
//         let Con = Vue.extend(button)
//         let vm = new Con({
//             propsData:{
//               icon: 'setting',
//               loading:true
//             }
//         })
//         vm.$mount()
//         let href = vm.$el.querySelector('use').getAttribute('xlink:href')
//         expect(href).to.equal('#i-loading')
//         vm.$el.remove()
//         vm.$destroy()
//     })
//     it('icon默认在左边', ()=>{
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         let Con = Vue.extend(button)
//         let vm = new Con({
//             propsData:{
//             icon: 'setting',
//             }
//         })
//         vm.$mount(div)
//         let {order} = window.getComputedStyle(vm.$el.querySelector('svg'))
//         expect(order).to.equal('1')
//         vm.$el.remove()
//         vm.$destroy()
//     })
//     it('icon可以设置在右边', ()=>{
//         let div = document.createElement('div')
//         document.body.appendChild(div)
//         let Con = Vue.extend(button)
//         let vm = new Con({
//             propsData:{
//               icon: 'setting',
//               iconPosition:'right'
//             }
//         })
//         vm.$mount(div)
//         let {order} = window.getComputedStyle(vm.$el.querySelector('svg'))
//         expect(order).to.equal('2')
//         vm.$el.remove()
//         vm.$destroy()
//     })
//     it('测试点击', ()=>{
//         let Con = Vue.extend(button)
//         let vm = new Con({
//             propsData:{
//             icon: 'setting',
//             }
//         })
//         vm.$mount()
//         // mock data
//         const callback = sinon.fake()
//         vm.$on('click', spy)

//         vm.$el.click()
//         expect(callback).to.have.been.called()   
//         vm.$el.remove()
//         vm.$destroy()
//     })
// })
const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Button).to.be.ok
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
        }).$mount()

        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})
