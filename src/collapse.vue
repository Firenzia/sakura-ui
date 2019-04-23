<template>
  <div class="collapse">
      <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name:'s-collapse',
  props:{
    selected:{
        type: [String, Array]
    },
    accordion:{
        type:Boolean
    }
  },
  data(){
    return {
        eventBus: new Vue()
    }
  },
  provide(){
    return {eventBus: this.eventBus}
  },
  created(){
     
  },
  mounted(){
      this.eventBus.$emit('update:selected',this.selected)
       this.$children.forEach(vm => {
          vm.singlePane = this.accordion
      })
    //  todo 父组件自己修改selected数组，然后子组件监听到数据变化更新视图
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse{
      border: 1px solid $border-color;
      border-radius: $border-radius;
  }
</style>

