<template>
  <div class="wrapper">
    <div ref="popover" v-show="visible" class="popover">{{content}}</div>
    <div ref="reference" class="reference">
        <slot name="reference"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
        visible: false
    }
  },
  props:{
      placement:{
        defaut:'top',
        validator(){
          return ['top','bottom','left','right']
        }
      },
      title:{},
      trigger:{
        default: 'click',
        type: String,
        validator(val){
          return ['click','hover'].includes(val)
        }
      },
      width:{},
      content:{
        type: String
      }
  },
  mounted(){
      this.setEvent()
  },
  methods:{
    setEvent(){
      if(this.trigger === 'click'){
          this.$refs.reference.addEventListener('click', this.clickHandler)
      }else if(this.trigger === 'hover'){
          this.hoverHandler()
      }
    },
    positionPopover(){
      this.$nextTick(()=>{
        let {top,left,bottom, right,width,height} = this.$refs.reference.getBoundingClientRect()
        document.body.appendChild(this.$refs.popover)
        let popoverStyle = this.$refs.popover.getBoundingClientRect()
       
        switch(this.placement){
          case 'top':
            this.$refs.popover.style.left =`${left+window.scrollX}px`;
            this.$refs.popover.style.top =`${top+window.scrollY}px`;
            this.$refs.popover.style.transform=`translateY(-${popoverStyle.height+10}px)`;
            break;
          case 'bottom':
            this.$refs.popover.style.left =`${left+window.scrollX}px`;
            this.$refs.popover.style.top =`${bottom+window.scrollY}px`;
            this.$refs.popover.style.transform=`translateY(10px)`;
            break;
          case 'left':
           this.$refs.popover.style.left =`${left+window.scrollX}px`;
            this.$refs.popover.style.top =`${top+window.scrollY}px`;
            this.$refs.popover.style.transform=`translateX(-${popoverStyle.width+10}px)`;
            break;
          case 'right':
            this.$refs.popover.style.left =`${right+window.scrollX}px`;
            this.$refs.popover.style.top =`${top+window.scrollY}px`;
            this.$refs.popover.style.transform=`translateX(10px)`;
            break;
          default:
            break;
        }
      })
    },
    addDocClickListener(){
        let bodyClickHandler = (e)=>{
          if(!(e.target === this.$refs.popover || this.$refs.popover.contains(e.target))){
            //   console.log('非popover区域，移除事件监听')
            this.visible = false
            document.removeEventListener('click',bodyClickHandler)
          }
        }
        
        setTimeout(()=>{
            document.addEventListener('click',bodyClickHandler)
        },0)
    },
    clickHandler(){
        this.visible=!this.visible
        if(this.visible){
            this.positionPopover()
            this.addDocClickListener()
            // console.log('每次点击显示popover 添加事件监听')
        }
    },
    hoverHandler(){
        this.$refs.reference.addEventListener('mouseover', 
          (e)=>{this.visible=true;
            this.positionPopover()}
          )
        this.$refs.reference.addEventListener('mouseout', (e)=>{this.visible=false})
    }
  }
};
</script>
<style lang="scss" scoped>
  .wrapper{
    display: inline-block;
    > div{
      display: inline-block;
    }
    
    .reference{
      border:1px solid red;
    }
  }
  .popover{
      border:1px solid green;
      position: absolute;
      padding:.5em 1em;
      background: #fff;
      z-index: 100;
    }
</style>


