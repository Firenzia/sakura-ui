const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
    it('存在.', () => {
        expect(Input).to.be.ok
    })
    
    describe('属性测试', ()=>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
        it('可以设置value.', () => {
            
            vm = new Constructor({
            propsData: {
                value: "test"
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('test')
        })
        it('可以设置readOnly属性.', () => {
            vm = new Constructor({
            propsData: {
                readonly:true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('可以设置disabled属性.', () => {
            vm = new Constructor({
            propsData: {
                disabled:true
            }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.getAttribute('disabled')).to.equal('disabled')
        })
        it('可以设置error属性.', () => {
            vm = new Constructor({
            propsData: {
                error:'有问题哦'
            }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const msgDom =  vm.$el.querySelector('.err-msg')
            expect(msgDom.innerText).to.equal('有问题哦')
        })
    
    })


    describe('事件测试',() =>{
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(()=>{
            vm.$destroy()
        })
       it('可以支持v-model',()=>{
        vm = new Constructor({}).$mount()

        let callback
        ['input','change'].forEach((EventName)=>{
            callback = sinon.fake();
            vm.$on(EventName, callback)

            let event = new Event(EventName)
            Object.defineProperty(event, 'target',{value:{value:'hi'}, enumerable: true})
            vm.$el.querySelector('input').dispatchEvent(event)
            expect(callback).to.have.been.calledWith('hi')
        })
       })
    })
})
