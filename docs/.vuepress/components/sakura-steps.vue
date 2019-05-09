<template>
  <div >
    <h3>基础用法</h3>
    <sakura-card>
      <s-steps :active="active1">
        <s-step title="步骤 1"  ></s-step>
        <s-step title="步骤 2" ></s-step>
        <s-step title="步骤 3"></s-step>
      </s-steps>
      <button @click="set1">click</button>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code1}}</code></pre></template>
    </sakura-card>

    <h3>自定义完成样式提示颜色</h3>
    <sakura-card>
       <s-steps :active="active2" step-finish-color="#409eff">
        <s-step title="步骤 1"  ></s-step>
        <s-step title="步骤 2"  ></s-step>
        <s-step title="步骤 3" ></s-step>
      </s-steps>
      <button @click="set2">click</button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code2}}</code></pre></template>
    </sakura-card>

    <h3>带图标的步骤条</h3>
    <sakura-card>
       <s-steps :active="active3" space="200" >
        <s-step title="步骤 1" description="1992年我出生" icon="shamrock"></s-step>
        <s-step title="步骤 2" description="1999年我上学前班" icon="shamrock"></s-step>
        <s-step title="步骤 3" description="2005年我小学毕业" icon="shamrock"></s-step>
       </s-steps>
      <button @click="set3">click</button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code3}}</code></pre></template>
    </sakura-card>

    <h3>垂直步骤条</h3>
    <sakura-card>
       <s-steps :active="active4"  direction="vertical" style="height:300px">
        <s-step title="步骤 1"  ></s-step>
        <s-step title="步骤 2"  ></s-step>
        <s-step title="步骤 3" ></s-step>
      </s-steps>
      <button @click="set4">click</button>
      
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code4}}</code></pre></template>
    </sakura-card>

    <div class="attr">Steps Attributes</div>
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
           <td>active</td>
           <td>设置当前激活步骤</td>
           <td>number</td>
           <td>-</td>
           <td>0</td>
         </tr>
        <tr>
           <td>direction</td>
           <td>步骤条显示方向</td>
           <td>string</td>
           <td>horizontal, vertical</td>
           <td>horizontal</td>
         </tr>
          <tr>
           <td>step-finish-color</td>
           <td>自定义完成步骤显示颜色</td>
           <td>string</td>
           <td>-</td>
           <td>主题色，#d4b1b5</td>
         </tr>
        <tr>
           <td>span</td>
           <td>每个step的间距, 单位：px</td>
           <td>number</td>
           <td>-</td>
           <td>-</td>
         </tr>
       </tbody>
    </table>

     <div class="attr">Step Attributes</div>
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
           <td>title</td>
           <td>标题</td>
           <td>String</td>
           <td>-</td>
           <td>-</td>
         </tr>
          <tr>
           <td>description</td>
           <td>描述文字</td>
           <td>String</td>
           <td>-</td>
           <td>-</td>
         </tr>
          <tr>
           <td>icon</td>
           <td>图标</td>
           <td>String</td>
           <td>-</td>
           <td>-</td>
         </tr>
       </tbody>
    </table>

  </div>
</template>
<script>
import Steps from '../../../src/step/steps'
import Step from '../../../src/step/step'
export default {
  data(){
    return {
      active1: 1,
      active2: 2,
      active3: 3,
      active4: 1,
      code1: `
        <s-steps :active="active1">
          <s-step title="步骤 1"  ></s-step>
          <s-step title="步骤 2" ></s-step>
          <s-step title="步骤 3"></s-step>
        </s-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code2: `
        <s-steps :active="active2" step-finish-color="#409eff">
          <s-step title="步骤 1"  ></s-step>
          <s-step title="步骤 2"  ></s-step>
          <s-step title="步骤 3" ></s-step>
        </s-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code3: `
        <s-steps :active="active3" space="200" >
          <s-step title="步骤 1" description="1992年我出生" icon="shamrock"></s-step>
          <s-step title="步骤 2" description="1999年我上学前班" icon="shamrock"></s-step>
          <s-step title="步骤 3" description="2005年我小学毕业" icon="shamrock"></s-step>
        </s-steps>
      `.replace(/^ {8}/gm, "").trim(),
      code4: `
        <s-steps :active="active4"  direction="vertical" style="height:300px">
          <s-step title="步骤 1"></s-step>
          <s-step title="步骤 2"></s-step>
          <s-step title="步骤 3"></s-step>
        </s-steps>
      `.replace(/^ {8}/gm, "").trim(),
    }
  },
  methods: {
    set1(){
      if(this.active1===3){
        this.active1 = 0
        return
      }
      this.active1++
    },
    set2(){
       if(this.active2===3){
        this.active2 = 0
        return
      }
      this.active2++
    },
    set3(){
       if(this.active3===3){
        this.active3 = 0
        return
      }
      this.active3++
    },
    set4(){
      if(this.active4===3){
        this.active4 = 0
        return
      }
      this.active4++
    }
  },
  components:{
    's-steps':Steps,
    's-step':Step,
  }
}
</script>
<style lang="scss" scoped>

 .highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>
