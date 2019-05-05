<template>
  <div>
    <h3>基础用法</h3>
    <sakura-card>
      <s-button>default</s-button>
      <s-button type="primary">primary</s-button>
      <s-button type="info">info</s-button>
      <s-button type="success">success</s-button>
      <s-button type="warning">warning</s-button>
      <s-button type="danger">danger</s-button>
    
      <template v-slot:code><code v-html="code1"></code></template>
    </sakura-card>

     <h3>禁用状态</h3>
    <sakura-card>
      <s-button disabled type="primary">disabled</s-button>
      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>

    <h3>图标按钮</h3>
    <sakura-card>
      <s-button  icon="home"  type="primary">home</s-button>
      <s-button  icon="phone-fill" type="primary" icon-position="right">call</s-button>
      <s-button  icon="visible"  type="primary">show password</s-button>
      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>

    <h3>加载中</h3>
    <sakura-card>
      <s-button  loading icon="download"  type="primary">加载中</s-button>

      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>

    <h3>按钮组</h3>
    <sakura-card>
      <s-button-group>
          <s-button icon="left" icon-position="left">prev</s-button>
          <s-button>middle</s-button>
          <s-button icon="right" icon-position="right">next</s-button>
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
           <td>type</td>
           <td>按钮类型</td>
           <td>string</td>
           <td>primary, info, success, warning, danger</td>
           <td>-</td>
         </tr>
         <tr>
           <td>disabled</td>
           <td>按钮是否禁用</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
         <tr>
           <td>icon</td>
           <td>按钮上图标名称</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>icon-position</td>
           <td>图标在按钮的左右位置</td>
           <td>string</td>
           <td>left, right</td>
           <td>0</td>
         </tr>
         <tr>
           <td>loading</td>
           <td>显示加载中图标</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
       </tbody>
     </table>

  </div>
</template>
<script>
import btn from '../../../src/button/button'
import btnGroup from '../../../src/button/button-group'
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

