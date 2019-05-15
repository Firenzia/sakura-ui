<template>
  <div style="margin:60px">
    <s-datepicker v-model="selectedDate" @showPanel="y" @closePanel="z"></s-datepicker>
  </div>
</template>
<script>
import modal from "./plugins/modal";
import toast from "./plugins/toast";
import Vue from "vue";
Vue.use(modal);
Vue.use(toast);

export default {
  data() {
    return {
      selectedDate: new Date("2019-05-05"),
      num: ""
    };
  },
  computed: {},
  mounted() {
    setTimeout(() => {
      this.num = 100;
      console.log(this.num);
    }, 1000);
  },
  methods: {}
};
</script>
<style lang="scss">
@import "./static/scss/global.scss";
</style>
