import Vue from 'vue'

export interface Steps extends Vue {
  active?: number,
  space: number | string,
  stepFinishColor: string,
  direction: 'vertical' | 'horizontal'
}
