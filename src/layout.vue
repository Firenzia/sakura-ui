<template>
    <div class="s-layout" :class="layoutClass" :style="heightSetting">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-layout',
  data () {
    return {
      layoutClass: {
        hasSidebar: false
      }
    }
  },
  props: {
    height: {
      type: [Number, String]
    }
  },
  computed: {
    heightSetting () {
      return `height:${this.height}px`
    }
  },
  mounted () {
    this.$children.forEach(child => {
      if (child.$options.name === 's-sider') {
        this.layoutClass.hasSidebar = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
    .s-layout{
        display: flex;
        flex-grow: 1;
        flex-direction: column;

        &.hasSidebar{
            flex-direction: row;
        }
    }
</style>
