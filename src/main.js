import Vue from 'vue'
import Demo from './demo.vue'

Vue.config.productionTip = false
const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
try {
  context.keys().forEach(path => {
    let res = context(path)
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  render: h => h(Demo)
}).$mount('#app')
