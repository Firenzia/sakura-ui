<template>
  <div>
    <p>样式1</p>
    <div style="width:600px">
      <s-layout height="400">
        <s-header height="100">header</s-header>
        <s-layout>
          <s-sider width="200">sidebar</s-sider>
          <s-content>content</s-content>
        </s-layout>
        <s-footer>footer</s-footer>
      </s-layout>
    </div>

    <p>样式2</p>
    <div style="width:600px">
      <s-layout height="400">
        <s-header height="100">header</s-header>
        <s-layout>
          <s-content>content</s-content>
        </s-layout>
        <s-footer>footer</s-footer>
      </s-layout>
    </div>

    <p>样式3</p>
    <div style="width:600px">
      <s-layout height="400">
        <s-header height="100">header</s-header>
        <s-layout>
          <s-content>content</s-content>
          <s-sider width="200">sidebar</s-sider>
        </s-layout>
        <s-footer>footer</s-footer>
      </s-layout>
    </div>

    <p>样式4</p>
    <div style="width:600px">
      <s-layout height="400">
        <s-sider width="200">sidebar</s-sider>
        <s-layout>
          <s-header height="100">header</s-header>
          <s-content>content</s-content>
          <s-footer>footer</s-footer>
        </s-layout>
      </s-layout>
    </div>

    <pre class="codePre">
          <code>{{code}}</code>
        </pre>
  </div>
</template>
<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Sider from "../../../src/sider";
import Footer from "../../../src/footer";
export default {
  data() {
    return {
      code: `
        // 样式1
          <s-layout height='400'>
              <s-header height='100'>header</s-header>
              <s-layout>
                  <s-sider width='200'>sidebar</s-sider>
                  <s-content>content</s-content>
              </s-layout>
              <s-footer>footer</s-footer>
          </s-layout>
    `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  components: {
    "s-layout": Layout,
    "s-header": Header,
    "s-content": Content,
    "s-sider": Sider,
    "s-footer": Footer
  }
};
</script>
<style lang="scss" scoped>
</style>

