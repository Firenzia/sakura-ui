<template>
  <div>
      <s-popover
      placement="bottom"
      trigger="click"
      >
      <s-input slot="reference" :value="value" icon="calendar" @input="setValue"></s-input>

      <div class="date-panel" slot="content">
        <div class="date-panel-header">
          <span class="ico-wrapper">
            <s-icon class="ico" name="left1" @click="setYear(-1)"></s-icon>
            <s-icon class="ico" name="left2" @click="setMonth(-1)"></s-icon>
          </span>
          <span @click="changeModel">{{display.year}}年{{display.month+1}}月</span>
          <span class="ico-wrapper">
            <s-icon class="ico" name="right1" @click="setMonth(1)"></s-icon>
            <s-icon class="ico" name="right2" @click="setYear(1)"></s-icon>
          </span>
        </div>

        <div class="date-panel-body">
          <template v-if="model === 'day'">
            <div class="date-panel-day">
              <span v-for="(item, index) in daysInAWeek" :key="index" class="date-cell">{{item}}</span>
            </div>
           <div class="date-panel-date" v-for="(item1, i) in helper.getRange(1,6)" :key="i">
             <span v-for="(item2, j) in helper.getRange(1,7)" :key="j"
               @click="selectDate(getVisibleDate (i, j))"
               class="date-cell"
               :class="getDateClass(visibleDays[i*7+j])">
                {{getVisibleDate (i, j).getDate()}}
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
          <s-button>today</s-button>
           <s-button style="margin-left:16px">clear</s-button>
        </div>
      </div>

    </s-popover>
  </div>
</template>
<script>
import helper from './helper'
export default {
  name: 's-datepicker',
  props: {
    value: {
      type: String,
      required: false
    },
    beginDay: {
      required: false,
      validator (val) {
        return [0, 1].includes(val)
      }
    },
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
        year: new Date().getFullYear(),
        month: new Date().getMonth()
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
    this.checkValue()
  },
  methods: {
    setValue ($event) {
      // console.log(e, e.target)
      this.$emit('input', $event)
    },
    getVisibleDate (i, j) {
      return this.visibleDays[i * 7 + j]
    },
    checkValue () {
    },
    getDateClass (date) {
      let classList = []

      if (helper.isInSameDay(date, new Date())) {
        classList.push('today')
      }

      if (helper.isInSameDay(date, new Date(this.value))) {
        classList.push('selected-date')
      }
      switch (date.getMonth()) {
        case this.display.month:
          classList.push('available-month')
          break
        case this.display.month - 1:
          classList.push('prev-month')
          break
        case this.display.month + 1:
          classList.push('next-month')
          break
        default:
          break
      }
      return classList.join(' ')
    },
    setYear (num) {
      this.display.year = this.display.year + num
    },
    setMonth (num) {
      this.display.month = this.display.month + num
    },
    changeYear (e) {
      this.display.year = e.target.value - 0 // string转number
    },
    changeMonth (e) {
      this.display.month = e.target.value - 0
    },
    changeModel () {
      this.model = this.model === 'day' ? 'month' : 'day'
    },
    selectDate (date) {
      this.$emit('input', helper.getFormatDate(date))
    }
  }
}
</script>

<style lang="scss" scoped>
$selected-color:lightseagreen;
.date-panel-header{
  display: flex;
  justify-content: space-between;
  padding:.2em 0 .6em;
  width:224px;
  .ico-wrapper{
    font-size:.7em;
    font-weight:bold;
    .ico{
       &:nth-child(1){
         margin-right: 14px;
       }
       &:hover{
         color: $selected-color;
       }
    }
  }
}

.date-panel-body{
  border-bottom:1px solid #ccc;
  .date-cell{
    display: inline-block;
    width: 32px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .date-panel-day{
    border-bottom:1px solid #ccc;
    font-size:14px;
  }
  .date-panel-date {
    span{
      font-size:12px;

      &.available-month{
        color: black;
      }
      &.prev-month,&.next-month{
        color: grey;
      }
      &.today{
        color:$selected-color;
        border:1px solid $selected-color;
      }
      &:hover{
        background:$selected-color;
        opacity: .5;
        color:#fff;
      }
      &.selected-date{
         background:$selected-color;
         color:#fff !important;
      }
    }

  }
}
.action{
  margin:10px 0;
  display: flex;
  justify-content: flex-end;

}
</style>
