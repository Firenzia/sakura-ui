import Vue from 'vue'

export interface Modal extends Vue {
  title?: string,
  content?: string,
  btnConfig: { [key: string]: any },
  enableContentHtml: boolean
}
