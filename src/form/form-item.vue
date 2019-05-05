<template>
  <div class="form-item">
    <div class="label">
      <div class="ico" ><span v-show="required" class="required-ico">*</span></div>
      <label>{{label}}</label>
    </div>
    <div class="controls">
      <slot></slot>
      <div class="error">
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
  data () {
    return {
      error: '',
      required: false
    }
  },
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      required: true
    }
  },
  watch: {
    error (v) {
      if (v) {
        this.$children[0].$el.classList.add('error')
      } else {
        this.$children[0].$el.classList.remove('error')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$hint: lightcoral;
.error{
  color:$hint
}
.form-item{
  display: flex;
  flex-direction: row;
}
.label{
  display: flex;
  .ico{
    width:20px;
    height:100%;
  }
}
.required-ico{
  display: inline-block;

  color:$hint
}
</style>
