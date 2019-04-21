<template>
    <button class="s-button test-cls" :class="`ico-${iconPosition}`"
      @click="$emit('click')">
      <s-icon v-if="icon && !loading" :name="icon" class="icon"  ></s-icon>
      <s-icon v-if="loading" name="loading" class="icon loading"></s-icon>
      <div class="btn-content">
          <slot></slot>
      </div>
    </button>
</template>
<script>
import Icon from './icon'
export default {
    name:'s-button',
    components:{
      's-icon': Icon
    },
    props:{
        'loading':{
          type: Boolean,
          default: false
        },
        'icon':{
            type:String,
            required:false
        }, 
        'iconPosition':{
            type: String,
            default: 'left',
            validator: function(val){
              return val === 'left' || val === 'right'
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
 .s-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display:inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color-hover;
    }
    &:active {
      background-color: $button-active-bg;
    }
    &:focus {
      outline: none;
    }
    &.ico-left{
         > .icon{
            order:1;
            margin-right:.4em
        }
         > .btn-content{
            order:2
        }
    }
    &.ico-right{
        > .icon{
            order:2;
            margin-left:.4em
        }
         > .btn-content{
            order:1;
        }
    }
  }

</style>


