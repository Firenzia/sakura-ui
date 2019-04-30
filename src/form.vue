<template>
  <form action="" @submit.prevent="$emit('submit',$event)">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: 's-form',
  props: {
    rules: {
      type: Object
    }
  }
}
</script>
