<template>
  <div>
      <s-popover
      placement="bottom"
      trigger="click"
      >
      <template v-slot:content>
        <div class="panel-header">
          <span >&lt;&lt;</span>
          <span>&lt;</span>
          <span>{{display.year}}年</span>
          <span>{{display.month+1}}月</span>
          <span >&gt;&gt;</span>
          <span>&gt;</span>
        </div>

        <div class="panel-body">
          <div v-for="(item1, index1) in helper.getRange(1,6)" :key="index1">
             <span v-for="(item2, index2) in helper.getRange(1,7)" :key="index2">
                {{visibleDays[index1*7+index2].getDate()}}
             </span>
          </div>
        </div>

        <div class="action">
          <span>today</span>
        </div>
      </template>

      <s-input slot="reference">点击出现日期</s-input>
    </s-popover>
  </div>
</template>
<script>
import helper from './helper'
export default {
  name: 's-datepicker',
  data () {
    return {
      helper: helper,
      display: {
        year: 2019,
        month: 4
      }
    }
  },
  computed: {
    visibleDays () {
      let { year, month } = this.display
      let defaultObj = new Date(year, month, 28)
      var curMonthFirstDay = helper.getMonthFirstDay(defaultObj)
      var curMonthFirstDayDay = helper.getDay(curMonthFirstDay) === 0 ? 7 : helper.getDay(curMonthFirstDay)
      let x = curMonthFirstDayDay - 1 // 前面需要补多少位
      var arr = []
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(curMonthFirstDay.getTime() + (-x + i) * 3600 * 24 * 1000))
      }
      return arr
    }
  },
  mounted () {

  }
}
</script>
