<template>
    <div class="wrapper" :class="{error, disabled ,readonly}">
        <template v-if="icon">
          <s-icon :name="icon"></s-icon>
        </template>
        <input type="text"
        ref="input"
        :readonly="readonly"
        :disabled="disabled"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input',$event.target.value)"
        @change="$emit('change',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)">
        <template v-if="error">
            <s-icon name="error"></s-icon>
            <span class="err-msg">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from '../icon/icon'
export default {
  name: 's-input',
  components: {
    's-icon': Icon
  },
  props: {
    icon: {
      type: String
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "theme";

  .wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    margin-bottom:1em;
    border:1px solid $border-color;
    padding:2px 8px;
    border-radius:$border-radius;
    &.disabled{
      background: #bbb;cursor: not-allowed;
    }

    > input {
      height: $small-widget-height;
      border-radius:$border-radius;
      padding: 0 8px;
      border:none;
      outline:none;
      &:focus { outline: none; }
    }
    &.error {
      > input { border-color:$color-danger; }
    }
    input:disabled{
      background: #bbb;
    }
    .icon-error { fill: $color-danger; }
    .errorMessage { color: $color-danger; }
  }
</style>
