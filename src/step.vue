<template>
  <div class="s-step" :style="stepStyle">
    <div class="step-head">
      <div class="line" :class="{highlight}"></div>
      <div class="ico" :class="{icoHighlight}">
        <s-icon v-if="index<=active" name="tick" color="#d4b1b5"></s-icon>
        <span v-else>{{index}}</span>
      </div>
    </div>
    <div class="step-main" :class="{icoHighlight}">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 's-step',
  data () { 
    return {
      index: 0,
      active:0,
      lineWidth: undefined,
      stepFinishColor: undefined
    }
  },
  computed: {
    stepStyle(){
      if(this.lineWidth){
        return {
          width: this.lineWidth+'px',
          flexGrow: 0
        }
      }
    },
    highlight(){
      return this.index < this.active
    },
    icoHighlight(){
      return this.index <= this.active
    }
  },
  mounted(){
    console.log(this.lineWidth)
    this.setIndex()
  },
  methods:{
    setIndex() {
      this.index=Array.from(this.$parent.$el.children).indexOf(this.$el)+1
    }
  },
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.s-step{
  .step-head{
    height:30px;
    display: flex;
    align-items: center;
    position: relative;
    .line{
      width: 100%;
      height: 2px;
      background: #ccc;
      &.highlight{
        background:#d4b1b5;
      }

    }
    .ico{
      width:26px;
      height:26px;
      border:2px solid #ccc;
      background:#fff;
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items:center;
      position: absolute;
      z-index: 1;
      color:#ccc;
      &.icoHighlight{
        border-color: #d4b1b5
      }
    }
  }
  
  .step-main{
    &.icoHighlight{
      color: #d4b1b5;
    }
  }
}
</style>
