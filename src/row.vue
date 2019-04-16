<template>
    <div class="s-row" :style="rowStyle">
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
    computed:{
        rowStyle(){
            let {gutter} = this
            return `margin-left: -${gutter/2}px;margin-right: -${gutter/2}px`
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

