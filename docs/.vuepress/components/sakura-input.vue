<template>
  <div>
    <sakura-card>
      <s-input value="正常的" @change="changeHandler"  class="input" icon="star"></s-input>
      <s-input value="只读" readonly id="readonly" class="input"></s-input>
      <s-input value="不可输入" disabled class="input" icon="false"></s-input>
      <!-- <s-input error="有问题哦" class="input"></s-input> -->
      <div>
        <s-input v-model="msg" class="input"></s-input>
         <div style="color:#7B90D2;font-size:14px"> {{msg}}</div>
      </div>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
    
  </div>
</template>
<script>
import Input from "../../../src/form/input";
export default {
  data() {
    return {
      msg: "你可以输入改变我",
      code: `
        <s-input value="测试" @change="changeHandler"></s-input>
        <s-input value="只读" readonly id="readonly"></s-input>
        <s-input value="不可点击" disabled></s-input>
        <s-input v-model="msg"></s-input>
    `.replace(/^ {8}/gm, "").trim()
    };
  },
  components: {
    "s-input": Input
  },
  methods: {
    changeHandler() {
      // window.alert("input change is triggered");
    }
  }
};
</script>
<style lang="scss" scoped>
.input{
  margin-right:30px;
}
</style>

