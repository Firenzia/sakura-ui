---
title: 'Form 表单'
sidebarDepth: 2
---
## Input 输入框
<ClientOnly>
  <sakura-input/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| icon | 图标名称 | string |- | - |
| value/v-model|绑定值 | string |- | - |
| disabled|原生属性，是否只读 | boolean |- | false |
| readonly|原生属性，是否只读 | boolean |- | false |
| error|错误提示 | string |- | - |
| placeholder|输入框占位文本 | string |- | - |
</ClientOnly>

## Form 表单
<ClientOnly>
  <sakura-form/>
<font size=5>Form Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| model| 表单数据对象 | object |- | - |
| rules|表单验证规则, 支持字段长度/字段正则/必要字段/自定义规则校验 | object |- | - |

<font size=5>FormItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| label |标签文本 | string |- | - |
| name |表单域 model 字段 | string |- | - |
</ClientOnly>

## datepicker 日期选择器
<ClientOnly>
  <sakura-datepicker/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值 | Date |- | - |
| beginDay|一周起始从周几开始 | number|0,1 | 1 |


<font size=5>Events</font>
| 事件名称| 说明 | 回调参数 | 
| :------ | ------ | ------ |
| openPanel| 打开日期面板触发 | 组件实例 |
| closePane| 关闭日期面板触发 | 组件实例|
</ClientOnly>


## Cascader 级联选择器
<ClientOnly>
  <sakura-cascader/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| value / v-model| 选中项绑定值 | array |- | - |
| options|可选项数据源，键名可通过 props 属性配置 | array| - | - |
</ClientOnly>
