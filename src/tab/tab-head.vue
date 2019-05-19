<template>
    <div class="s-tab-head"  :class="headClass" ref="tabHead">
        <div class="item-wrapper" :class="itemWrapperClass">
            <slot></slot>
        </div>

       <div class="line" :style="lineStyle" ref="line"></div>
    </div>
</template>
<script>
export default {
  name: 's-tab-head',
  data () {
    return {
      align: 'top'
    }
  },
  inject: ['eventBus'],
  computed: {
    tabPosition () {
      return `tab-${this.align}`
    },
    headClass () {
      let headDirection = this.align === 'top' ? 'column' : 'row'
      return `head-in-${headDirection}`
    },
    itemWrapperClass () {
      let itemDirection = this.align === 'top' ? 'row' : 'column'
      return `item-in-${itemDirection}`
    },
    lineStyle () {
      let mixinStyleObj
      if (this.align === 'top') {
        mixinStyleObj = {
          width: '100px',
          borderBottom: '2px solid #3ba0e9'
        }
      } else {
        mixinStyleObj = {
          height: '20px',
          borderLeft: '2px solid #3ba0e9'
        }
      }
      return mixinStyleObj
    }
  },
  mounted () {
    // todo
    this.eventBus.$on('update:selected', (name, vm) => {
      // console.log('tab head 监听事件 设置line')
      this.$nextTick(() => {
        let tabHeadStyle = this.$refs.tabHead.getBoundingClientRect()
        let { width, left, height, top } = vm.$refs.item.getBoundingClientRect()
        if (this.align === 'top') {
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - tabHeadStyle.left}px`
        } else {
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top - tabHeadStyle.top}px`
        }
      })
    })
  }
}
</script>
<style lang="scss" scoped>
   @import "theme";
  .s-tab-head{
      display: flex;

     &.head-in-row{
         flex-direction: row;
         border-right:1px solid $border-color;
     }
     &.head-in-column{
         flex-direction: column;
          border-bottom:1px solid $border-color;
     }

      .item-wrapper{
          display: flex;
          &.item-in-row{
           flex-direction: row;
          }
          &.item-in-column{
           flex-direction: column;
          }
      }
      .line{
          position:relative;
          transition: all .5s;
      }
  }
</style>
