---
title: 'Navigation 导航'
sidebarDepth: 2
---

## Tabs 标签面板
<ClientOnly>
  <sakura-tab/>
<font size=5>Tab Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
| v-model/value| 绑定值 | string | - | - |
| tabPosition| 选项卡所在位置 | string | left, top | top |

<font size=5>TabItem Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|name| 选项卡名称 | string | - | - |
|disabled| 面板名称 | boolean | - | false |

<font size=5>TabPane Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|name| 面板名称 | string | - | - |

</ClientOnly>

## Steps 步骤条
<ClientOnly>
  <sakura-steps/>

<font size=5>Steps Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|active| 设置当前激活步骤 | number | - | 0 |
|direction| 步骤条显示方向 | string | horizontal, vertical | horizontal|
|step-finish-color| 自定义完成步骤显示颜色 | string | - | 主题色，#d4b1b5 |
|span| 	每个step的间距, 单位：px | number | - | - |

<font size=5>Step Attributes</font>
| 参数| 说明 | 类型 | 可选值 | 默认值 |
| :------ | ------ | ------ | ------ | ------ |
|title| 标题 | string | - | - |
|description| 描述 | string | - | - |
|icon| 图标名称 | string | - | - |
</ClientOnly>


