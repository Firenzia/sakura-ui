<template>
  <div class="s-step" :style="stepStyle" :class="`step-${direction}`">
    <div class="step-head">
      <div class="line" :style="lineStyle"></div>
      <div class="ico" :style="icoWrapperStyle">
        <template v-if="icon">
          <s-icon  :name="icon" :style="icoStyle" ></s-icon>
        </template>
        <template v-else>
          <s-icon v-if="index<=active" name="tick" :style="icoStyle"></s-icon>
          <span v-else>{{index}}</span>
        </template>
      </div>
    </div>
    <div class="step-main" :style="contentStyle">
      <div class="title">{{title}}</div>
      <div v-if="description" class="desc">{{description}}</div>
    </div>
  </div>
</template>
<script>
import Icon from '../icon/icon'
export default {
  name: 's-step',
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    icon: {
      type: String
    }
  },
  data () {
    return {
      index: 0,
      active: 0,
      lineSpan: undefined,
      stepFinishColor: '#d4b1b5',
      direction: 'horizontal'
    }
  },
  computed: {
    lineStyle () {
      return this.index < this.active ? { backgroundColor: this.stepFinishColor } : false
    },
    icoWrapperStyle () {
      let baseStyle = !this.icon ? { border: '2px solid #ccc' } : {}
      if (this.index <= this.active) {
        Object.assign(baseStyle, { borderColor: this.stepFinishColor })
      }
      return baseStyle
    },
    icoStyle () {
      return this.index <= this.active ? { color: this.stepFinishColor } : false
    },
    contentStyle () {
      return this.index <= this.active ? { color: this.stepFinishColor } : false
    },
    stepStyle () {
      if (this.lineSpan) {
        let baseStyle = { flexGrow: 0 }
        const map = {
          'horizontal': { width: this.lineSpan + 'px' },
          'vertical': { height: this.lineSpan + 'px' }
        }
        return Object.assign(baseStyle, map[this.direction])
      } else {
        return false
      }
    },
    beforeActiveHighlight () {
      return this.index < this.active
    },
    toActiveHighlight () {
      return this.index <= this.active
    }
  },
  components: {
    's-icon': Icon
  },
  mounted () {
    this.setIndex()
  },
  methods: {
    setIndex () {
      this.index = Array.from(this.$parent.$el.children).indexOf(this.$el) + 1
    }
  }

}
</script>
<style lang="scss" scoped>

.s-step{
  &.step-vertical{
    display: flex;
    flex-direction: row;
     .step-head{
      width:30px;
      height: auto;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      position: relative;
        .line{
          height: 100%;
          width: 2px;
          background: #ccc;
        }
      }
      .step-main{
        padding:0 .4em;
        .title{
          padding:.2em 0;
        }
      }
  }
  .step-head{
    height:30px;
    display: flex;
    align-items: center;
    position: relative;
    .line{
      width: 100%;
      height: 2px;
      background: #ccc;
    }
    .ico{
      width:26px;
      height:26px;
      background:#fff;
      border-radius:50%;
      display: flex;
      justify-content: center;
      align-items:center;
      position: absolute;
      z-index: 1;
      color:#ccc;

    }
  }

  .step-main{
    .title{
      padding:.5em 0;
    }
    .desc{
      font-size: 12px
    }
  }
}
</style>
