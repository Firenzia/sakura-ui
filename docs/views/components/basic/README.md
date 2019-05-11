---
title: 'Basic 基础'
sidebarDepth: 2
---
## Icon 图标
<ClientOnly>
  <sakura-icon/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name | 图标名称 | string |- | - |
| color | 图标颜色, 支持常见颜色和十六进制颜色 | string |- | - |

</ClientOnly>



## Button 按钮
<ClientOnly>
  <sakura-button/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| type | 按钮类型 | string |primary, info, success, warning, danger | - |
| disabled | 按钮是否禁用 | boolean |- | false |
| icon | 按钮上图标名称 | string |- | - |
| icon-position | 图标在按钮的左右位置 | string|left, right  | - |
| loading | 显示加载中图标 | boolean |- | false |

</ClientOnly>


## Layout 布局
<ClientOnly>
  <sakura-layout/>
<font size=5>Row Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| gutter |栅格间隔 | number,单位px |- |- |
| align | flex 布局下的水平排列方式 | string |center, left, right | left |

<font size=5>Col Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| span | 栅格占据的列数 | number |- |24 |
| offset | 栅格左侧的间隔格数 | number |- | 0 |
| xs | 小于576px 响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})	 |- | - |
| sm |介于576px和768px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| md |介于768x和992px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| lg |介于992px和1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
| xl |大于1200px的响应式栅格数或者栅格属性对象 | object (例如： {span: 4, offset: 4})|-  | - |
</ClientOnly>

## Container 容器
<ClientOnly>
  <sakura-container/>

<font size=5>Header Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| height | header高度，单位px | Number/String |- | 60 |

<font size=5>Sider Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| width | sider宽度，单位px | Number/String |- | 300 |

<font size=5>Footer Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| height | footer高度，单位px | Number/String |- | 60 |
</ClientOnly>