<template>
  <div>
      <s-popover
      placement="bottom"
      style="margin-right:60px;"
      title="标题"
      width="200"
      trigger="hover"
      content="平成时代落幕了，伤感ing~"
      >
      <template slot="content"><div>123456</div></template>
      <s-button slot="reference">hover 激活</s-button>
    </s-popover>
  </div>
</template>
<script>
export default {
  name: 's-datepicker',
  data () {
    return {

    }
  }
}
</script>
