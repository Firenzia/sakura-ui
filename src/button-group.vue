<template>
    <div class="s-btn-group">
       <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-button-group',
  mounted () {
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== 'button') {
        console.warm('使用不规范，请参考官方文档')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    $border-radius:4px;
    .s-btn-group{
        display: inline-flex;
        vertical-align: middle;
        > .s-button{
          border-radius:0;
          &:not(:first-child){
              margin-left:-1px;
          }
          &:first-child{
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
          }
          &:last-child{
           border-top-right-radius: $border-radius;
           border-bottom-right-radius: $border-radius;
          }
          &:hover{
            position: relative;
            z-index: 1;
          }
        }

    }
</style>
