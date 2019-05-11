<template>
  <div>
    <h3>基础用法</h3>
    <sakura-card>
       <s-datepicker v-model="selectedDate"></s-datepicker>
    
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>

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

