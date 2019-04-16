<template>
    <div class="s-row" :style="`margin-left: -${gutter/2}px;margin-right: -${gutter/2}px`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-row',
    props:{
        gutter:{
            type:[Number, String]
        }
    },
    mounted(){
        // 父元素给子元素传值
        this.$children.forEach(vm =>{
            vm.gutter = this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
    .s-row{
        display: flex;
        height: 40px;
        margin:20px 0;
    }
</style>

