import Vue from 'vue'

export interface Row extends Vue {
  gutter: number | string,
  align: 'center' | 'left' | 'right'
}
