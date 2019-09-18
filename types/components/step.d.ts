import Vue from 'vue'

export interface Step extends Vue {
  title: string,
  description: string,
  icon: string
}
