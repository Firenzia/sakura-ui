<template>
  <div>
    <sakura-card>
      <div class="ico-list">
        <div v-for="(item, index) in list" class="ico-wrapper">
          <s-icon :name="item" class="ico" :color="selectList.includes(item) ?'#E6A4A5':''"></s-icon>
          <div class="ico-name">{{item}}</div>
        </div>
      </div>
      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>
  </div>
</template>
<script>
import icon from '../../../src/icon/icon'
export default {
  data(){
    return {
      selectList:['flower','star-fill','brush-fill','home','gift-fill','movie'],
      list:['clover','shamrock','flower','ice-cream','icecream','food','movie','payment',
            'nickname','call','visible','incoming_call','previous','selection','protect','conversation',
             'privac_open','favoriteslist','home','musiclist','cancel','edit','audio','QQ-circle-fill',
             'wechat-fill','apple-fill','apple','phone-fill','fire','heart','linechart','down-circle',
            'warn-fill','star-fill','star','gift-fill','discovery','alipay','warning','remind',
             'label','clock','camera','brush-fill','gps-fill','error','loading','right',
              'setting','left','download','thumbup','tick','false'
           ],
      code: `
         <s-icon name="shamrock" color="orange"></s-icon>
      `.replace(/^\s*/gm, '').trim()
    }
  },
  components:{
      's-icon':icon
  }
}
</script>
<style lang="scss" scoped>
  .ico-list{
    display: flex;
    flex-wrap: wrap;
  }
  .ico-wrapper{
    width:140px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid #ccc;
     &:hover{
        color:#B74D55;
        border:1px solid #B74D55;
        box-shadow: 0 0 3px 0 #B74D55;
      }
    .ico{
      width:2.4em !important;
      height: 2.4em !important;
     
    }
    .ico-name{
      margin-top:20px;
    }
  }

</style>

