---
title: 'Basic'
sidebarDepth: 2
---
## Icon 图标
<ClientOnly>
  <sakura-icon/>
</ClientOnly>



## Button 按钮
<ClientOnly>
  <sakura-button/>
```vue
<s-button>default</s-button>
<s-button type="primary">primary</s-button>
<s-button type="info">info</s-button>
<s-button type="success">success</s-button>
<s-button type="warning">warning</s-button>
<s-button type="danger">danger</s-button>
export default {
  data(){
    return {
      code: ''
    }
  },
  components:{
      's-button':btn,
      's-button-group':btnGroup
  }
}
```
</ClientOnly>


## Layout 布局
<ClientOnly>
  <sakura-layout/>
</ClientOnly>

## Container 容器
<ClientOnly>
  <sakura-container/>
</ClientOnly>