<template>
  <div ref="fan" class="fan">
     <div class="item" v-for="(item, index) in list" 
     :key="index" 
     :style="getItemStyle(item.color,index)" 
     @click="selectColor(item)"></div>
  </div>
</template>
<script>
export default {
  name:'sakura-color',
  props:{
    list:{
      type: Array
    }
  },
  data(){
    return {
      isOpen: false,
    }
  },
  mounted(){
    this.addFanDot()
  },
  watch:{
    isOpen(val){
      Array.from(this.$refs.fan.children).forEach((item, index)=>{
      if(val){
        let degree = 150/this.list.length*index
        item.style.transform =  `rotate(${degree-73}deg)`  
        }else{
          item.style.transform='none'
        }
      })    
    }
  },
  methods:{
    selectColor(item){
      this.$emit('selectColor',item)
    },

    addFanDot(){
      var dot = document.createElement('div')
      dot.style.cssText = 'height:14px;width:14px;background:#fff;border-radius:50%;position:absolute;bottom:4px;left:8px'
      
      this.$refs.fan.lastChild.appendChild(dot)
      dot.addEventListener('click',()=>{
        this.isOpen =!this.isOpen
      })
  
    },
    getItemStyle(color,index){
      let degree = 150/this.list.length*index
      return {backgroundColor: color, transformOrigin: '10px 140px',zIndex:index}
    }
  }
}
</script>
<style lang="scss" scoped>
.fan{
  width:320px;
  height: 170px;
  position: relative;
  display: inline-block;
}
.item{
  position: absolute;
  left:50%;
  margin-left:-15px;
  top:10px;
  width: 30px;
  height: 140px;
  transition: 2s;
  &:hover{
    opacity: .65;
  }
}
 
</style>