<template>
  <button class="s-button" :class="btnClass"
       @click="$emit('click')">
       <s-icon v-if="icon && !loading" :name="icon" class="icon"  ></s-icon>
    <s-icon v-if="loading" name="loading" class="icon loading"></s-icon>
    <div class="btn-content">
        <slot></slot>
    </div>
  </button>

</template>
<script>
import Icon from '../icon/icon'
export default {
  name: 's-button',
  components: {
    's-icon': Icon
  },
  props: {
    'type': {
      type: String,
      validator (val) {
        return ['primary', 'info', 'success', 'warning', 'danger'].includes(val)
      }
    },
    'disabled': {
      type: Boolean,
      default: false
    },
    'loading': {
      type: Boolean,
      default: false
    },
    'icon': {
      type: String,
      required: false
    },
    'iconPosition': {
      type: String,
      default: 'left',
      validator: function (val) {
        return val === 'left' || val === 'right'
      }
    }
  },
  computed: {
    btnClass () {
      let classList = []
      if (this.iconPosition) classList.push(`ico-${this.iconPosition}`)
      if (this.type) classList.push(`btn-${this.type}`)
      if (this.disabled) classList.push(`btn-disabled`)
      return classList.join(' ')
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "theme";

 .s-button {
    font-size: $font-size;
    height: $small-widget-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display:inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    min-width: 70px;
    &:hover {
      cursor: pointer;
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
    // disabled
    &.btn-disabled{
      cursor: not-allowed;
      opacity: .7;
      &:hover, &:active{
        opacity: .7;
      }
    }

    //  type
    &.btn-primary{
      background: $color-primary;
      border-color:$color-primary;
      color:#fff;
      &:hover{
        opacity:.85
      }
      &:active{
        opacity:.7
      }
    }
    &.btn-info{
      background: $color-info;
      border-color:$color-info;
      color:#fff;
      &:hover{
        opacity:.85
      }
      &:active{
        opacity:.7
      }
    }
    &.btn-success{
      background: $color-success;
      border-color:$color-success;
      color:#fff;
      &:hover{
        opacity:.85
      }
      &:active{
        opacity:.7
      }
    }
    &.btn-warning{
      background: $color-warning;
      border-color:$color-warning;
      color:#fff;
      &:hover{
        opacity:.85
      }
      &:active{
        opacity:.7
      }
    }
    &.btn-danger{
      background: $color-danger;
      border-color:$color-danger;
      color:#fff;
      &:hover{
        opacity:.85
      }
      &:active{
        opacity:.7
      }
    }
  }

</style>
