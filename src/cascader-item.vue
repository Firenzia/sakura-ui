<template>
    <div class="item-wrapper">      
      <div class="left" v-if="options.length>0">
          <div v-for="(item,index) in this.options" :key="index" @click="setNextOption(item)">
           {{item.label}}
            <s-icon v-if="item.children" name="right" style="transform: scale(.7)"></s-icon>
          </div>
      </div>
      <div class="right" v-if="selected && selected[level]">
           <s-cascader-item 
             :options="childOption" 
             :level="level+1" 
             :selected="selected"
              @update:selected="onRecursiveUpdateSelected"
            ></s-cascader-item>
      </div>
      
    </div>
</template>
<script>
import Icon from './icon'
export default {
  name:'s-cascader-item',
  props:{
    options:null,
    level: {
      default:0
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
      key1:[],
      key2:[],
      curItem:{}
    }
  },
  components:{
    's-icon': Icon
  },
  methods:{
    setLevel1(item){
      this.key1= item.children
      this.key2 =[]
    },
    setLevel2(item){
      this.key2=item.children
    },
    setNextOption(item){
      this.curItem = item
      //  子组件要修改props 只能通过事件
      let selectedCopy = [...this.selected]
      selectedCopy[this.level] = item
      selectedCopy.splice(this.level+1)
      this.$emit("update:selected",  selectedCopy)
    },
    // 递归的组件也要监听内部的$emit事件，此法同cascader.vue里面的事件传播一样
    onRecursiveUpdateSelected(newSelected){
      this.$emit('update:selected',newSelected)
    }
  },
  computed:{
    childOption(){
      return this.selected[this.level].children || []
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './common.scss';
  .item-wrapper{
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left{
      border:1px solid $border-color;
      padding:.5em;
      > div{
        padding-bottom:.3em
      }
    }
  }
</style>
