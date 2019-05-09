<template>
  <div>
    <sakura-card>
      <s-button @click="showToast">点我</s-button>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
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
       <tbody>
         <tr>
           <td>message</td>
           <td>消息提示文本</td>
           <td>string</td>
           <td>-</td>
           <td>0</td>
         </tr>
         <tr>
           <td>duration</td>
           <td>消息出现时长</td>
           <td>number，单位：ms</td>
           <td>-</td>
           <td>6000毫秒</td>
         </tr>
         <tr>
           <td>enableHtml</td>
           <td>用户插入html</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
         <tr>
           <td>closeBtn</td>
           <td>自定义关闭按钮文案和回调，如 closeBtn:{btnText:'知道了',callback:func}</td>
           <td>Object</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>position</td>
           <td>消息提示出现位置</td>
           <td>string</td>
           <td>top, middle, bottom</td>
           <td>top</td>
         </tr>
       </tbody>
     </table>
  </div>
</template>
<script>
import Vue from "vue";
import ToastPlugin from "../../../src/plugins/toast";
import Button from '../../../src/button/button'

Vue.use(ToastPlugin);
export default {
  data() {
    return {
      code: `
        <s-button @click="showToast">点我</s-button>
        export default {
          methods: {
            showToast() {
              this.$toast({
                message: "我从天而降啦啦啦~~。",
                closeBtn: {
                  btnText: "关闭",
                  callback: function(toast) {
                    console.log("用户说他知道啦");
                    console.log(toast.componentMethod());
                  }
                }
              });
            }
          }
        }
    `.replace(/^ {8}/gm, "").trim()
    };
  },
  components:{
    's-button':Button
  },
  methods: {
    showToast() {
      this.$toast({
        message: "我从天而降啦啦啦~~。",
        closeBtn: {
          btnText: "关闭",
          callback: function(toast) {
            console.log("用户说他知道啦");
            console.log(toast.componentMethod());
          }
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

