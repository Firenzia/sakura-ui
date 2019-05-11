<template>
  <div class="color-wrapper">
    <div class="palette">
      <div style="height:50px;width:100%"> 点击扇子上的颜色，还有下方白色按钮可以折叠的哦~~</div>
      <div class="row">
        <sakura-fan :list="list1" @selectColor="changeDisplay" ref="fan1"></sakura-fan>
        <sakura-fan :list="list2"  @selectColor="changeDisplay" ref="fan2"></sakura-fan>
      </div>
      <div class="row">
        <sakura-fan :list="list3" @selectColor="changeDisplay" ref="fan3"></sakura-fan>
        <sakura-fan :list="list4"  @selectColor="changeDisplay" ref="fan4"></sakura-fan>
      </div>
      <div class="row">
        <sakura-fan :list="list5" @selectColor="changeDisplay" ref="fan5"></sakura-fan>
        <sakura-fan :list="list6"  @selectColor="changeDisplay" ref="fan6"></sakura-fan>
      </div>
    </div>
    <div class="introduction" :style="{backgroundColor:display.color,transition:'1.5s'}">
      <div class="color-cn">{{display.cnName}}</div>
      <div class="color-jp">{{display.jpName}}</div>
      <div class="color-value">{{display.color}}</div>
    </div>
  </div>
     
</template>
<script>
import SakuraFan from './sakura-fan'
import {list1, list2 ,list3,list4, list5,list6} from '../../static/js/color'
export default {
  name:'sakura-color',
  data(){
    return {
      display:{
        cnName:'桜',
        jpName:'SAKURA',
        color:'#FEDFE1'
      },
      value:'',
      list1,
      list2,
      list3,
      list4,
      list5,
      list6
    }
  },
  mounted(){
   let {fan1,fan2,fan3,fan4,fan5,fan6} = this.$refs
   let fanList = [fan1,fan2,fan3,fan4,fan5,fan6]
   fanList.forEach((item,index)=>{
      setTimeout(()=>{
        item.isOpen = true
      },1200*index)
   })
  },
  methods:{
    changeDisplay(v){
      this.display =v
    }
  },
  components:{
    'sakura-fan': SakuraFan
  }
}
</script>
<style lang="scss" scoped>
.color-wrapper{
  display: flex;
  flex-direction: row;
  .palette{
    width: 720px;
  }
  .introduction{
    flex-grow: 1;
    background: #DC9FB4;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    .color-cn{
      margin:100px 0 30px;
      font-size: 60px;
      display: flex;
      width: 1em;
    }
    .color-jp{
      font-size: 18px;
    }
    .color-value{
      margin-top:20px;
    }
  }
}
 .row{
   margin-bottom:20px;
   /deep/ .fan{
     &:last-child{
       margin-left: 30px;
     }
   }
 }
 
</style>