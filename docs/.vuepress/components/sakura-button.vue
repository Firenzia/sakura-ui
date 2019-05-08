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
    
      <template v-slot:code><code>123355555</code></template>
 
      <pre v-highlightjs style="background:#000"><code class="vue">{{test}}</code></pre>
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
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)
export default {
  data(){
    return {
      test:`
      <h3>加载中</h3>
    <sakura-card>
      <s-button  loading icon="download"  type="primary">加载中</s-button>

      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>
      export default {
      data(){
        return {a:1}
       `      ,
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
<style>
.hljs-comment,.hljs-quote{color:#d4d0ab}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#ffa07a}.hljs-number,.hljs-built_in,.hljs-builtin-name,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link{color:#f5ab35}.hljs-attribute{color:#ffd700}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:#abe338}.hljs-title,.hljs-section{color:#00e0e0}.hljs-keyword,.hljs-selector-tag{color:#dcc6e0}.hljs{display:block;overflow-x:auto;background:#2b2b2b;color:#f8f8f2;padding:.5em}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:bold}@media screen and (-ms-high-contrast:active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-builtin-name,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:bold}}
</style>


