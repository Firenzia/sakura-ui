<template>
  <div>
    <h3>基础用法</h3>
    <sakura-card>
      <s-steps :active="activeArry[0]">
        <s-step title="步骤 1"></s-step>
        <s-step title="步骤 2"></s-step>
        <s-step title="步骤 3"></s-step>
      </s-steps>
      <s-button type="primary" @click="handleClick(0)">click</s-button>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
      </template>
    </sakura-card>

    <h3>自定义完成样式提示颜色</h3>
    <sakura-card>
      <s-steps :active="activeArry[1]" step-finish-color="#409eff">
        <s-step title="步骤 1"></s-step>
        <s-step title="步骤 2"></s-step>
        <s-step title="步骤 3"></s-step>
      </s-steps>
      <s-button type="primary" @click="handleClick(1)">click</s-button>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
      </template>
    </sakura-card>

    <h3>带图标的步骤条</h3>
    <sakura-card>
      <s-steps :active="activeArry[2]" space="200">
        <s-step title="步骤 1" description="1992年我出生" icon="shamrock"></s-step>
        <s-step title="步骤 2" description="1999年我上学前班" icon="shamrock"></s-step>
        <s-step title="步骤 3" description="2005年我小学毕业" icon="shamrock"></s-step>
      </s-steps>
      <s-button type="primary" @click="handleClick(2)">click</s-button>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code3}}</code></pre>
      </template>
    </sakura-card>

    <h3>垂直步骤条</h3>
    <sakura-card>
      <s-steps :active="activeArry[3]" direction="vertical" style="height:300px">
        <s-step title="步骤 1"></s-step>
        <s-step title="步骤 2"></s-step>
        <s-step title="步骤 3"></s-step>
      </s-steps>
      <s-button type="primary" @click="handleClick(3)">click</s-button>

      <template v-slot:code>
        <pre v-highlightjs><code class="vue">{{code4}}</code></pre>
      </template>
    </sakura-card>
  </div>
</template>
<script>
import Steps from "../../../src/step/steps";
import Step from "../../../src/step/step";
import btn from "../../../src/button/button";

export default {
  data() {
    return {
      activeArry: [1, 2, 3, 1],
      code1: `
        <s-steps :active="active1">
          <s-step title="步骤 1"  ></s-step>
          <s-step title="步骤 2" ></s-step>
          <s-step title="步骤 3"></s-step>
        </s-steps>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code2: `
        <s-steps :active="active2" step-finish-color="#409eff">
          <s-step title="步骤 1"  ></s-step>
          <s-step title="步骤 2"  ></s-step>
          <s-step title="步骤 3" ></s-step>
        </s-steps>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code3: `
        <s-steps :active="active3" space="200" >
          <s-step title="步骤 1" description="1992年我出生" icon="shamrock"></s-step>
          <s-step title="步骤 2" description="1999年我上学前班" icon="shamrock"></s-step>
          <s-step title="步骤 3" description="2005年我小学毕业" icon="shamrock"></s-step>
        </s-steps>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      code4: `
        <s-steps :active="active4"  direction="vertical" style="height:300px">
          <s-step title="步骤 1"></s-step>
          <s-step title="步骤 2"></s-step>
          <s-step title="步骤 3"></s-step>
        </s-steps>
      `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    handleClick(prop) {
      this.activeArry[prop] === 3
        ? (this.activeArry[prop] = 0)
        : this.activeArry[prop]++;
      this.activeArry = [...this.activeArry];
    }
  },
  components: {
    "s-steps": Steps,
    "s-step": Step,
    "s-button": btn
  }
};
</script>
<style lang="scss" scoped>
.highlight {
  color: #3ba0e9;
  font-weight: bold;
}
</style>
