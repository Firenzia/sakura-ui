<template>
      <div>
        <s-icon name="setting"></s-icon>

         <pre class="codePre">
          <code>{{code}}</code>
        </pre>
    
      </div>
</template>
<script>
import icon from '../../../src/icon'
export default {
  data(){
    return {
      code: `
        <s-button :loading=true icon="download">按钮</s-button>
        <s-button-group>
          <s-button icon="left" icon-position="left">前一页</s-button>
          <s-button icon-position="left">中间</s-button>
          <s-button icon="right" icon-position="right">后一页</s-button>
        </s-button-group>
    `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-icon':icon
  }
}
</script>
<style lang="scss" scoped>

</style>

