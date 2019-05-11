---
title: 'Other 其他'
sidebarDepth: 2
---
## Sticky 粘滞组件
<ClientOnly>
  <sakura-sticky/>
<font size=5>Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| offset-top| 发生粘滞条件距离浏览器视窗垂直距离, 单位px | number |- | 0 |

</ClientOnly>

## Collapse 折叠面板
<ClientOnly>
  <sakura-collapse/>
<font size=5>Collapse Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model| 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)|string/array |- | - |
| accordion| 是否手风琴模式|boolean|- | false |

<font size=5>CollapseItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name|唯一标志符 | string |- | -|
| title|面板标题 | string |- | - |
</ClientOnly>

## Slider 轮播
<ClientOnly>
  <sakura-slide/>

<font size=5>Slide Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值|string|- | - |
| autoPlay| 是否自动播放|boolean|- | true |
|duration|是否自动播放,单位：ms|number|-|5000ms|

<font size=5>SlideItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| name|唯一标志符 | string |- | -|
</ClientOnly>


