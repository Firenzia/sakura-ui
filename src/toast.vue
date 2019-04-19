<template>
    <div class="toast-wrapper">
        <slot>{{message}}</slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            message:'',
            type:'info',
            position:'top'
        }
    }
}
</script>
<style lang="scss" scoped>
    .toast-wrapper{
        position: fixed;
        top:40px;
        left:50%;
        transform: translateX(-50%);
        border:1px solid lightpink;
        padding:.3em 1em
    }
</style>


