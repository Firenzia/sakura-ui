<template>
  <div class="s-steps" :class="`steps-direction-${direction}`">
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
    },
    direction:{
      type: String,
      validator(val){
        return ['vertical','horizontal'].includes(val)
      },
      default:'horizontal'
    }
  },
  mounted () {
    this.boardcast()
    this.setStepStyle()
  },
  methods:{
    setStepStyle(){
      this.$children.forEach(vm => {
        if(this.space) { vm.lineWidth = this.space }
        if(this.stepFinishColor) { vm.stepFinishColor= this.stepFinishColor }
        if(this.direction){ vm.direction = this.direction }
      })     
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
  &.steps-direction-horizontal{
    flex-direction: row;
  }
  &.steps-direction-vertical{
    flex-direction: column;
  }
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
