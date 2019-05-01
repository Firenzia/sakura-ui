<template>
  <div>
    <sakura-card>
      <s-input v-model="测试" @change="changeHandler"  class="input"></s-input>
      <s-input v-model="只读" readonly id="readonly" class="input"></s-input>
      <s-input v-model="不可点击" disabled class="input"></s-input>
      <s-input error="有问题哦" class="input"></s-input>
      <div>
        <s-input v-model="msg" class="input"></s-input>
        {{msg}}
      </div>

      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>

     <div class="attr">Attributes</div>
     <table>
       <thead>
         <tr>
           <th>参数</th>
           <th>说明</th> 
           <th>类型</th>
           <th>可选值</th>
           <th>默认值</th>
         </tr>
       </thead>
      <tr>
           <td>icon</td>
           <td>图标</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>value/v-model</td>
           <td>绑定值</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>disabled</td>
           <td>原生属性，是否只读</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
         <tr>
           <td>readonly</td>
           <td>原生属性，是否只读</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
         <tr>
           <td>error</td>
           <td>错误提示</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>placeholder</td>
           <td>输入框占位文本</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
       </tbody>
     </table>
    
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
    `.replace(/^ {8}/gm, "").trim()
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
.input{
  margin-right:30px;
}
</style>

