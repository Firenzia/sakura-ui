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

     <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
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

       <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
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

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code3}}</code></pre></template>
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

       <template v-slot:code><pre v-highlightjs><code class="vue">{{code4}}</code></pre></template>
    </sakura-card>

  </div>
</template>
<script>
import Row from "../../../src/layout/row";
import Col from "../../../src/layout/col";
export default {
  data() {
    return {
      code1: `
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
    `.replace(/^ {8}/gm, "").trim(),
      code2:`
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
      `.replace(/^ {8}/gm, "").trim(),
      code3:`
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
      `.replace(/^ {8}/gm, "").trim(),
      code4:`
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
      `.replace(/^ {8}/gm, "").trim()
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

