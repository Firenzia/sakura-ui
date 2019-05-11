<template>
  <div class="modal-wrapper">
    <div class="mask" :style="modalStyle"></div>

    <div class="modal" :style="modalStyle">
      <div class="modal-header">
        <span class="title">{{title}}</span>
        <s-icon name="false" ref="closeIco"></s-icon>
      </div>

      <div class="modal-body" v-if="enableContentHtml" v-html="content"></div>
      <div class="modal-body" v-else>{{content}}</div>

       <div class="modal-action">
         <s-button ref="cancelBtn" v-if="btnConfig.cancelText">{{btnConfig.cancelText}}</s-button>
         <s-button ref="confirmBtn" type="primary">{{btnConfig.confirmText}}</s-button>
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
  background:#000;
  opacity: .5;
  z-index: 1000;
}
.modal{
  width:200px;
  background:#fff;
  z-index: 1001;
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding:10px;
  border-radius: 10px;
  min-width: 400px;
   .modal-header{
    display: flex;
    justify-content: space-between;
      .title{
        font-size:18px;
      }
    }

   .modal-body{
     padding:14px 0;
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
