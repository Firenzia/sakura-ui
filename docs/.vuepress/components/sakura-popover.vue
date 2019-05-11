<template>
  <div style="margin-top:40px">
    <sakura-card>
      <s-popover
        style="margin-right:60px;"
        placement="top"
        title="标题"
        width="200"
        trigger="click"
        content="这是昭和时代就流传的故事哦~">
      <s-button slot="reference">click 福袋1</s-button>
      <template v-slot:content="slotProps">
        <s-button @click="slotProps.close">关闭</s-button>
      </template>
    </s-popover>

    <s-popover
      placement="bottom"
      style="margin-right:60px;"
      title="标题"
      width="200"
      trigger="hover"
      content="平成时代落幕了，伤感ing~">
      <s-button slot="reference">福袋2</s-button>
    </s-popover>

    <s-popover
      placement="left"
      style="margin-right:60px;"
      title="标题"
      width="200"
      trigger="hover"
      content="今年5月起进入令和元年">
      <s-button slot="reference">福袋3</s-button>
    </s-popover>

    <s-popover placement="right" title="标题" width="200" trigger="hover" content="你知道什么是大正浪漫吗~？">
      <s-button slot="reference">福袋4</s-button>
    </s-popover>

     <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
  
  </div>
</template>
<script>
// todo 补充code
import Popover from "../../../src/notice/popover";
import Button from "../../../src/button/button";
export default {
  data() {
    return {
      code: `
        <s-popover
            style="margin-right:60px;"
            placement="top"
            title="标题"
            width="200"
            trigger="click"
            content="这是昭和时代就流传的故事哦~">
          <s-button slot="reference">click 激活</s-button>
          <template v-slot:content="slotProps">
            <s-button @click="slotProps.close">关闭</s-button>
          </template>
        </s-popover>

        <s-popover
          placement="bottom"
          style="margin-right:60px;"
          title="标题"
          width="200"
          trigger="hover"
          content="平成时代落幕了，伤感ing~">
          <s-button slot="reference">hover 激活</s-button>
        </s-popover>

        <s-popover
          placement="left"
          style="margin-right:60px;"
          title="标题"
          width="200"
          trigger="hover"
          content="今年5月起进入令和元年">
          <s-button slot="reference">hover 激活</s-button>
        </s-popover>

        <s-popover placement="right" title="标题" width="200" trigger="hover" content="你知道什么是大正浪漫吗~？">
          <s-button slot="reference">hover 激活</s-button>
        </s-popover>
    `.replace(/^ {8}/gm, "").trim()
    };
  },
  components: {
    "s-popover": Popover,
    "s-button": Button
  }
};
</script>
<style lang="scss" scoped>
</style>