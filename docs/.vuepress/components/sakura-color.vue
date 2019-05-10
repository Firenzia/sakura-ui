<template>
  <div>
     <div style="height:50px;width:100%">{{value}} 点击扇子下方白色按钮可以折叠的哦~~</div>
      <div class="row">
         <sakura-fan :list="list1" @selectColor="X"></sakura-fan>
        <sakura-fan :list="list1"  @selectColor="X"></sakura-fan>
      </div>
      <div class="row">
         <sakura-fan :list="list1" @selectColor="X"></sakura-fan>
        <sakura-fan :list="list1"  @selectColor="X"></sakura-fan>
      </div>
      <div class="row">
         <sakura-fan :list="list1" @selectColor="X"></sakura-fan>
        <sakura-fan :list="list1"  @selectColor="X"></sakura-fan>
      </div>

  </div>
</template>
<script>
import SakuraFan from './sakura-fan'
export default {
  name:'sakura-color',
  data(){
    return {
      value:'',
      list1:['#DC9FB4','#E16B8C','#8E354A','#F8C3CD','#D0104C','#64363C','#9F353A','#E87A90','#D05A6E','#DB4D6D','#FEDFE1','#9E7A7A']
    }
  },
  mounted(){
   
  },
  methods:{
    X(v){
      this.value =v
    }
  },
  components:{
    'sakura-fan': SakuraFan
  }
}
</script>
<style lang="scss" scoped>
 .row{
   margin-bottom:20px;
   /deep/ .fan{
     &:last-child{
       margin-left: 30px;
     }
   }
 }
 
</style>