import Vue from 'vue'

export interface Slide extends Vue {
  value: string,
  autoPlay?: boolean,
  duration?: number
}
