<template>
  <div >
    <sakura-card>
      <p>当前出现第 <span class="highlight">{{selected}} </span>张</p>
      <s-slide v-model="selected" class="slide-wrapper">
        <s-slide-item name="1">
          <div class="box">1</div>
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
      </s-slide>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>

    <div class="attr">Slide Attributes</div>
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
           <td>v-model</td>
           <td>第一次出现选中(如果是手风琴模式，绑定值类型需要为string，否则为array)</td>
           <td>string / array</td>
           <td>-</td>
           <td>-</td>
         </tr>
        <tr>
           <td>autoPlay</td>
           <td>是否自动播放</td>
           <td>Boolean</td>
           <td>-</td>
           <td>true</td>
         </tr>
          <tr>
           <td>duration</td>
           <td>播放动画间隔</td>
           <td>Number</td>
           <td>-</td>
           <td>5000毫秒</td>
         </tr>
       </tbody>
    </table>

     <div class="attr">SlideItem Attributes</div>
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
           <td>name</td>
           <td>唯一标志符</td>
           <td>String</td>
           <td>-</td>
           <td>-</td>
         </tr>
       </tbody>
    </table>

  </div>
</template>
<script>
import Slide from '../../../src/slide/slide'
import SlideItem from '../../../src/slide/slide-item'
export default {
  data(){
    return {
      selected:'1',
      code: `
        <s-slide v-model="selected" class="slide-wrapper">
          <s-slide-item name="1">
            <div class="box">1</div>
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
        </s-slide>
    `.replace(/^ {8}/gm, "").trim()
    }
  },
  components:{
    's-slide':Slide,
    's-slide-item':SlideItem,
  }
}
</script>
<style lang="scss" scoped>
.slide-wrapper{
    display: flex;
    justify-content: center;
    margin: 20px 0;
}
.box{
   width:600px;
   height: 200px;
   background: #ccc;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 60px;
 }
 .highlight{
  color:#3ba0e9;
  font-weight: bold;
}
</style>
