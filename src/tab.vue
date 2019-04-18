<template>
    <div class="s-tab" :class="`tab-${tabPosition}`">
       <slot></slot> 
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    name:"s-tab",
    props:{
        selected:{
            type: String
        },
        tabPosition:{
            default: 'top',
            validator(val){
                return ['top','left'].includes(val)
            }
        },
        test:{}
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    provide(){
        return {eventBus: this.eventBus}
    },
    mounted(){
        this.eventBus.$emit("update:selected", this.selected)
        if(this.tabPosition === 'left'){
            this.$children.forEach(child=>{
              child.align = child.$options.name === 's-tab-head'?'left':''
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .s-tab{
        display: flex;
       
        &.tab-top{
            flex-direction: column;
        }
        &.tap-left{
             flex-direction: row;
        }
    }
</style>


