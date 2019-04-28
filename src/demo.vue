<template>
  <div>
    <s-tab :selected.sync="selected">
        <s-tab-head>
            <s-tab-item name="bee">
                bee
            </s-tab-item>
            <s-tab-item name="flower" disabled>
                flower
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
            <s-tab-pane  name="herb">This is herb</s-tab-pane>
            <s-tab-pane  name="tree">This is tree</s-tab-pane>
    </s-tab-body>
    {{selected}}
</s-tab>
     <!-- <div>{{selected}}</div>
     <s-cascader
    :options="ajaxOptions"
    :selected.sync="selected"
    @update:selected="xxx" >
  </s-cascader>
  </div> -->

    <!-- <s-slide :selected.sync="selected">
      <s-slide-item name="1">
        <div class="box" >1</div>
      </s-slide-item>
      <s-slide-item name="2">
        <div class="box" >2</div>
      </s-slide-item>
      <s-slide-item name="3">
        <div class="box">3</div>
      </s-slide-item>
      <s-slide-item name="4">
        <div class="box">4</div>
      </s-slide-item>
      <s-slide-item name="5">
        <div class="box">5</div>
      </s-slide-item>
    </s-slide> -->
  </div>
</template>
<script>
import db from './db/data'

function ajax (parentId = 0) {
  return new Promise((resolve, reject) => {
    let result = db.filter(item => item.parent_id === parentId)
    resolve(result)
  })
}

ajax()

export default {
  data () {
    return {
      selected: 'herb',
      ajaxOptions1: [],
      ajaxOptions: [{
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
  },
  mounted () {

    // ajax(0).then(value => {
    //   this.ajaxOptions = value
    // })
  },
  // components: {
  //   's-cascader': Cascader
  // },
  methods: {
    // 父组件来修改selected, 选中某个，设置children是下一个
    xxx ($event) {
      console.log('xxx1', this.selected[0].id)

      // this.$set(this.$selected, 0)
    }
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';
 .box{
   width:200px;
   height: 200px;
   background: #ccc;
 }
</style>
