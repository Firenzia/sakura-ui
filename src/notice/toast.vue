<template>
  <div class="outer" :class="toastClass">
    <div class="toast-wrapper" :class="[`toast-${type}`]">
      <div v-if="enableHtml" v-html="message" class="message">
      </div>
      <div v-else class="message" >
          <s-icon v-if="type" :name="type"></s-icon>
          {{message}}
      </div>
      <div v-if="closeBtn" class="close-btn" @click="userCustClose">
          {{closeBtn.btnText}}
      </div>
    </div>
  </div>

</template>
<script>
import Icon from '../icon/icon'
export default {
  name: 's-toast',
  props: {
    // 默认2s自动关闭
    duration: {
      type: Number,
      default: 6000
    },
    message: {
      type: String
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    // 自动关闭前用户可以看文字按钮手动关闭
    closeBtn: {
      validator (val) {
        let flag = true
        for (let key of Object.keys(val)) {
          if (!['btnText', 'callback'].includes(key)) {
            flag = false
            break
          }
        }
        if (flag) {
          val['btnText'] = val['btnText'] || '关闭'
        }
        return flag
      }
    },
    // toast出现位置
    position: {
      default: 'top',
      validator (val) {
        return ['top', 'middle', 'bottom'].includes(val)
      }
    },
    type:{
      type: String,
      default: 'info',
      validator(val){
        return ['info','warning','success', 'error'].includes(val)
      }
    }
  },
  components:{
    's-icon': Icon
  },
  mounted () {
    this.autoClose()
  },
  computed: {
    toastClass () {
      return `show-on-${this.position}`
    }
  },
  methods: {
    autoClose () {
      setTimeout(() => {
        this.close()
      }, this.duration)
    },
    close () {
      this.$el.remove()
      this.$emit('closed')
      this.$destroy()
    },
    userCustClose () {
      this.close()
      this.closeBtn.callback(this)
    },
    componentMethod () {
      // console.log('我是组件方法')
    }
  }
}
</script>
<style lang="scss" scoped>
     @import "theme";
     .outer{
        z-index: 30;
        position: fixed;
        left:50%;
        transform: translate(-50%);
        
        &.show-on-top{
            top: 20px;
            .toast-wrapper{
                animation:slide-down 0.5s;
            }
        }
        &.show-on-middle{
            top:50%;
            transform: translate(-50%,-50%);
            .toast-wrapper{
                animation:fade-in 0.5s;
            }
        }
        &.show-on-bottom{
            bottom:20px;
            .toast-wrapper{
                animation:slide-up 0.5s;
            }
        }
     }
    .toast-wrapper{
        padding:.8em 0em;
        color:  $toast-text-color;
        box-shadow: $box-shadow;
        border-radius:$border-radius;
        display: flex;
        &.toast-info{
          background: $color-info;
        }
        &.toast-success{
          background: $color-success;
        }
        &.toast-error{
          background: $color-danger;
        }
        &.toast-warning{
          background: $color-warning;
        }
        > div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .message{
            max-width: 400px;
            padding: 0 1.2em;
            /deep/ .s-icon{
              margin-right:10px;
            }
            
        }
        .close-btn{
            padding: 0 1.2em;
            flex-shrink:0;
            border-left:1px solid #fff;
        }
    }
</style>
