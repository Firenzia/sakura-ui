import Vue from 'vue'

export interface CascaderItem extends Vue {
  options?: any[],
  level?: number,
  selected?: any[]
}
