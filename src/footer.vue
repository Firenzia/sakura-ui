<template>
    <div :style="footerSetting" class="s-footer">
         <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-footer',
  props: {
    height: {
      type: [Number, String],
      default: '60'
    }
  },
  computed: {
    footerSetting () {
      return `height:${this.height}px`
    }
  }
}
</script>
<style lang="scss" scoped>
  .s-footer{
      background: #7dbcea;
      color: #fff;
  }
</style>
