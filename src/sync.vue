<template>
    <div>
        <div>{{number}}</div>
        <button @click="changeNumber">change</button>
    </div>
</template>
<script>
export default {
  name: 's-sync',
  props: ['number'],
  methods: {
    changeNumber () {
      let copy = this.number
      this.$emit('update:number', copy + 1)
    }
  }
}
</script>
