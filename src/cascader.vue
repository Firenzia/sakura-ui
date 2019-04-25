<template>
   <div>
      <div class="content" @click="toggle">{{content}}</div>
      <div class="popper" v-if="popoverVisible">
          <s-cascader-item 
            :options="options" 
            :selected="selected" 
            @update:selected="onItemUpdateSelected">
          </s-cascader-item>
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
    selected:{
      type: Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
    return {
      popoverVisible:false
    }
  },
  created(){
  },
  computed:{
    content(){
      return this.selected.map(x=>x.label).join('/')
    }
  },
  methods:{
    onItemUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
    },
    toggle(){
      this.popoverVisible = !this.popoverVisible
    }
  },
  components:{
    's-cascader-item': CascaderItem
  }
}
</script>
<style lang="scss" scoped>

  .content{
    width: 200px;
    height: 40px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding:.6em 
  }
  .popper{
    display: flex;
    flex-direction: row;
  }
</style>

