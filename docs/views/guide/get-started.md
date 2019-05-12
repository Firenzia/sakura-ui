---
title: '快速上手'
---
# 快速上手

```vue
<template>
  <div id="app">
    <s-button type="primary">点击报名</s-button>
  </div>
</template>

<script>
import {Button} from 'heian-sakura-ui'
import 'heian-sakura-ui/dist/sakura.css'


export default {
  name: 'app',
  components: {
    's-button':Button
  }
}
</script>

```
<ClientOnly>
  <sakura-img/>
</ClientOnly>