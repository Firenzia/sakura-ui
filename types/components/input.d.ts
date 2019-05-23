import Vue from 'vue'

export interface Input extends Vue {
  icon: string,
  value: string,
  disabled?: boolean,
  readonly?: boolean,
  error: string,
  placeholder: string
}
