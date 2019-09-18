import Vue, { VNode } from 'vue'

export interface TabBodySlots {
  default: VNode[],

  [key: string]: VNode[]
}

export interface TabBody extends Vue {
  $slots: TabBodySlots
}
