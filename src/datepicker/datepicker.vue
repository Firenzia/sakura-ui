<template>
  <div>
      <s-popover
      class="datepicker-popover"
      placement="bottom"
      trigger="click"
      @open="showPanel"
      ref="popover"
      >
      <s-input slot="reference" :value="formattedValue" icon="calendar" @blur="setValueManually" ref="inputWrapper" class="datepicker-input"></s-input>

      <div class="date-panel" slot="content">
        <div class="date-panel-header">
          <span class="ico-wrapper" v-show="model === 'day'">
            <s-icon class="ico" name="left1" @click="setYear(-1)"></s-icon>
            <s-icon class="ico" name="left2" @click="setMonth(-1)"></s-icon>
          </span>
          <div>
            <span>
            <span class="label-year" @click="changeModel('year')">
              {{display.year}}年
             </span>
            <span class="label-month" @click="changeModel('month')">
              {{display.month+1}}月
            </span>
          </span>
          </div>
          <span class="ico-wrapper" v-show="model === 'day'">
            <s-icon class="ico" name="right1" @click="setMonth(1)"></s-icon>
            <s-icon class="ico" name="right2" @click="setYear(1)"></s-icon>
          </span>
        </div>

        <div class="date-panel-body">
          <div v-if="model === 'day'">
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
          </div>
          <!-- year -->
          <div v-show="model === 'year'">
            <div class="year-wrapper"  ref="yearWrapper">
               <div v-for="(item, index) in yearsList"
                  :key="index"
                  @click="selectYear(item)"
                 class="year-item"
                 :class="getYearClass(item)"
                 >{{item}}</div>
             </div>
          </div>
          <!-- month -->
          <div v-show="model==='month'">
             <div class="month-wrapper" ref="monthWrapper">
               <div v-for="(item, index) in monthInAYear"
                  :key="index"
                  @click="selectMonth(index)"
                 class="month-item"
                 :class="getMonthClass(index)">{{item}}月</div>
             </div>
          </div>
        </div>

        <div class="action" v-show="model==='day'">
          <s-button @click="setTodaySelected">today</s-button>
           <s-button style="margin-left:16px" @click="clear">clear</s-button>
        </div>
      </div>

    </s-popover>
  </div>
</template>
<script>
import Button from '../button/button'
import Icon from '../icon/icon'
import Input from '../form/input'
import Popover from '../notice/popover'

import helper from './helper'
// import { setInterval, setTimeout } from 'timers'
export default {
  name: 's-datepicker',
  props: {
    value: {
      type: Date,
      required: false
    },
    beginDay: {
      type: Number,
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
  components: {
    's-popover': Popover,
    's-input': Input,
    's-button': Button,
    's-icon': Icon
  },
  data () {
    return {
      yearsList: [],
      daysInAWeek: ['一', '二', '三', '四', '五', '六', '日'],
      monthInAYear: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      model: 'day',
      helper: helper,
      display: {
        year: (this.value && this.value.getFullYear()) || new Date().getFullYear(),
        month: (this.value && this.value.getMonth()) || new Date().getMonth()
      }
    }
  },
  computed: {
    formattedValue: {
      // return this.value instanceof Date ? helper.getFormatDate(this.value) : ''
      get: function () {
        return this.value instanceof Date ? helper.getFormatDate(this.value) : ''
      },
      set: function (newVal) {
      }
    },
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
    this.setYearsList()
    this.addYearClickListener()
  },
  methods: {
    addYearClickListener () {
      this.$nextTick(() => {
        let firstEle = this.$refs.yearWrapper.firstElementChild
        let lastEle = this.$refs.yearWrapper.lastElementChild

        firstEle.addEventListener('click', this.onClickFirstYear, false)
        lastEle.addEventListener('click', this.onClickLastYear, false)
      })
    },
    //  年面板点击前一年
    onClickFirstYear () {
      console.log('prev')
      let currentFirstYear = this.yearsList[0]
      this.yearsList = helper.getRange(currentFirstYear - 10, currentFirstYear + 1)
    },
    //  年面板点击后一年
    onClickLastYear () {
      console.log('next')
      let currentLastYear = this.yearsList[this.yearsList.length - 1]
      this.yearsList = helper.getRange(currentLastYear - 1, currentLastYear + 10)
    },
    setYearsList () {
      let lastYear = this.display.year + 1
      this.yearsList = helper.getRange(lastYear - 11, lastYear)
    },
    isDate (obj) {
      return obj instanceof Date
    },
    setValueManually ($event) {
      if (!helper.isValidDate($event)) {
        // this.formattedValue = this.isDate(this.value) ? helper.getFormatDate(this.value) : ''
        this.$refs.inputWrapper.$refs.input.value = this.isDate(this.value) ? helper.getFormatDate(this.value) : ''
        return
      }
      this.$emit('input', new Date($event))
    },
    getVisibleDate (i, j) {
      return this.visibleDays[i * 7 + j]
    },
    getYearClass (year) {
      return year === this.display.year ? 'selected-year' : ''
    },
    getMonthClass (index) {
      return index === this.display.month ? 'selected-month' : ''
    },
    getDateClass (date) {
      let classList = []

      if (helper.isInSameDay(date, new Date())) {
        classList.push('today')
      }

      if (this.value instanceof Date && helper.isInSameDay(date, this.value)) {
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

    // 年面板选择年 - 需要修改value和display
    selectYear (newY) {
      // 年面板不能选第一项和最后一项
      if (newY === this.yearsList[0] || newY === this.yearsList[this.yearsList.length - 1]) {
        return
      }
      this.display.year = newY // string转number
      if (this.value) {
        let newDate = helper.setNewYear(this.value, newY)
        this.$emit('input', newDate)
      }
      this.changeModel('day')
    },
    // 月面板选择月 - 需要修改value和display
    selectMonth (monthIndex) {
      this.display.month = monthIndex
      if (this.value) {
        let newDate = helper.setNewMonth(this.value, monthIndex)
        this.$emit('input', newDate)
      }
      this.changeModel('day')
    },
    //  日面板选择日 - 需要修改value
    selectDate (date) {
      this.$emit('input', date)
      this.closePanel()
    },
    // 日面板点击年前进后退按钮
    setYear (num) {
      this.display.year = this.display.year + num
    },
    // 日面板点击月前进后退按钮
    setMonth (num) {
      let month = this.display.month + num
      if (month < 0) {
        this.display.month = 11
      } else if (month > 11) {
        this.display.month = 0
      } else {
        this.display.month = month
      }
    },
    // 日面板选择今天按钮
    setTodaySelected () {
      this.$emit('input', new Date())
      this.closePanel()
    },
    // 日面板选择清除按钮
    clear () {
      this.$emit('input', '')
      this.closePanel()
    },
    // 改变当前模式
    changeModel (model) {
      this.model = model
    },
    // 打开 关闭 面板
    showPanel () {
      this.model = 'day'
      this.resetDisplayInfo() // 每次打开display year month 要重新设置
      this.$emit('showPanel', this) // 打开面板
    },
    resetDisplayInfo () {
      let displayDateObj = this.value instanceof Date ? this.value : new Date()
      let { year, month } = helper.getDateInfo(displayDateObj)
      this.display.year = year
      this.display.month = month
    },
    closePanel () {
      this.$refs.popover.close()
      this.$emit('closePanel', this)
    }

  }
}
</script>

<style lang="scss" scoped>
@import "theme";

.datepicker-popover{
  /deep/ .reference{
    border:none !important;
  }
  /deep/ .datepicker-input{
    position: relative;
    top:8px;
  }
}

.date-panel-header{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:.2em 0 .6em;
  width:224px;
  .label-year,.label-month{
    &:hover{
      color:$selected-color
    }
  }
  .ico-wrapper{
    &:first-child{
      margin-right: 26px;
    }
    &:last-child{
      margin-left: 26px;
    }
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
  .date-cell{
    display: inline-block;
    width: 32px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .date-panel-day{
    margin-bottom:6px;
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
  border-top:1px solid $border-color;
  padding:10px 0 4px;
  display: flex;
  justify-content: flex-end;
  /deep/ button{
    font-size:12px;
    height: 28px;
  }
}
// month panel
.month-wrapper{
  width: 220px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  .month-item{
    font-size: 14px;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    &:hover{
      color:$selected-color
    }
    &.selected-month{
       background:$selected-color;
       border-radius:4px;
       color:#fff;
    }
  }
}

// year panel
.year-wrapper{
  width: 220px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  .year-item{
    font-size: 14px;
    width: 60px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    &:first-child, &:last-child{
      color:#ccc
    }
    &.selected-year{
       background:$selected-color;
       border-radius:4px;
       color:#fff;
    }
    &:not(:first-child):not(:last-child){
      &:hover{
        color:$selected-color
      }
    }

  }
}
</style>
