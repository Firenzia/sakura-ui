import Vue, { VNode } from 'vue'

export interface TabHeadSlots {
  default: VNode[],

  [key: string]: VNode[]
}

export interface TabHead extends Vue {
  $slots: TabHeadSlots
}
