<template>
  <div>
    <s-button @click="showToast">点我</s-button>

     <pre><code>{{code}}</code></pre> 
  </div>
</template>
<script>
import Vue from "vue";
import ToastPlugin from "../../../src/plugins/toast";
import Button from '../../../src/button'

Vue.use(ToastPlugin);
export default {
  data() {
    return {
      code: `
        this.$toast({
            'message':'我从天而降啦啦啦~~。', 
            'closeBtn':
              {
                'btnText':'',
                 'callback':function(toast){
                              console.log('用户说他知道啦')
                              console.log(toast.componentMethod())}
              },
        })
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
          btnText: "",
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

