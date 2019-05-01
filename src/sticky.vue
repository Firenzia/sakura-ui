<template>
  <div ref="stickyItem" >
    <div class="slot-wrapper"
      :class="{'sticky':sticky}"
      :style="{top,left}" >
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 's-sticky',
  props: {
    offsetTop: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      limitY: 0,
      sticky: false,
      top: 0,
      left: 0,
      g_scrollHandler: undefined,
      msg: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initData()
      this.addListener()
    },
    addListener () {
      this.g_scrollHandler = this.scrollHandler.bind(this)
      window.addEventListener('scroll', this.g_scrollHandler)
    },
    initData () {
      let { top, left } = this.$refs.stickyItem.getBoundingClientRect()
      this.limitY = top - this.offsetTop
      this.left = left + 'px'
      this.top = this.offsetTop + 'px'
    },
    scrollHandler () {
      if (window.scrollY > this.limitY) {
        this.sticky = true
      } else {
        this.sticky = false
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.g_scrollHandler)
  }
}
</script>
<style lang="scss" scoped>

.slot-wrapper{
  &.sticky{
    position: fixed;
  }
}

</style>
