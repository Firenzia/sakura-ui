import Vue from 'vue'

export interface Datepicker extends Vue {
  value?: Date,
  beginDay: number,
  range: any[]
}
