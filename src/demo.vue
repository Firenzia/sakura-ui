<template>
  <div style="width:600px">
    <s-steps :active="active" space="200" step-finish-color="red">
      <s-step title="步骤 1"></s-step>
      <s-step title="步骤 2"></s-step>
      <s-step title="步骤 3"></s-step>
  </s-steps>

  <button @click="set">click</button>
  </div>
</template>
<script>

export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {
    set(){
      console.log(this.active)
      if(this.active===3){
        this.active = 0
        return
      }
      this.active++
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
