<template>
    <button class="s-button">
      <slot></slot>
    </button>
</template>
<script>
export default {
    name:'s-button'
}
</script>
<style lang="scss" scoped>
 .s-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }

</style>


