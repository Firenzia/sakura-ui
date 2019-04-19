<template>
    <div class="s-tab-item" @click="changeSelect" :class="{active,disabled}">
        <template class="icon">
            <slot name="icon"></slot>
        </template>
       <div :class="{hasIcon}">
        <slot></slot>
        </div> 
       
    </div>
</template>
<script>
export default {
    name:"s-tab-item",
    inject:['eventBus'],
    props:{
        name:{
          type:String
        },
        disabled:{
          type: Boolean
        }
    },
    data(){
        return {
            active:false,
            hasIcon: false,
        }
    },
    created(){
        this.eventBus.$on('update:selected', (val)=>{
            val===this.name && console.log(`item ${this.name}被选中`)
            this.active = val===this.name
        })
    },
    mounted(){
        this.$children.forEach(child=>{
         this.hasIcon = child.$options.name === 's-icon'
        })
    },
    methods:{
        changeSelect(){
            if(this.disabled) return
            this.eventBus.$emit('update:selected',this.name)
        }
    }
}
</script>
<style lang="scss" scoped>
    .s-tab-item{
        display: flex;
        // border:1px solid #ccc;
        align-items: center;
        justify-content: flex-start;
        padding:.5em 2em;
        
        &.active{
            background: lightblue
        }
        &.disabled{
            cursor: not-allowed;
        }
        .hasIcon{
            margin-left:10px;
        }
    }
</style>