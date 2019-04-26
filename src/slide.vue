<template>
  <div class="s-slide">
     <div class="s-window">

     </div>
     <div class="item-wrapper">
       <slot></slot>
     </div>
  </div>
</template>
<script>
export default {
  name: 's-slide',
  props: {
    selected: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  .s-slide{
    position: relative
  }
  .s-window{
    border:1px solid black;
    height:100px;
    width: 100px;

  }
  .item-wrapper{
    position: absolute;
    top:0;
    left:0
  }
</style>
