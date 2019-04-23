<template>
    <div class="item">
        <div class="header" @click="toggle">{{visible}}{{title}}</div>
        <div class="body" v-show="visible">
           <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name:'s-collapse-item',
  props:{
    title:{
      type: String,
      required: true
    },
    name:{
      type:String,
      required: true
    }
  },
  inject:['eventBus'],
  data(){
    return {
      visible:false,
      singlePane: false
    }
  },
  
  mounted(){
       this.eventBus.$on('update:selected', (v)=>{
        console.log('get selected',v);
             if(v.includes(this.name)){
                 this.visible =true
             }else{
                 this.visible =false
             }
      })
    //   accoudion
  },
  methods:{
    toggle(){
        this.visible = !this.visible
        if(this.visible){
            this.eventBus.$emit('update:selected',this.name)
        }
    },
  }
}
</script>
<style lang="scss" scoped>
   .item{
      .header{
        padding:.5em
      }
   }
</style>


