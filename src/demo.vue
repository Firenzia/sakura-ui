<template>
  <div>
     <div>{{selected}}</div>
     <s-cascader
    :options="ajaxOptions"
    :selected.sync="selected"
    @update:selected="xxx" >
  </s-cascader>
  </div>
</template>
<script>
import db from './db/data'

import Cascader from './cascader'

function ajax (parentId = 0) {
  return new Promise((resolve, reject) => {
    let result = db.filter(item => item.parent_id === parentId)
    resolve(result)
  })
}

export default {
  data () {
    return {
      selected: [],
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
          }
        ]
      }
      ]
    }
  },
  created () {
    // ajax(0).then(value => {
    //   this.ajaxOptions = value
    // })
  },
  components: {
    's-cascader': Cascader
  },
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

</style>
