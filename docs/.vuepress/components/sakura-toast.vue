<template>
  <div>
    <sakura-card>
      <s-button @click="showToast" type="info">点我</s-button>
      <s-button @click="showToast3"  icon="star">点我</s-button>
      <s-button @click="showToast2" type="primary" icon="heart">点我</s-button>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
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
        import Vue from "vue";
        import ToastPlugin from "../../../src/plugins/toast";

        Vue.use(ToastPlugin);
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
        message: "端午放假三天，请周知",
        closeBtn: {
          btnText: "关闭",
          callback: function(toast) {
            console.log("用户说他知道啦");
            console.log(toast.componentMethod());
          }
        }
      });
    },
    showToast2() {
      this.$toast({
        message: "今日炎日预警，请停止工作回家避暑",
        position:'bottom',
        type:'warning'
      });
    },
    showToast3() {
      this.$toast({
        message: "GDG活动报名成功",
        position:'middle',
        type:'success'
      });
    },
  }
};
</script>
<style lang="scss" scoped>
</style>

