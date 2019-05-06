<template>
  <div style="margin:60px">
    <s-datepicker v-model="selectedDate"></s-datepicker>
  </div>
</template>
<script>

export default {
  data () {
    return {
      selectedDate: '2019-05-06'
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
