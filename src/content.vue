<template>
    <div class="s-content">
         <slot></slot>
    </div>
</template>
<script>
export default {
  name: 's-content'
}
</script>
<style lang="scss" scoped>
    .s-content{
        flex-grow:1;
        background:rgba(16, 142, 233, 1);
        color: #fff;
    }

</style>
