<template>
  <div style="width:600px">
    <s-steps :active="active" space="200" finish-style="red">
      <s-step title="步骤 1"></s-step>
      <s-step title="步骤 2"></s-step>
      <s-step title="步骤 3"></s-step>
  </s-steps>

  </div>
</template>
<script>

export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {

  },
  mounted () {
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
