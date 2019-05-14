<template>
  <div>
    <sakura-card>
       <s-button @click="clickHandler" icon="gift-fill">点我</s-button>
      <s-button @click="clickHandler2" icon="discovery" style="margin-left:30px;background:#91AD70" >点我</s-button>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
  </div>
</template>
<script>
import Vue from "vue";
import ModalPlugin from "../../../src/plugins/modal";
import Button from '../../../src/button/button'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.use(ModalPlugin);
export default {
  data() {
    return {
      code: `
        <s-button @click="clickHandler" icon="gift-fill">点我</s-button>
        import Vue from "vue";
        import ModalPlugin from "../../../src/plugins/modal";

        Vue.use(ModalPlugin);
        export default {
          methods: {
            clickHandler () {
              let func1 = () => {
                this.$toast({
                  message: '报名成功',
                  duration: 1500 })
              }
              let func2 = () => {
                this.$toast({
                  message: '期待你下次再来',
                  duration: 1500 })
              }
              let func3 = () => {
                this.$toast({
                  message: '你为什么啥都没点就跑了',
                  duration: 2500 })
              }
              this.$modal({
                title: '一个来自朋友的邀请',
                content: '今天晚上去大学城吗',
                btnConfig: {
                  'confirmText': '确认',
                  'confirmCallback': func1,
                  'cancelText': '取消',
                  'cancelCallback': func2,
                  'cancelModalCallback': func3
                } 
              })
          }
        }
    `.replace(/^ {8}/gm, "").trim()
    };
  },
  components:{
    's-button':Button
  },
  methods: {
     clickHandler () {
      let func1 = () => {
        this.$toast({
          message: '报名成功',
          duration: 1500 })
      }
      let func2 = () => {
        this.$toast({
          message: '期待你下次再来',
          duration: 1500 })
      }
      let func3 = () => {
        this.$toast({
          message: '你为什么啥都没点就跑了',
          duration: 2500 })
      }
      this.$modal({
        title: '一个来自朋友的邀请',
        content: '今天晚上去大学城吗',
        btnConfig: {
          'confirmText': '确认',
          'confirmCallback': func1,
          'cancelText': '取消',
          'cancelCallback': func2,
          'cancelModalCallback': func3
        } 
      })
    },
     clickHandler2 () {
      let func1 = () => {
        this.$toast({
          message: '报名成功',
          duration: 1500 })
      }
      this.$modal({
        title: '换肤测试',
        content: '<p style="color:orange">这个颜色你喜欢吗</p>',
        enableContentHtml: true,
        btnConfig: {
          'confirmText': '确认',
          'confirmCallback': ()=>{
            this.$toast({
              message: '阿里嘎多~~',
              duration: 1500 })
            }
        } 
      })
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

