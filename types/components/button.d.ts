import Vue from 'vue'

export interface Button extends Vue {
  type: 'primary' | 'info' | 'success' | 'warning' | 'danger',
  disabled?: boolean,
  loading?: boolean,
  icon?: boolean,
  iconPosition: 'left' | 'right'
}
