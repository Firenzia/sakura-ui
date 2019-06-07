import Vue from 'vue'

export interface Form extends Vue {
  rules: { [key: string]: any },
  model: { [key: string]: any }
}
