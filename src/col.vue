<template>
    <div class="s-col" :class="[span && `col-${span}`, offset && `offset-${offset}`] " :style="`padding: 0 ${gutter/2}px`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-col',
    props:{
      span:{
          type:[ Number, String]
      },
      offset:{
          type:[ Number, String]
      }
    },
    data(){
        return {
            gutter:0
        }
    }
}
</script>
<style lang="scss" scoped>
    .s-col{
        height: 40px;
        width: 50%;
        padding: 0 10px;
    }
    @for $i from 1 through 24 {
    .col-#{$i} {width: 1/24*$i*100%}
    }
    @for $i from 1 through 24 {
    .offset-#{$i} {margin-left: 1/24*$i*100%}
    }
</style>
