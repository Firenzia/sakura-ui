<template>
  <div class="s-slide">
     <div class="s-window">
        <!-- <div class="slide-wrapper"> -->
          <slot></slot>
        <!-- </div> -->
     </div>
  </div>
</template>
<script>
export default {
  name: 's-slide',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  created () {
  },
  mounted () {
    this.updateChildren()
    this.playAutomatically()
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    getSelected () {
      return this.selected || this.$children[0].name
    },
    playAutomatically () {
      let names = this.$children.map(vm => vm.name)

      setInterval(() => {
        // 定时修改selected
        let idx = names.indexOf(this.getSelected())
        if (idx === names.length - 1) {
          idx = -1
        }
        this.$emit('update:selected', names[idx + 1])
      }, 3000)
    },
    updateChildren () {
      this.$children.forEach(vm => {
        vm.selected = this.getSelected()
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

    }
  }

</style>
