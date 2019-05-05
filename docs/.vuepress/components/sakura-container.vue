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

      <template v-slot:code><code v-html="code"></code></template>
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

      <template v-slot:code><code v-html="code"></code></template>
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

      <template v-slot:code><code v-html="code"></code></template>
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

      <template v-slot:code><code v-html="code"></code></template>
    </sakura-card>

    <div class="attr">Header Attributes</div>
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
          <td>height</td>
          <td>header高度, 单位px</td>
          <td>Number/String</td>
          <td>-</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>


    <div class="attr">Sider Attributes</div>
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
          <td>width</td>
          <td>sider宽度, 单位px</td>
          <td>Number/String</td>
          <td>-</td>
          <td>300</td>
        </tr>
      </tbody>
    </table>


    <div class="attr">Footer Attributes</div>
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
          <td>height</td>
          <td>footer高度, 单位px</td>
          <td>Number/String</td>
          <td>-</td>
          <td>60</td>
        </tr>
      </tbody>
    </table>

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

