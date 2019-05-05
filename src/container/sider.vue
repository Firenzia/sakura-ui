<template>
    <div :style="widthSetting" class="s-sider">
         <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-sider',
  props: {
    width: {
      type: [Number, String],
      default: '300'
    }
  },
  computed: {
    widthSetting () {
      return `width:${this.width}px`
    }
  }
}
</script>
<style lang="scss" scoped>
.s-sider{
    background: #3ba0e9;
    color:#fff;
}
</style>
