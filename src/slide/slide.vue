<template>
  <div class="s-slide">
     <div class="s-window"
          @mouseenter= "pause"
          @mouseleave = "start">
        <slot></slot>
        <s-icon name="left"
          class="ico prev"
          @click="onClickPrev"></s-icon>
        <s-icon name="right"
         class="ico next"
         @click="onClickNext"></s-icon>
     </div>
     <div class="s-dot">
        <span v-for="(n, index) in slideItemLength"
        :key="index"
        @click ="changeSelect(index)"
        :class="{'index-active':selectedIndex=== index}"></span>
     </div>
  </div>
</template>
<script>
import icon from '../icon/icon'
export default {
  name: 's-slide',
  props: {
    // 当前选中的name
    value: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 5000
    }
  },
  data () {
    return {
      slideItemLength: 0,
      lastIndex: 0,
      isReverse: false,
      timerId: undefined
    }
  },
  components: {
    's-icon': icon
  },
  computed: {
    selectedIndex () {
      return this.namesList.indexOf(this.value)
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
  },
  //  在父组件修改了select被执行
  updated () {
    this.updateChildren()
  },
  methods: {
    init () {
      this.checkSelectedValue()
      this.updateChildren()
      this.slideItemLength = this.getSlideItemCount()
      if (this.autoPlay) {
        this.playAutomatically()
      }
    },
    getSlideItemCount () {
      let count = 0
      this.$children.forEach(vm => {
        if (vm.$options.name === 's-slide-item') {
          count++
        }
      })
      return count
    },
    checkSelectedValue () {
      if (!this.value) {
        this.$emit('update:selected', this.$children[0].name)
      }
    },
    playAutomatically () {
      if (this.timerId) { return }

      let run = () => { // 定时修改selected
        let idx = this.selectedIndex === -1 ? 0 : this.selectedIndex
        idx += 1
        this.isReverse = false
        this.setNewSelected(idx)
        this.timerId = setTimeout(run, this.duration)
      }
      this.timerId = setTimeout(run, this.duration)
    },
    changeSelect (index) {
      this.setNewSelected(index)
      this.isReverse = this.selectedIndex > index
    },
    // 1 通知父组件去修改select
    setNewSelected (newIndex) {
      this.lastIndex = this.selectedIndex
      if (newIndex === this.namesList.length) { newIndex = 0 }
      if (newIndex === -1) { newIndex = this.namesList.length - 1 }
      // this.$emit('update:selected', this.namesList[newIndex])
      this.$emit('input', this.namesList[newIndex])
    },
    // 2 在父组件修改了select被执行, 1执行后执行2
    updateChildren () {
      this.$children.forEach(vm => {
        if (vm.$options.name === 's-slide-item') {
          vm.selected = this.value
          vm.reverse = this.isReverse
        }
      })
    },
    onClickPrev () {
      this.isReverse = true
      let prevIndex = this.selectedIndex - 1
      this.setNewSelected(prevIndex)
    },
    onClickNext () {
      this.isReverse = false
      let nextIndex = this.selectedIndex + 1
      this.setNewSelected(nextIndex)
    },
    pause () {
      window.clearTimeout(this.timerId)
    },
    start () {
      this.playAutomatically()
      this.timerId = undefined
    }
  }
}
</script>
<style lang="scss" scoped>
  .s-slide{
    display: inline-block;
    position: relative;
    .s-window{
      position: relative;
      overflow: hidden;
      .ico{
        position: absolute;
        color:#fff;
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
      position: absolute;
      bottom:10px;
      left:50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      .index-active{
        background: lightblue;
        color: #fff;
      }
      > span{
        display: inline-block;
        width: 24px;
        height: 4px;
        font-size:12px;
        line-height: 40px;
        margin-right: .4em;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

</style>
