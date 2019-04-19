<template>
    <div class="toast-wrapper">
        <slot>{{message}}</slot>
        <div v-if="closeBtn">
            <span @click="userCustClsoe">{{closeBtn.btnText}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        duration:{
            type: Number,
            default: 2000
        },
        message:{
            type: String
        },
        closeBtn:{
            validator(val){
                let flag = true
                for(let key of Object.keys(val)){
                    if(!['btnText','callback'].includes(key)){
                        flag= false
                        break;
                    }
                }
                return flag
            }
        },
    },
    mounted(){
        // 默认3s关闭
       if(!this.closeBtn){
           setTimeout(()=>{
               this.close()
            },this.duration)
       }  
    },
    methods:{
        close(){
            this.$el.remove()
            this.$destroy()
        },
        userCustClsoe(){
            this.close()
            this.closeBtn.callback(this)
        },
        componentMethod(){
            console.log('我是组件方法')
        }
    }
}
</script>
<style lang="scss" scoped>
    .toast-wrapper{
        position: fixed;
        top:40px;
        left:50%;
        transform: translateX(-50%);
        border:1px solid lightpink;
        padding:.3em 1em
    }
</style>


