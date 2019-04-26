<template>
    <div v-show="visible">
       <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-tab-pane',
  inject: ['eventBus'],
  props: {
    name: {
      type: String
    }
  },
  data () {
    return {
      visible: true
    }
  },
  created () {
    this.eventBus.$on('update:selected', (val) => {
      this.visible = val === this.name
    })
  }
}
</script>
<style lang="scss" scoped>

</style>
