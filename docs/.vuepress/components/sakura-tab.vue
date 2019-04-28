<template>
  <div>
    <p>左边标签页</p>
    <p>当前选中的标签是： <span class="highlight">{{selected}}</span></p>
    <s-tab tab-position="left" :selected.sync="selected">
      <s-tab-head>
        <s-tab-item name="flower">
          flower
          <s-icon name="setting" slot="icon"></s-icon>
        </s-tab-item>
        <s-tab-item name="grass">grass</s-tab-item>
        <s-tab-item name="herb">herb</s-tab-item>
      </s-tab-head>
      <s-tab-body>
        <s-tab-pane name="flower">This is flower</s-tab-pane>
        <s-tab-pane name="grass">This is grass</s-tab-pane>
        <s-tab-pane name="herb">This is herb</s-tab-pane>
      </s-tab-body>
    </s-tab>

    <p style="margin-top:80px;">顶部标签页</p>
    <s-tab selected.sync="herb">
      <s-tab-head>
        <s-tab-item name="bee">bee</s-tab-item>
        <s-tab-item name="flower" disabled>
          你点不到我
          <s-icon name="setting" slot="icon"></s-icon>
        </s-tab-item>
        <s-tab-item name="grass">grass</s-tab-item>
        <s-tab-item name="herb">herb</s-tab-item>
        <s-tab-item name="tree">tree</s-tab-item>
      </s-tab-head>
      <s-tab-body>
        <s-tab-pane name="bee">This is bee</s-tab-pane>
        <s-tab-pane name="flower">This is flower</s-tab-pane>
        <s-tab-pane name="grass">This is grass</s-tab-pane>
        <s-tab-pane name="herb">This is herb</s-tab-pane>
        <s-tab-pane name="tree">This is tree</s-tab-pane>
      </s-tab-body>
    </s-tab>

    <p>代码</p>
    <pre><code>{{code}}</code></pre> 
  </div>
</template>
<script>
import Tab from "../../../src/tab";
import TabHead from "../../../src/tab-head";
import TabItem from "../../../src/tab-item";
import TabBody from "../../../src/tab-body";
import TabPane from "../../../src/tab-pane";
import Icon from "../../../src/icon";
export default {
  data() {
    return {
      selected:'herb',
      code: `
        <s-tab tab-position="left" selected="herb">
        <s-tab-head>
            <s-tab-item name="flower">
            flower
            <s-icon name="setting" slot="icon"></s-icon>
            </s-tab-item>
            <s-tab-item name="grass">grass</s-tab-item>
            <s-tab-item name="herb">herb</s-tab-item>
        </s-tab-head>
        <s-tab-body>
            <s-tab-pane name="flower">This is flower</s-tab-pane>
            <s-tab-pane name="grass">This is grass</s-tab-pane>
            <s-tab-pane name="herb">This is herb</s-tab-pane>
        </s-tab-body>
        </s-tab>
    `.replace(/^ {8}/gm, "")
        .trim()
    };
  },
  components: {
    "s-tab": Tab,
    "s-tab-head": TabHead,
    "s-tab-item": TabItem,
    "s-tab-body": TabBody,
    "s-tab-pane": TabPane,
    "s-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
.highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>

