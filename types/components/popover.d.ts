import Vue from 'vue'

export interface Popover extends Vue {
  placement?: 'top' | 'bottom' | 'left' | 'right',
  trigger?: 'click' | 'hover',
  content: string
}
