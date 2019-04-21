<template>
  <div>
    <button @click="showToast">点我</button>

     <pre><code>{{code}}</code></pre> 
  </div>
</template>
<script>
import Vue from "vue";
import ToastPlugin from "../../../src/plugins/toast";

Vue.use(ToastPlugin);
export default {
  data() {
    return {
      code: `
        this.$toast({
            'message':'更新元素可以重新考虑是否通过使用组件来替代。', 
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
  methods: {
    showToast() {
      this.$toast({
        message: "更新元素可以重新考虑是否通过使用组件来替代。",
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

