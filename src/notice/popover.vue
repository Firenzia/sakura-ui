<template>
  <div class="wrapper">
    <div ref="popover" v-show="visible" class="popover" :class="popoverPosition">
      {{content}}
      <slot name="content" v-bind:close="close"></slot>
    </div>
    <div ref="reference" class="reference">
        <slot name="reference"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 's-popover',
  data () {
    return {
      visible: false
    }
  },
  props: {
    placement: {
      defaut: 'top',
      validator () {
        return ['top', 'bottom', 'left', 'right']
      }
    },
    trigger: {
      default: 'click',
      type: String,
      validator (val) {
        return ['click', 'hover'].includes(val)
      }
    },
    content: {
      type: String
    }
  },
  mounted () {
    this.setEvent()
  },
  computed: {
    popoverPosition () {
      return `position-${this.placement}`
    }
  },
  methods: {
    setEvent () {
      if (this.trigger === 'click') {
        this.$refs.reference.addEventListener('click', this.clickHandler)
      } else if (this.trigger === 'hover') {
        this.hoverHandler()
      }
    },
    onShow () {
      this.positionPopover()
      this.addDocClickListener()
      console.log('每次点击显示popover 添加事件监听')
    },
    addDocClickListener () {
      setTimeout(() => {
        document.addEventListener('click', this.documentClickHandler)
      }, 0)
    },
    documentClickHandler (e) {
      if (!(e.target === this.$refs.popover || this.$refs.popover.contains(e.target))) {
        this.close()
      }
    },
    positionPopover () {
      this.$nextTick(() => {
        document.body.appendChild(this.$refs.popover)
        let { top, left, bottom, right, height } = this.$refs.reference.getBoundingClientRect()
        let { height: height2, width: width2 } = this.$refs.popover.getBoundingClientRect()
        let { style } = this.$refs.popover

        const positionMap = {
          'top': {
            'left': `${left + window.scrollX}px`,
            'top': `${top + window.scrollY - 10 - height2}px`
          },
          'bottom': {
            'left': `${left + window.scrollX}px`,
            'top': `${bottom + window.scrollY + 10}px`
          },
          'left': {
            'left': `${left + window.scrollX - width2 - 10}px`,
            'top': `${top + window.scrollY + (height - height2) / 2}px`
          },
          'right': {
            'left': `${right + window.scrollX + 10}px`,
            'top': `${top + window.scrollY + (height - height2) / 2}px`
          }
        }
        style['left'] = positionMap[this.placement].left
        style['top'] = positionMap[this.placement].top
      })
    },
    open () {
      this.visible = true
      this.$emit('open')
    },
    close () {
      console.log('popover close 1')
      this.visible = false
      this.trigger === 'click' && document.removeEventListener('click', this.documentClickHandler)
      this.$emit('close')
    },
    clickHandler () {
      this.visible = !this.visible
      if (!this.visible)console.log('popover close 2')
      if (this.visible) {
        this.$emit('open')
      }
      if (this.visible) {
        this.onShow()
      }
    },
    hoverHandler () {
      this.$refs.reference.addEventListener('mouseover',
        (e) => {
          this.open()
          this.positionPopover()
        }
      )
      this.$refs.reference.addEventListener('mouseout', (e) => { this.close() })
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "theme";
  .wrapper{
    display: inline-block;
    > div{
      display: inline-block;
    }

    .reference{
      border:1px solid #ddd;
      border-radius: 4px;
    }
  }
  .popover{
      max-width: 300px;
      border:1px solid #ccc;
      position: absolute;
      padding:.5em 1em;
      background: #fff;
      z-index: 100;
      font-size: $font-size;
      &::before, &::after{
        position: absolute;
        content: '';
        display: block;
        border:10px solid transparent;
        pointer-events: none;
      }

      &.position-top{
         &::before{
           border-top:10px solid #ccc;
           top:100%;
         }
          &::after{
           border-top:10px solid #fff;
           top:98%;
         }
      }
      &.position-bottom{
        &::before{
           border-bottom:10px solid #ccc;
           bottom:100%;
         }
          &::after{
           border-bottom:10px solid #fff;
           bottom:98%;
         }
      }
      &.position-left{
        &::before{
           border-left:10px solid #ccc;
           left:100%;
            top:20%;
         }
        &::after{
           border-left:10px solid #fff;
           left:99%;
           top:20%;
         }
      }

     &.position-right{
        &::before{
           border-right:10px solid #ccc;
           right:100%;
            top:20%;
         }
          &::after{
           border-right:10px solid #fff;
           right:99%;
           top:20%;
         }
      }

    }
</style>
