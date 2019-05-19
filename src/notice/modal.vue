<template>
  <div class="modal-wrapper">
    <div class="mask" v-show="isVisible" key="mask">
       <div class="outer-modal">
         <div class="modal" v-show="isVisible" key="modal">
            <div class="modal-header">
              <span class="title">{{title}}</span>
              <s-icon name="false" ref="closeIco"  class="close-ico"></s-icon>
            </div>

            <div class="modal-body" v-if="enableContentHtml" v-html="content"></div>
            <div class="modal-body" v-else>{{content}}</div>

            <div class="modal-action">
              <s-button ref="cancelBtn" v-if="btnConfig.cancelText">{{btnConfig.cancelText}}</s-button>
              <s-button ref="confirmBtn" type="primary">{{btnConfig.confirmText}}</s-button>
            </div>
          </div>
       </div>
    </div>
  </div>
</template>
<script>
import Icon from '../icon/icon'
import Button from '../button/button'
export default {
  name: 's-modal',
  props: {
    title: {
      default: '这是标题'
    },
    content: {
      default: '这是内容'
    },
    btnConfig: {
      type: Object,
      validator (val) {
        if (val.confrimCallback && typeof val.confrimCallback !== 'function') {
          return false
        }

        if (val.cancelCallback && typeof val.cancelCallback !== 'function') {
          return false
        }

        Object.keys(val).forEach(key => {
          if (!['confrimCallback', 'cancelCallback', 'cancelModalCallback', 'confirmText', 'cancelText'].includes(key)) {
            return false
          }
        })
        return true
      }
    },
    enableContentHtml: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    modalStyle () {
      return this.isVisible ? '' : { display: 'none' }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.bindBtnEvent()
      this.bindIcoEvent()
    },
    bindBtnEvent () {
      this.$refs.confirmBtn.$el.addEventListener('click', () => {
        this.isVisible = false
        this.btnConfig.confirmCallback && this.btnConfig.confirmCallback()
      })
      if (!this.btnConfig.cancelText) return
      this.$refs.cancelBtn.$el.addEventListener('click', () => {
        this.isVisible = false
        this.btnConfig.cancelCallback && this.btnConfig.cancelCallback()
      })
    },
    bindIcoEvent () {
      console.log(this.$refs.closeIco)
      this.$refs.closeIco.$el.addEventListener('click', () => {
        this.isVisible = false
        this.btnConfig.cancelModalCallback && this.btnConfig.cancelModalCallback()
      })
    }
  },
  components: {
    's-icon': Icon,
    's-button': Button
  }
}
</script>
<style lang="scss" scoped>
 @import "theme";

.modal-wrapper{
  width: 100%;
  height: 100%;
}
.mask{
  position:fixed;
  width:100%;
  left:0;
  top:0;
  height: 100%;
  background-color: rgba(0,0,0,0.5)!important;
  z-index: 1000;
}
.outer-modal{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
.modal{
  animation:slide-down 0.5s;
  width:200px;
  background:#fff;
  padding:10px;
  border-radius: $border-radius;
  min-width: 400px;
  box-shadow: $box-shadow;
   .modal-header{
    display: flex;
    justify-content: space-between;
    padding-bottom:8px;
    border-bottom:1px solid $border-color;
    .title{
        font-size:18px;
      }
    }
    .close-ico:hover{
      transform: rotate(180deg);
      transition:all .8s;
    }

   .modal-body{
     padding:14px 0;
     font-size:$font-size;
   }
   .modal-action{
     padding:10px 0;
     display: flex;
     justify-content: flex-end;
     /deep/ button{
       &:last-child{
         margin-left:14px;
       }
     }
   }
}
</style>
