import Vue from 'vue'

export interface Col extends Vue {
  span?: number | string,
  offset?: number | string,
  xs: { [key: string]: any },
  sm: { [key: string]: any },
  md: { [key: string]: any },
  lg: { [key: string]: any },
  xl: { [key: string]: any }
}
