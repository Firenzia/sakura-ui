<template>
  <div>
      <s-popover
       style="margin-right:60px;"
        placement="top"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容">
        <s-button slot="reference">click 激活</s-button>
        <template v-slot:content="slotProps">
        <s-button @click="slotProps.close">点我也可以关闭</s-button>
      </template>>
    
    </s-popover>

    <s-popover
        placement="bottom"
        style="margin-right:60px;"
        title="标题"
        width="200"
        trigger="hover"
        content="啦啦啦啦，我是卖报的先哦行家。">
      <s-button slot="reference">hover 激活</s-button>
    </s-popover>

    <s-popover
        placement="left"
        style="margin-right:60px;"
        title="标题"
        width="200"
        trigger="hover"
        content="啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦v，">
      <s-button slot="reference">hover 激活</s-button>
    </s-popover>

    <s-popover
        placement="right"
        title="标题"
        width="200"
        trigger="hover"
        content="啦啦啦啦">
      <s-button slot="reference">hover 激活</s-button>
    </s-popover>    

    <pre><code>{{code}}</code></pre> 
    
  </div>
</template>
<script>
// todo 补充code
import Popover from '../../../src/popover'
export default {
  data(){
    return {
      code: `
        <s-icon name="setting"></s-icon>
    `.replace(/^\s+|\t+/gm, '')
    }
  },
  components:{
      's-icon':icon
  }
}
</script>
<style lang="scss" scoped>

</style>