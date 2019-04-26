<template>
    <div class="s-row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-row',
  props: {
    gutter: {
      type: [Number, String]
    },
    align: {
      validator: function (val) {
        return ['center', 'left', 'right'].includes(val)
      }
    }
  },
  computed: {
    rowStyle () {
      let { gutter } = this
      return `margin-left: -${gutter / 2}px;margin-right: -${gutter / 2}px;`
    },
    rowClass () {
      let { align } = this
      return align && `align-${align}`
    }
  },
  mounted () {
    // 父元素给子元素传值
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
    .s-row{
        display: flex;
        height: 40px;
        margin:20px 0;
        align-items:center;
        display: flex;
        &.align-left {
          justify-content: flex-start;
        }
        &.align-right {
          justify-content: flex-end;
        }
        &.align-center {
          justify-content: center;
        }
    }
</style>
