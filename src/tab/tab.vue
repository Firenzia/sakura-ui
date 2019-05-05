<template>
    <div class="s-tab" :class="`tab-${tabPosition}`">
       <slot></slot>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 's-tab',
  props: {
    value: {
      type: String
    },
    tabPosition: {
      default: 'top',
      validator (val) {
        return ['top', 'left'].includes(val)
      }
    },
    test: {}
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return { eventBus: this.eventBus }
  },
  mounted () {
    // todo 找到被选中的item，发送给eventBus
    this.$children.forEach(child => {
      if (child.$options.name === 's-tab-head') {
        child.$children.forEach(grandChild => {
          if (grandChild.name === this.value) {
            this.eventBus.$emit('update:selected', this.value, grandChild)
          }
        })
      }
    })

    this.eventBus.$on('update:selected', ($event) => {
      this.$emit('update:selected', $event)
    })

    // this.eventBus.$emit("update:selected", this.selected)
    if (this.tabPosition === 'left') {
      this.$children.forEach(child => {
        child.align = child.$options.name === 's-tab-head' ? 'left' : ''
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .s-tab{
        display: flex;

        &.tab-top{
            flex-direction: column;
        }
        &.tap-left{
             flex-direction: row;
        }
    }
</style>
