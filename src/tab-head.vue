<template>
    <div class="s-tab-head" :class="tabPosition">
        <span class="line"></span>
       <slot></slot> 
       
    </div>
</template>
<script>
export default {
    name:"s-tab-head",
    data(){
        return {
            align:'top'
        }
    },
    computed:{
        tabPosition() {
            return `tab-${this.align}` 
        }
    }
}
</script>
<style lang="scss" scoped>
  .s-tab-head{
      display: flex;
      border:1px solid #ccc;
      &.tab-left{
          flex-direction: column;
      }
      .line{
          position:relative;
          width:100px;
          border-bottom:1px solid blue;
      }
  }
</style>