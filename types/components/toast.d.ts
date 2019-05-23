import Vue from 'vue'

export interface Toast extends Vue {
  duration?: number,
  message: string,
  enableHtml?: boolean,
  closeBtn: { [key: string]: any },
  position: 'top' | 'middle' | 'bottom',
  type: 'info' | 'warning' | 'success' | 'error'
}
