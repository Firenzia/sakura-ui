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
          <span @click="changeModel">{{display.year}}年{{display.month+1}}月</span>
          <span >&gt;&gt;</span>
          <span>&gt;</span>
        </div>

        <div class="panel-body">
          <template v-if="model === 'day'">
            <div v-for="(item1, index1) in helper.getRange(1,6)" :key="index1">
             <span v-for="(item2, index2) in helper.getRange(1,7)" :key="index2">
                {{visibleDays[index1*7+index2].getDate()}}
             </span>
          </div>
          </template>
          <template v-else-if="model === 'month'">
             <select name="year" id="" @change="changeYear" v-model="display.year">
                <option :value="item" v-for="(item, index) in shownYears" :key="index">{{item}}</option>
             </select>
               <select name="year" id=""  @change="changeMonth" v-model="display.month">
                <option :value="item" v-for="(item, index) in helper.getRange(0,11)" :key="index">{{item+1}}</option>
             </select>
          </template>
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
  props: {
    range: {
      type: Array,
      default () { return [new Date(2008, 0, 1), new Date(2019, 4, 9)] },
      validator () { // todo 字符串或者date类型
        return true
      }
    }
  },
  data () {
    return {
      model: 'day',
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
    },
    shownYears () {
      let yearRange = this.range.map(item => {
        return helper.getDateInfo(item).year
      })
      return helper.getRange(...yearRange)
    }
  },
  mounted () {

  },
  methods: {
    changeYear (e) {
      this.display.year = e.target.value - 0 // string转number
    },
    changeMonth (e) {
      this.display.month = e.target.value - 0
    },
    changeModel () {
      this.model = this.model === 'day' ? 'month' : 'day'
    }
  }
}
</script>
