<template>
  <div>
    <h3>基础用法</h3>
    <sakura-card>
       <s-datepicker v-model="selectedDate"></s-datepicker>
    
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>

    <div class="attr">Attributes</div>
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
           <td>type</td>
           <td>按钮类型</td>
           <td>string</td>
           <td>primary, info, success, warning, danger</td>
           <td>-</td>
         </tr>
         <tr>
           <td>disabled</td>
           <td>按钮是否禁用</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
         <tr>
           <td>icon</td>
           <td>按钮上图标名称</td>
           <td>string</td>
           <td>-</td>
           <td>-</td>
         </tr>
         <tr>
           <td>icon-position</td>
           <td>图标在按钮的左右位置</td>
           <td>string</td>
           <td>left, right</td>
           <td>0</td>
         </tr>
         <tr>
           <td>loading</td>
           <td>显示加载中图标</td>
           <td>boolean</td>
           <td>-</td>
           <td>false</td>
         </tr>
       </tbody>
     </table>

  </div>
</template>
<script>
import Datepicker from '../../../src/datepicker/datepicker'

export default {
  data(){
    return {
      selectedDate: new Date('2019-05-05'),
      code: `
        <s-datepicker v-model="selectedDate"></s-datepicker>
        export default {
          data(){
            return {
               selectedDate: new Date('2019-05-05')
               }
            }
        }
    `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-datepicker':Datepicker
  }
}
</script>
<style lang="scss" scoped>

</style>

