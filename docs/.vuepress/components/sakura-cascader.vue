<template>
  <div>
     <sakura-card>
       <s-cascader
          :options="options"
          :selected.sync="selected"
        >
       </s-cascader>
       <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
     </sakura-card>

  </div>
</template>
<script>
import Cascader from '../../../src/cascader/cascader'
export default {
  data(){
    return {
      selected:[],
      options:[{
        label: '美国',
        children: [
          {
            label: '德克萨斯',
            children: [
              { label: '休斯顿' },
              { label: '达拉斯' }
            ]
          }
        ]
      },
      {
        label: '中国',
        children: [
          {
            label: '广东',
            children: [
              { label: '汕头' },
              { label: '揭阳' }
            ]
          },
          {
            label: '江苏',
            children: [
              { label: '苏州' },
              { label: '南京' }
            ]
          },
           {
            label: '云南',
            children: [
              { label: '大理' },
              { label: '丽江' },
              { label: '香格里拉' },
              { label: '西双版纳' }
            ]
          }
        ]
      }
      ],
      code: `
        <s-cascader
          :options="options"
          :selected.sync="selected">
        </s-cascader>
        export default {
          data(){
            return {
              selected:[],
              options:[{
                label: '美国',
                children: [
                  {
                    label: '德克萨斯',
                    children: [
                      { label: '休斯顿' },
                      { label: '达拉斯' }
                    ]
                  }
                ]
              },
              {
                label: '中国',
                children: [
                  {
                    label: '广东',
                    children: [
                      { label: '汕头' },
                      { label: '揭阳' }
                    ]
                  },
                  {
                    label: '江苏',
                    children: [
                      { label: '苏州' },
                      { label: '南京' }
                    ]
                  },
                  {
                    label: '云南',
                    children: [
                      { label: '大理' },
                      { label: '丽江' },
                      { label: '香格里拉' },
                      { label: '西双版纳' }
                    ]
                  }
                ]
              }
              ]
            }
          }
      }
    `.replace(/^ {8}/gm, "").trim()
    }
  },
  components:{
      's-cascader':Cascader
  }
}
</script>
<style lang="scss" scoped>

</style>

