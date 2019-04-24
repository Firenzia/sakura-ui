<template>
   <div>
      <div class="content"></div>
      <div class="popper">
         <div class="menu">
           <div v-for="(item,index) in this.options" :key="index" @click="setLevel1(item.label)">
             {{item.label}}
           </div>

           <div v-if="key1">
             <div  v-for="(item2,index2) in key1.children" :key="index2">
             {{item2}}
           </div>
           </div>
         </div>
      </div>
   </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
  name: 's-cascader',
  props:{
    options:{
    },
  },
  data(){
    return {
      key1:[],
      key2:[]
    }
  },
  methods:{
    setLevel1(label){
      this.key1=this.options.filter(function(item){
        return item.label === label})
      console.log(this.key1)
    },
    // setLevel2(item){
    //   this.key2=item.label
    // }
  },
  components:{
    's-cascader-item': CascaderItem
  },
  created(){
  }
}
</script>
<style lang="scss" scoped>
  .content{
    width: 200px;
    height: 40px;
    border: 1px solid #ccc;
  }
  .popper{
    .menu{
      display: inline-flex;
      flex-direction: column;
      border:1px solid #ccc;
    }
  }
</style>

