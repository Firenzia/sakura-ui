<template>
  <div class="item-wrapper">
    <div class="left" v-if="options && options.length>0">
        <div v-for="(item,index) in this.options"
          :class="{'active-item': selected && selected[level] &&item.label=== selected[level].label}"
          :key="index"
          @click="setNextOption(item)">
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
import Icon from '../icon/icon.vue'
// import db from './db/data'

// function ajax (parentId = 0) {
//   return db.filter(item => item.parent_id === parentId)
// }
// console.log(ajax())

export default {
  name: 's-cascader-item',
  props: {
    options: {
      defalut: () => { return [] }
    },
    level: {
      default: 0
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      curItem: {}
    }
  },
  components: {
    's-icon': Icon
  },
  methods: {
    setNextOption (item) {
      //  子组件要修改props 只能通过事件
      let selectedCopy = [...this.selected]
      selectedCopy[this.level] = item
      selectedCopy.splice(this.level + 1)
      this.$emit('update:selected', selectedCopy)
      console.log()
    },
    // 递归的组件也要监听内部的$emit事件，此法同cascader.vue里面的事件传播一样
    onRecursiveUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
    }
  },
  computed: {
    childOption () {
      return this.selected[this.level].children || []
    },
    isActive () {
      return { 'active-item': true }
    }
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ccc;
  .item-wrapper{
    display:flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left{
      border:1px solid $border-color;

      overflow: auto;
      max-height: 300px;
       background: #fff;
      flex-shrink: 0;
      > div{
        padding:.5em;
        &.active-item{
          background: lightblue;
        }
      }
    }
  }
</style>
