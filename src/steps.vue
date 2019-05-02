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
    stepFinishColor: {
      type: String
    }
  },
  mounted () {
    this.boardcast()
    this.setStepStyle()
  },
  methods:{
    setStepStyle(){
      console.log(this.space)
      if(this.space || this.stepFinishColor){
        this.$children.forEach(vm => {
        vm.lineWidth = this.space
        vm.stepFinishColor= this.stepFinishColor
      })
      }
    },
    boardcast(){
        this.$children.forEach(vm => {
        vm.active = this.active
      })
    }
  },
  updated(){
    this.boardcast()
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
