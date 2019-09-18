import Vue, { VNode } from 'vue'

export interface Slots {
  default: VNode[],

  [key: string]: VNode[]
}

export interface Tab extends Vue {
  $slots: Slots
}
