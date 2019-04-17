<template>
    <div class="s-layout">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'s-layout'
}
</script>
<style lang="scss" scoped>
    .s-layout{
        display: flex;
        flex-direction: column;
    }
</style>


