<template>
  <div>
    <h3>样式1</h3>
    <sakura-card>
        <div style="width:600px">
          <s-layout height="400">
            <s-header height="100">header</s-header>
            <s-layout>
              <s-content>content</s-content>
            </s-layout>
            <s-footer>footer</s-footer>
          </s-layout>
        </div>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
    </sakura-card>

    <h3>样式2</h3>
    <sakura-card>
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

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
    </sakura-card>

    <h3>样式3</h3>
    <sakura-card>
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

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code3}}</code></pre></template>
    </sakura-card>

    <h3>样式4</h3>
    <sakura-card>
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

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code4}}</code></pre></template>
    </sakura-card>

</div>
</template>
<script>
import Layout from "../../../src/container/layout";
import Header from "../../../src/container/header";
import Content from "../../../src/container/content";
import Sider from "../../../src/container/sider";
import Footer from "../../../src/container/footer";
export default {
  data() {
    return {
      code1: `
        <s-layout height="400">
            <s-header height="100">header</s-header>
            <s-layout>
              <s-content>content</s-content>
            </s-layout>
            <s-footer>footer</s-footer>
        </s-layout>
     `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <s-layout height="400">
          <s-header height="100">header</s-header>
          <s-layout>
            <s-sider width="200">sidebar</s-sider>
            <s-content>content</s-content>
          </s-layout>
          <s-footer>footer</s-footer>
        </s-layout>
      `.replace(/^ {8}/gm, "").trim(),
      code3: `
        <s-layout height="400">
          <s-header height="100">header</s-header>
          <s-layout>
            <s-content>content</s-content>
            <s-sider width="200">sidebar</s-sider>
          </s-layout>
          <s-footer>footer</s-footer>
        </s-layout>
      `.replace(/^ {8}/gm, "").trim(),
      code4: `
        <s-layout height="400">
          <s-sider width="200">sidebar</s-sider>
          <s-layout>
            <s-header height="100">header</s-header>
            <s-content>content</s-content>
            <s-footer>footer</s-footer>
          </s-layout>
        </s-layout>
      `.replace(/^ {8}/gm, "").trim()
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

