<template>
  <transition name="slide">
    <div class="slide-item" v-show="visible">
    <slot></slot>
  </div>
  </transition>
</template>
<script>
export default {
  name: 's-slide-item',
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  created () {
  },
  mounted () {
  },
  computed: {
    visible () {
      return this.selected === this.name
    }
  }
}
</script>
<style lang="scss" scoped>
    .slide-item{
    }
    .slide-leave-active{
      position: absolute;
      left:0;
      top:0;
    }
   .slide-enter-active, .slide-leave-active{
     transition: all 1s;
   }
   .slide-enter{
     transform: translateX(100%);
   }
   .slide-leave-to{
     transform: translateX(-100%);
   }
</style>
