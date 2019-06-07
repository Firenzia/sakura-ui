import Vue from 'vue'

export interface Collapse extends Vue {
  value: string | any[],
  accordion: boolean
}
