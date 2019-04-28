<template>
  <div class="s-slide">
     <div class="s-window">
        <slot></slot>
     </div>
     <div class="s-dot">
        <span v-for="(n, index) in childLength"
        :key="index"
        @click ="changeSelect(index)"
        :class="{'index-active':selectedIndex=== index}">{{n-1}}</span>
     </div>
  </div>
</template>
<script>
import { setTimeout } from 'timers'
export default {
  name: 's-slide',
  props: {
    // 当前选中的name
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      childLength: 0
    }
  },
  computed: {
    selectedIndex () {
      return this.getChildrenNames().indexOf(this.selected)
    }
  },
  created () {
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
    this.childLength = this.$children.length
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    getChildrenNames () {
      return this.$children.map(item => item.name)
    },
    getSelected () {
      return this.selected || this.$children[0].name
    },
    playAutomatically () {
      let names = this.getChildrenNames()

      let run = () => {
        // 定时修改selected
        let idx = names.indexOf(this.getSelected())
        if (idx === names.length - 1) {
          idx = -1
        }
        this.$emit('update:selected', names[idx + 1])
        setTimeout(run, 5000)
      }
      setTimeout(run, 5000)
    },
    changeSelect (index) {
      this.$emit('update:selected', this.getChildrenNames()[index])
    },
    updateChildren () {
      this.$children.forEach(vm => {
        vm.selected = this.getSelected()
        let currentSelectIndex = this.getChildrenNames().indexOf(this.getSelected())
        let childIndex = this.getChildrenNames().indexOf(vm.name)
        if (childIndex < currentSelectIndex) {
          console.log(childIndex)
        }
        vm.reverse = childIndex < currentSelectIndex
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .s-slide{
    border:1px solid black;
    display: inline-block;
    .s-window{
      border:1px solid red;
      position: relative;
      overflow: hidden;
    }
    .s-dot{
      .index-active{
        background: red
      }
    }
  }

</style>
