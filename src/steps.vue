<template>
  <div class="s-steps">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 's-steps',
  props: {
    active: {
      type: Number
    },
    space: {
      type: [Number, String]
    },
    finishStyle: {
      type: String
    }
  },
  mounted () {
    let childCount = this.$children.length
    this.$children.forEach(vm => {
      vm.stepCounts = childCount
    })
  }
}
</script>
<style lang="scss" scoped>
.s-steps{
  display: flex;
  border:1px solid black;
}

</style>
<style  lang="scss">
.s-steps .s-step:not(:last-child){
  flex-grow:1
}
.s-steps .s-step:last-child{
  .line{
    display:none
  }
}
</style>
