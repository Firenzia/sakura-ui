<template>
  <div>

    <h3>基础用法</h3>
    <sakura-card>
      <s-row class="row-bg">
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </s-col>
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </s-col>
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#f69e9f"></div>
        </s-col>
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#fce6e6"></div>
        </s-col>
        <s-col span="4">
          <div class="demo-col" style="backgroundColor:#5f4d58"></div>
      </s-col>
     </s-row>

     <template v-slot:code><code v-html="code1"></code></template>
    </sakura-card>

    <h3>分栏偏移</h3>
    <sakura-card>
       <s-row class="row-bg">
        <s-col span="6">
          <div class="demo-col"  style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="6">
          <div class="demo-col"  style="backgroundColor:#E3CBA8"></div>
        </s-col>
        <s-col span="6" offset="6">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
      </s-row>

      <template v-slot:code><code v-html="code2"></code></template>
    </sakura-card>

    <h3>分栏间隔</h3>
    <sakura-card>
       <s-row class="row-bg" gutter="20">
        <s-col span="6">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="6">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="6">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="6">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
      </s-row>

      <template v-slot:code><code v-html="code3"></code></template>
    </sakura-card>


    <h3>响应式布局</h3>
    <sakura-card>
      <s-row class="row-bg" align="left">
        <s-col span="8" :xl="{span:1}" :md="{span:10}" >
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </s-col>
        <s-col span="8" :xl="{span:10}" :md="{span:2}">
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </s-col>
        <s-col span="8" :xl="{span:2}" :md="{span:3}">
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </s-col>
      </s-row>

      <template v-slot:code><code v-html="code4"></code></template>
    </sakura-card>

     <div class="attr">Row Attributes</div>
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
           <td>gutter</td>
           <td>栅格间隔</td>
           <td>number, 单位px</td>
           <td>-</td>
           <td>-</td>
         </tr>
        <tr>
           <td>align</td>
           <td>flex 布局下的水平排列方式</td>
           <td>String</td>
           <td>'center', 'left', 'right'</td>
           <td>left</td>
         </tr>
       </tbody>
    </table>

     <div class="attr">Col Attributes</div>
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
           <td>span</td>
           <td>栅格占据的列数</td>
           <td>Number</td>
           <td>-</td>
           <td>24</td>
         </tr>
          <tr>
           <td>offset</td>
           <td>栅格左侧的间隔格数</td>
           <td>Number</td>
           <td>-</td>
           <td>0</td>
         </tr>
         <tr>
           <td>xs</td>
           <td>小于576px 响应式栅格数或者栅格属性对象</td>
           <td>object (例如： {span: 4, offset: 4})</td>
           <td>-</td>
           <td>24</td>
         </tr>
         <tr>
           <td>sm</td>
           <td>介于576px和768px的响应式栅格数或者栅格属性对象</td>
           <td>object (例如： {span: 4, offset: 4})</td>
           <td>-</td>
           <td>24</td>
         </tr>
         <tr>
           <td>md</td>
           <td>介于768px和992px的响应式栅格数或者栅格属性对象</td>
           <td>object (例如： {span: 4, offset: 4})</td>
           <td>-</td>
           <td>24</td>
         </tr>
         <tr>
           <td>lg</td>
           <td>介于992px和1200px的栅格数或者栅格属性对象</td>
           <td>object (例如： {span: 4, offset: 4})</td>
           <td>-</td>
           <td>24</td>
         </tr>
         <tr>
           <td>xl</td>
           <td>大于1200px 响应式栅格数或者栅格属性对象</td>
           <td>object (例如： {span: 4, offset: 4})</td>
           <td>-</td>
           <td>24</td>
         </tr>
       </tbody>
    </table>

  </div>
</template>
<script>
import Row from "../../../src/layout/row";
import Col from "../../../src/layout/col";
export default {
  data() {
    return {
      code1: `
        // 响应式
        <s-row class="row-bg" align="left">
          <s-col span="8" :xs="{span:2}" :md="{span:10}">
            <div class="demo-col">1</div>
          </s-col>
          <s-col span="8" :xs="{span:10}" :md="{span:2}">
            <div class="demo-col">2</div>
          </s-col>
          <s-col span="8" :xs="{span:2}" :md="{span:3}">
            <div class="demo-col">3</div>
          </s-col>
        </s-row>

        // 设置gutter
        <s-row class="row-bg" gutter="20">
          <s-col span="6">
            <div class="demo-col">1</div>
          </s-col>
          <s-col span="6">
            <div class="demo-col">2</div>
          </s-col>
          <s-col span="6">
            <div class="demo-col">3</div>
          </s-col>
          <s-col span="6">
            <div class="demo-col">4</div>
          </s-col>
        </s-row>

    `
        .replace(/^ {8}/gm, "").trim(),
      code2:'',
      code3:'',
      code4:''
    }
  },
  components: {
    "s-row": Row,
    "s-col": Col
  }
};
</script>
<style lang="scss" scoped>
.demo-col{ 
    background: pink;
    padding:1em 
}
</style>

