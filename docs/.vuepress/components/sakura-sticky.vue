<template>
   <div >
    <sakura-card>
        <s-sticky :offset-top="top">
        <div class="box">滚动下看我是不是被黏住了~</div>
      </s-sticky>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
  </div>
</template>
<script>
import Sticky from '../../../src/sticky/sticky'
export default {
  data(){
    return {
      cont:'',
      top:54,
      code: `
        <s-sticky :offset-top="top">
          <div class="box">滚动下看我是不是被黏住了~</div>
        </s-sticky>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-sticky':Sticky
  }
  
}
</script>
<style lang="scss" scoped>
.box{
    width:400px;
    height: 50px;
    background:#F4A7B9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
</style>

