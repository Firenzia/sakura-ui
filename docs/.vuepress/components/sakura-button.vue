<template>
  <div>
    <sakura-card>
      <s-button icon="heart" icon-position="right">按钮</s-button>
      <s-button loading icon="download">加载中</s-button>
      <s-button-group>
          <s-button icon="left" icon-position="left">前一页</s-button>
          <s-button>中间</s-button>
          <s-button icon="right" icon-position="right">后一页</s-button>
      </s-button-group>

      <template v-slot:code><code v-html="code"></code></template>
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
           <td>icon</td>
           <td>按钮上图标名称</td>
           <td>String</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>icon-position</td>
           <td>图标在按钮的左右位置</td>
           <td>String</td>
           <td>left, right</td>
           <td>0</td>
         </tr>
         <tr>
           <td>loading</td>
           <td>显示加载中图标</td>
           <td>Boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
       </tbody>
     </table>

  </div>
</template>
<script>
import btn from '../../../src/button'
import btnGroup from '../../../src/button-group'
export default {
  data(){
    return {
      code: `
        <span class="code-row"><span>&lt;template&gt;</span></span>
          <span class="code-row"><span>&lt;s-button&nbsp;icon=</span><span class="code-string">"setting"</span><span>&nbsp;icon-position=</span><span class="code-string">"right"</span><span>&gt;</span><span>按钮&lt;/s-button&gt;</span></span>
          <span class="code-row"><span>&lt;s-button&nbsp;loading&nbsp;icon=</span><span class="code-string">"download"</span><span>&gt;</span><span>加载中&lt;/s-button&gt;</span></span>
          <span class="code-row"><span>&lt;s-button-group&gt;</span></span>
            <span class="code-row"><span>&lt;s-button&nbsp;icon=</span><span class="code-string">"left"</span><span>&nbsp;icon-position=</span><span class="code-string">"left"</span><span>&gt;</span><span>上一页&lt;/s-button&gt;</span></span>
             <span class="code-row"><span>&lt;s-button&gt;中间&lt;/s-button&gt;</span></span>
            <span class="code-row"><span>&lt;s-button&nbsp;icon=</span><span class="code-string">"right"</span><span>&nbsp;icon-position=</span><span class="code-string">"right"</span><span>&gt;</span><span>后一页&lt;/s-button&gt;</span></span>
          <span class="code-row"><span>&lt;s-button-group&gt;</span></span>
        <span class="code-row"><span>&lt;template&gt;</span></span>
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

