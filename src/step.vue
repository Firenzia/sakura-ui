<template>
  <div class="s-step">
    <div class="step-head">
      <div class="line"></div>
      <div class="ico"></div>
    </div>
    <div class="step-main">{{title}}</div>
  </div>
</template>
<script>
export default {
  name: 's-step',
  data () {
    return {
      stepCounts: 0
    }
  },
  computed: {

  },
  props: {
    title: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.s-step{
  .step-head{
    height:30px;
    display: flex;
    align-items: center;
    position: relative;
    .line{
      width: 100%;
      height: 2px;
      background:plum;
    }
    .ico{
      width:20px;
      height:20px;
      background: orange;
      border-radius:50%;
      position: absolute;
    }
  }

}
</style>
