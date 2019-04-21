<template>
  <div>
    <s-input value="测试" @change="changeHandler"></s-input>
    <s-input value="只读" readonly id="readonly"></s-input>
    <s-input value="不可点击" disabled></s-input>
    <s-input error="有问题哦"></s-input>
    <div>
      <s-input v-model="msg"></s-input>
      {{msg}}
    </div>
    <pre class="codePre">
          <code>{{code}}</code>
        </pre>
  </div>
</template>
<script>
import Input from "../../../src/input";
export default {
  data() {
    return {
      msg: "你可以输入改变我",
      code: `
        <s-input value="测试" @change="changeHandler"></s-input>
        <s-input value="只读" readonly id="readonly"></s-input>
        <s-input value="不可点击" disabled></s-input>
        <s-input error="有问题哦"></s-input>
        <s-input v-model="msg"></s-input>
    `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  components: {
    "s-input": Input
  },
  methods: {
    changeHandler() {
      window.alert("input change is triggered");
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

