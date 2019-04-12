<template>
    <button class="s-button" :class="`ico-${iconPosition}`">
      <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
      <div class="content">
          <slot></slot>
      </div>
    </button>
</template>
<script>
export default {
    name:'s-button',
    props:{
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
 .s-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display:inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    &.ico-left{
         > .icon{
            order:1;
            margin-right:.4em
        }
         > .content{
            order:2
        }
    }
    &.ico-right{
        > .icon{
            order:2;
            margin-left:.4em
        }
         > .content{
            order:1;
        }
    }
  }

</style>


