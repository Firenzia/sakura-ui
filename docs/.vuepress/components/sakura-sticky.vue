<template>
   <div >

     <sakura-card>
        <s-sticky :offset-top="top">
        <div class="box">滚动下看我是不是被黏住了~</div>
      </s-sticky>

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
           <td>offset-top</td>
           <td>发生粘滞条件距离浏览器视窗垂直距离</td>
           <td>Number</td>
           <td>-</td>
           <td>0</td>
         </tr>
       </tbody>
     </table>
  </div>
</template>
<script>
import Sticky from '../../../src/sticky'
export default {
  data(){
    return {
      top:54,
      code: `
        <span class="code-row"><span>&lt;template&gt;</span></span>
          <span class="code-row"> <span>&lt;s-sticky&nbsp;</span><span >:offset-top=</span><span class="code-string">"top"</span><span>&gt;</span></span>
            <span class="code-row"><span>&lt;</span><span>div&nbsp;class=</span><span class="code-string">"box"</span><span>&gt;&nbsp;滚动下看我是不是被黏住了~&lt;/div&gt;</span>
          <span class="code-row"><span>&lt;/s-sticky&gt;</span></span>
        <span class="code-row"><span>&lt;/template&gt;</span></span>
        <span class="code-row"><span>&lt;script&gt;</span></span>
          <span class="code-row"><span>export default {</span></span>
            <span class="code-row"><span>data() {</span></span>
              <span class="code-row"><span>return { top: 60 }</span></span>
            <span class="code-row"><span>}</span></span>
          <span class="code-row"><span>}</span></span>
        <span class="code-row"><span>&lt;/script&gt;</span></span>
    `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-sticky':Sticky
  }
}
</script>
<style lang="scss" scoped>
.box{
    width:400px;
    height: 50px;
    background:#F4A7B9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>

