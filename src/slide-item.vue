<template>
  <div class="slide-item">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 's-slide-item',
  props: {
    name: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  .slide-item{
    border:1px solid red;
    display: inline-block;
  }
</style>
