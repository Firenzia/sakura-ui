<template>
    <div :style="heightSetting" class="s-header">
         <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-header',
  props: {
    height: {
      type: [Number, String],
      default: '60'
    }
  },
  computed: {
    heightSetting () {
      return `height:${this.height}px`
    }
  }
}
</script>
<style lang="scss" scoped>
  .s-header{
      background: #7dbcea;
      color: #fff;
  }

</style>
