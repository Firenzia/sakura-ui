<template>
  <div class="row">
    <label>{{label}}</label>
    <div class="controls">
      <slot></slot>
      <div>
        {{error}}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .row {padding: 8px 0; display: flex;}
  label {margin-right: 1em;}
</style>
<script>
export default {
  name: 's-form-item',
  props: {
    label: {
      type: String,
      required: true
    },
    error: {
      type: String
    }
  }
}
</script>
