<template>
  <div class="s-slide">
     <div class="s-window">
        <slot></slot>
        <s-icon name="left"
          class="ico prev"
          @click="seePrev"></s-icon>
        <s-icon name="right"
         class="ico next"
         @click="seeNext"></s-icon>
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
      childLength: 0,
      lastIndex: 0
    }
  },
  computed: {
    selectedIndex () {
      return this.namesList.indexOf(this.selected)
    },
    namesList () {
      let arr = []
      this.$children.forEach(vm => {
        if (vm.$options.name === 's-slide-item') {
          arr.push(vm.name)
        }
      })
      return arr
    }
  },
  created () {
  },
  mounted () {
    this.init()
    this.playAutomatically()
    this.childLength = this.getSlideItemCount()
  },
  //  在父组件修改了select被执行
  updated () {
    this.updateChildren()
  },
  methods: {
    getSlideItemCount () {
      let count = 0
      this.$children.forEach(vm => {
        if (vm.$options.name === 's-slide-item') {
          count++
        }
      })
      return count
    },
    init () {
      this.checkSelected()
      this.updateChildren()
    },
    checkSelected () {
      if (!this.selected) {
        this.$emit('update:selected', this.$children[0].name)
      }
    },
    playAutomatically () {
      let names = this.namesList

      let run = () => {
        // 定时修改selected
        let idx = this.selectedIndex === -1 ? 0 : this.selectedIndex
        if (idx === names.length - 1) {
          idx = 0
        } else {
          idx += 1
        }
        this.getLastAndSetNext(names[idx])
        setTimeout(run, 4000)
      }
      setTimeout(run, 4000)
    },
    changeSelect (index) {
      this.getLastAndSetNext(this.namesList[index])
    },
    // 通知父组件去修改select
    getLastAndSetNext (val) {
      this.lastIndex = this.selectedIndex
      this.$emit('update:selected', val)
    },
    //  在父组件修改了select被执行
    updateChildren () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 's-slide-item') {
          console.log(this.selected)
          vm.selected = this.selected
          vm.reverse = this.lastIndex > this.selectedIndex
        }
      })
    },
    seePrev () {
      let prevIndex = this.selectedIndex === 0 ? this.namesList.length - 1 : this.selectedIndex - 1
      this.getLastAndSetNext(this.namesList[prevIndex])
    },
    seeNext () {
      let nextIndex = this.selectedIndex === this.namesList.length - 1 ? 0 : this.selectedIndex + 1
      this.getLastAndSetNext(this.namesList[nextIndex])
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
      .ico{
        position: absolute;
        &.prev{
          top:50%;
          left:10%;
          transform: translateY(-50%)
        }
        &.next{
          top:50%;
          right:10%;
          transform: translateY(-50%)
        }
      }
    }
    .s-dot{
      .index-active{
        background: red
      }
      > span{
        display: inline-block;
        width: 40px;
        height: 40px;
      }
    }
  }

</style>
