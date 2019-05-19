<template>
  <div style="margin:60px">
    <s-button @click="x">show modal</s-button>
  </div>
</template>
<script>
import modal from './plugins/modal'
import toast from './plugins/toast'
import Vue from 'vue'
Vue.use(modal)
Vue.use(toast)

export default {
  data () {
    return {
    }
  },
  computed: {

  },
  mounted () {
  },
  methods: {

    x () {
      let func1 = () => {
        this.$toast({
          message: '报名成功',
          duration: 1500 ,
          type:'success'})
      }
      let func2 = () => {
        this.$toast({
          message: '期待你下次再来',
          duration: 1500,
          type:'info'})
      }
      let func3 = () => {
        this.$toast({
          message: '你为什么啥都没点就跑了',
          duration: 2500,
          type:'error' })
      }
      this.$modal({
        title: '一个来自朋友的邀请',
        content: '今天晚上去大学城吗?',
        btnConfig: {
          'confirmText': '确认',
          'confirmCallback': func1,
          'cancelText': '取消',
          'cancelCallback': func2,
          'cancelModalCallback': func3
        } })
    }
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
