<template>
    <div class="s-col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 's-col',
    props:{
      span:{
          type:[ Number, String]
      },
      offset:{
          type:[ Number, String]
      },
      npc:{

      },
      wpc:{

      }
    },
    methods:{
      createClass(deviceType, content){
          if(!content){
            return []
          }
          let {span, offset} = content
          if(deviceType === 'common'){
              return [span && `col-${span}`, offset && `offset-${offset}`]
          }
          return [`${deviceType}-col-${span}`, `${deviceType}-offset-${offset}`]
      }
    },
    computed:{
      colClasses(){
          let {span, offset ,npc, wpc} = this
          let comClass = this.createClass('common',{span,offset})
          let npcClass = this.createClass('npc',npc)
          let wpcClass = this.createClass('wpc',wpc)
          
          return [...comClass,...npcClass,...wpcClass] 
      },
      colStyle(){
          let {gutter} = this
          return `padding: 0 ${gutter/2}px`
      }
    },
    data(){
        return {
            gutter:0
        }
    }
}
</script>
<style lang="scss" scoped>
    .s-col{
        height: 40px;
        padding: 0 10px;
    }
    @for $i from 1 through 24 {
       $col-prefix: col-;
      .#{$col-prefix}#{$i} {width: 1/24*$i*100%}
    }
    @for $i from 1 through 24 {
       $offset-prefix: offset-;
      .#{$offset-prefix}#{$i} {margin-left: 1/24*$i*100%}
    }

    @media screen and (max-width: 1700px) {
         $npc-col-prefix:npc-col-;
         $npc-offset-prefix:npc-offset-;
        @for $i from 1 through 24 {
        .#{$npc-col-prefix}#{$i} {width: 1/24*$i*100%}
        }
        
        @for $i from 1 through 24 {
        .#{$npc-offset-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }

    @media screen and (max-width: 1200px) {
         $wpc-col-prefix:wpc-col-;
         $wpc-offset-prefix:wpc-offset-;
        @for $i from 1 through 24 {
        .#{$wpc-col-prefix}#{$i} {width: 1/24*$i*100%}
        }
        
        @for $i from 1 through 24 {
        .#{$wpc-offset-prefix}#{$i} {margin-left: 1/24*$i*100%}
        }
    }
</style>
