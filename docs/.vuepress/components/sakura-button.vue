<template>
      <div>
        <s-button icon="setting" icon-position="right">按钮</s-button>
        <s-button :loading=true icon="download">按钮</s-button>
        <s-button-group>
            <s-button icon="left" icon-position="left">前一页</s-button>
            <s-button icon-position="left">中间</s-button>
            <s-button icon="right" icon-position="right">后一页</s-button>
        </s-button-group>

        <pre><code>{{code}}</code></pre> 
    
      </div>
</template>
<script>
import btn from '../../../src/button'
import btnGroup from '../../../src/button-group'
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
      's-button':btn,
      's-button-group':btnGroup
  }
}
</script>
<style lang="scss" scoped>

</style>

