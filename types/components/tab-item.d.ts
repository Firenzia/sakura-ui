import Vue, { VNode } from 'vue'

export interface TabItemSlots {
  default: VNode[],
  icon: VNode[],

  [key: string]: VNode[]
}

export interface TabItem extends Vue {
  $slots: TabItemSlots
}
