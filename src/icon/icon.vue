<template>
    <svg  @click="clickHandler"
         class="s-icon" aria-hidden="true" :style="{color}">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg'
export default {
  name: 's-icon',
  props: ['name', 'color', 'hoverColor'],
  methods: {
    clickHandler () {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
    .s-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    @keyframes spin {
      0% {transform: rotate(0deg)}
      100% {transform: rotate(360deg)}
    }
    .loading{
      animation: spin 1s infinite linear
    }

</style>
