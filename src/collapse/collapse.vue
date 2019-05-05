<template>
  <div class="collapse">
      <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue'
export default {
  name: 's-collapse',
  props: {
    value: {
      default: () => {
        return []
      },
      type: [String, Array]
    },
    accordion: {
      type: Boolean
    }
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
    this.eventBus.$emit('update:selected', this.value)
    // 父组件自己修改selected数组，然后子组件监听到数据变化更新视图
    this.eventBus.$on('update:addSelected', (name) => {
      let selectedCopy = typeof (this.value) === 'string' ? [this.value] : [...this.value]
      if (this.accordion) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      // this.$emit('update:selected', this.accordion ? name : selectedCopy)
      this.$emit('input', this.accordion ? name : selectedCopy)
      this.eventBus.$emit('update:selected', selectedCopy)
    })

    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = typeof (this.value) === 'string' ? [this.value] : [...this.value]
      if (!this.accordion) {
        let idx = selectedCopy.indexOf(name)
        selectedCopy.splice(idx, 1)
        // this.$emit('update:selected', selectedCopy)
        this.$emit('input', selectedCopy)
        this.eventBus.$emit('update:selected', selectedCopy)
      } else {
        if (name === this.value) {
          // this.$emit('update:selected', '')
          this.$emit('input', '')
        }
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse{
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding:.5em 1em;
  }
</style>
