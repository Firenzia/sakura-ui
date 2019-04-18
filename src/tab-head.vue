<template>
    <div class="s-tab-head" :class="tabPosition">
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
      &.tab-left{
          flex-direction: column;
      }
  }
</style>