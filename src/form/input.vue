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
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .wrapper { font-size: $font-size; display: inline-flex;align-items: center;margin-bottom:1em;border:1px solid #ccc;padding:2px 8px;border-radius:4px;
    &.disabled{
      background: #bbb;cursor: not-allowed;
    }

    > input { height: 32px; border-radius: 4px; padding: 0 8px; font-size: inherit;border:none;outline:none;
      &:hover { }
      &:focus { outline: none; }
    }
    &.error {
      > input { border-color: $red; }
    }
    input:disabled{
      background: #bbb;
    }
    .icon-error { fill: $red; }
    .errorMessage { color: $red; }
  }
</style>
