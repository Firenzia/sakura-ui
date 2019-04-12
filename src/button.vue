<template>
    <button class="s-button" :class="`ico-${iconPosition}`">
      <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
      <slot></slot>
    </button>
</template>
<script>
export default {
    name:'s-button',
    props:['icon', 'iconPosition'],
    created(){
      console.log(this.icon)
    }
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


