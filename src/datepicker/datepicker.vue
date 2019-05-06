<template>
  <div>
      <s-popover
      placement="bottom"
      trigger="click"
      >
      <div class="date-panel" slot="content">
        <div class="date-panel-header">
          <span >&lt;&lt;</span>
          <span>&lt;</span>
          <span @click="changeModel">{{display.year}}年{{display.month+1}}月</span>
          <span >&gt;&gt;</span>
          <span>&gt;</span>
        </div>

        <div class="date-panel-body">
          <template v-if="model === 'day'">
            <div class="date-panel-day">
              <span v-for="(item, index) in daysInAWeek" :key="index" class="date-cell">{{item}}</span>
            </div>
           <div class="date-panel-date" v-for="(item1, index1) in helper.getRange(1,6)" :key="index1">
             <span v-for="(item2, index2) in helper.getRange(1,7)" :key="index2"
               class="date-cell"
               :class="getDateClass(visibleDays[index1*7+index2])">
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
      </div>

      <s-input slot="reference">点击出现日期</s-input>
    </s-popover>
  </div>
</template>
<script>
import helper from './helper'
export default {
  name: 's-datepicker',
  props: {
    beginDay: 0 || 1, // todo
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
      daysInAWeek: ['一', '二', '三', '四', '五', '六', '日'],
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
    getDateClass (date) {
      switch (date.getMonth()) {
        case this.display.month:
          return 'available-month'
        case this.display.month - 1:
          return 'prev-month'
        case this.display.month + 1:
          return 'next-month'
        default:
          break
      }
    },
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
<style>
.popover{
  max-width: none;
}
</style>

<style lang="scss" scoped>

.date-panel-body{
  .date-cell{
    display: inline-block;
    width: 32px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .date-panel-day{
    border-bottom:1px solid grey;
  }
  .date-panel-date {
    span{
      // display: flex;
      &.available-month{
        color: black;
      }
      &.prev-month,&.next-month{
        color: grey;
      }
    }

  }
}
</style>
