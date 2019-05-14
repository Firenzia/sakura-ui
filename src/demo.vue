<template>
  <div style="margin:60px">
    <s-datepicker v-model="selectedDate" @showPanel="y" @closePanel="z"></s-datepicker>
    {{sum}}
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
      selectedDate: new Date('2019-05-05')
    }
  },
  computed: {

  },
  mounted () {
    setTimeout(() => {
      this.num = 100
      console.log(this.num)
    }, 1000)
  },
  methods: {
    y (e) {
      console.log('i open', e)
    },
    z () {
      console.log('i close')
    },
    x () {
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
        } })
    }
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
