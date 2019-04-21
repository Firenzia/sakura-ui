<template>
  <div>
    <p>响应式,尝试缩放浏览器</p>
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

    <p>不设置</p>
    <s-row class="row-bg">
      <s-col span="4">
        <div class="demo-col">1</div>
      </s-col>
      <s-col span="4">
        <div class="demo-col">2</div>
      </s-col>
      <s-col span="4">
        <div class="demo-col">3</div>
      </s-col>
      <s-col span="4">
        <div class="demo-col">4</div>
      </s-col>
      <s-col span="4">
        <div class="demo-col">5</div>
      </s-col>
      <s-col span="4">
        <div class="demo-col">6</div>
      </s-col>
    </s-row>

    <p>设置gutter20</p>
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

    <p>设置span</p>
    <s-row class="row-bg">
      <s-col span="5">
        <div class="demo-col">span是5</div>
      </s-col>
      <s-col span="8">
        <div class="demo-col">span是8</div>
      </s-col>
    </s-row>

    <p>设置offset</p>
    <s-row class="row-bg">
      <s-col span="6">
        <div class="demo-col">1</div>
      </s-col>
      <s-col span="6">
        <div class="demo-col">2</div>
      </s-col>
      <s-col span="6" offset="6">
        <div class="demo-col">offset是6</div>
      </s-col>
    </s-row>

    <pre class="codePre">
          <code>{{code}}</code>
        </pre>
  </div>
</template>
<script>
import Row from "../../../src/row";
import Col from "../../../src/col";
export default {
  data() {
    return {
      code: `
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
        .replace(/^ {8}/gm, "")
        .trim()
    };
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

