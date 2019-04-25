<template>
   <div>
      <div class="content"></div>
      <div class="popper">
          <s-cascader-item :options="options"></s-cascader-item>
      </div>
   </div>
</template>
<script>
import CascaderItem from './cascader-item'
export default {
  name: 's-cascader',
  props:{
    options:{
      type: Array
    },
  },
  data(){
    return {
      key1:[],
      key2:[]
    }
  },
  created(){
  },
  methods:{
    setLevel1(item){
      this.key1= item.children
      this.key2 =[]
    },
    setLevel2(item){
      this.key2=item.children
    }
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
    display: flex;
    flex-direction: row;
  }
</style>

