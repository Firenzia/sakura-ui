<template>
  <div style="width:600px">
    <p>basic</p>
    <s-steps :active="active">
      <s-step title="步骤 1"  ></s-step>
      <s-step title="步骤 2" ></s-step>
      <s-step title="步骤 3"></s-step>
    </s-steps>

    <p>color</p>
    <s-steps :active="active" step-finish-color="lightblue">
      <s-step title="步骤 1"  ></s-step>
      <s-step title="步骤 2"  ></s-step>
      <s-step title="步骤 3" ></s-step>
    </s-steps>

    <p>vertical</p>
    <s-steps :active="active" step-finish-color="lightblue" direction="vertical" style="height:260px">
      <s-step title="步骤 1"  ></s-step>
      <s-step title="步骤 2"  ></s-step>
      <s-step title="步骤 3" ></s-step>
    </s-steps>

   <p>span step-finish-color description icon</p>
    <s-steps :active="active" space="200" step-finish-color="#BF827E">
      <s-step title="步骤 1" description="1992年我出生" icon="shamrock"></s-step>
      <s-step title="步骤 2" description="1999年我上学前班" icon="shamrock"></s-step>
      <s-step title="步骤 3" description="2005年我小学毕业" icon="shamrock"></s-step>
    </s-steps>

    

  <button @click="set">click</button>
  </div>
</template>
<script>

export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {
    set(){
      if(this.active===3){
        this.active = 0
        return
      }
      this.active++
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';

</style>
