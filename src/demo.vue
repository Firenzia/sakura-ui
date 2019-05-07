<template>
  <div style="margin:60px">
    <s-datepicker v-model="selectedDate"></s-datepicker>
  </div>
</template>
<script>

export default {
  data () {
    // test
    return {
      selectedDate: new Date('2019-05-05')
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
