---
title: 'Notice 通知'
sidebarDepth: 2
---

## Toast  消息
<ClientOnly>
  <sakura-toast/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| message| 消息提示文本 | string | - | - |
| duration| 消息出现时长 | number，单位：ms | - | 6000ms |
| enableHtml	| 允许插入html |boolean | - | false |
| closeBtn| 自定义关闭按钮文案和回调，有效的key包括”btnTex'(value type:String),'callback'(value type: Function)} |object | - | - |
| position| 消息提示出现位置 | string | top,middle,bottom | top |
</ClientOnly>


## Modal 模态框
<ClientOnly>
<sakura-modal/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| title| 模态框标题 | string | - | - |
| content| 模态框内容 | string /html片段(需要设置enableContentHtml是true)| - | - |
| enableContentHtml	| 允许插入html作为内容 | boolean | - | false |
| btnConfig| 自定义关闭按钮文案和回调，有效的key包括不同类型按钮文案和按钮点击回调，如下'confrimCallback', 'cancelCallback', 'cancelModalCallback', 'confirmText', 'cancelText')} |object | - | - |


</ClientOnly>


## Popover 弹出框
<ClientOnly>
  <sakura-popover/>

<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| content| 消息提示文本 | string | - | - |
| placement| 出现位置 | string | 消息提示文本| top|
| trigger| 触发方式| string | click, hover| click|
</ClientOnly>