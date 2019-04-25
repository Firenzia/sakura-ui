<template>
    <div class="item-wrapper">
      <!-- <div v-for="item in this.options">
          {{item.label}}
          <div v-if="item.children">
            <s-cascader-item :options="item.children"></s-cascader-item>
          </div>
      </div>  -->

      <!-- <div class="menu">
        <div v-for="(item,index) in this.options" :key="index" @click="setLevel1(item)">
          {{item.label}}
        </div>
      </div>
        
      <div class="menu" v-if="key1.length>0">
          <div  v-for="(item2,index2) in key1" :key="index2"  @click="setLevel2(item2)">
          {{item2.label}}
          </div>
      </div>

      <div class="menu" v-if="key2.length>0">
          <div  v-for="(item3,index3) in key2" :key="index3">
            {{item3.label}}
          </div>
      </div> -->

      <div class="left">
          <div v-for="(item,index) in this.options" :key="index" @click="setNextOption(item)">
           {{item.label}}
          </div>
      </div>
      <div class="right" v-if="this.curItem && this.curItem.children">
           <s-cascader-item :options="childOption"></s-cascader-item>
      </div>
      
    </div>
</template>
<script>
export default {
  name:'s-cascader-item',
  props:{
    options:{}
  },
  data(){
    return {
      key1:[],
      key2:[],
      curItem:{}
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
    },
    setNextOption(item){
      this.curItem = item
    }
  },
  computed:{
    childOption(){
      return this.curItem.children
    }
  }
}
</script>
<style lang="scss" scoped>
  @import './common.scss';
  .item-wrapper{
    display:flex;
    .left{
      border:1px solid $border-color;
      padding:.5em;
      > div{
        padding-bottom:.3em
      }
    }
  }
</style>
