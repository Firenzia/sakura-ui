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
        default:()=>{
          return []
        },
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
    //todo 兼容传入字符串
    //  this.formatSelect()
  },
  methods:{
    formatSelect(){
      if(!Array.isArray(this.selected) && typeof(this.selected)==='string'){
        console.log('str')
        this.selected= [this.selected]
      }
    }
  },
  mounted(){
      this.eventBus.$emit('update:selected',this.selected)
    // 父组件自己修改selected数组，然后子组件监听到数据变化更新视图
      this.eventBus.$on('add:selected',(name)=>{
        if(this.accordion){
          this.selected.splice(0,1,name)
        }else{
          this.selected.push(name)
        }
        this.eventBus.$emit('update:selected',this.selected)
      })

      this.eventBus.$on('remove:selected',(name)=>{
         if(!this.accordion){
           let idx = this.selected.indexOf(name)
           this.selected.splice(idx,1)
           this.eventBus.$emit('update:selected',this.selected)
         }
      })
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse{
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding:.5em 1em;
  }
</style>

