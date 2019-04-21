<template>
      <div>
        <s-icon name="setting"></s-icon>

         <pre class="codePre">
          <code>{{code}}</code>
        </pre> 
    
      </div>
</template>
<script>
import icon from '../../../src/icon'
export default {
  data(){
    return {
      code: `
        <s-icon name="setting"></s-icon>
    `.replace(/^ {8}/gm, '').trim()
    }
  },
  components:{
      's-icon':icon
  }
}
</script>
<style lang="scss" scoped>

</style>

