<template>
    <svg  class="s-icon" aria-hidden="true">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>
<script>
export default {
    name: 's-icon',
    props:['icon']
}
</script>
<style lang="scss" scoped>
    .s-icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>


