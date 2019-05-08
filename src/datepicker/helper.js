export default {
  getMonthFirstDay (dateObj) {
    let { month, year } = getDateInfo(dateObj)
    return new Date(year, month, 1)
  },
  getMonthLastDay (dateObj) {
    let { month, year } = getDateInfo(dateObj)
    return new Date(year, month + 1, 0)
  },
  getDay (dateObj) {
    return dateObj.getDay()
  },
  getRange (begin, end) {
    let arr = []
    for (let i = begin; i <= end; i++) {
      arr.push(i)
    }
    return arr
  },
  getFormatDate (dateObj, seperator = '-') {
    let { date, month, year } = getDateInfo(dateObj)
    month = normalizedForDoubleDigits(month + 1)
    date = normalizedForDoubleDigits(date)
    let arr = [year, month, date]
    return arr.join(seperator)
  },
  isInSameDay (dateA, dateB) {
    // 避免因为小时造成的用时间戳判断错误
    let { date: date1, month: month1, year: year1 } = getDateInfo(dateA)
    let { date: date2, month: month2, year: year2 } = getDateInfo(dateB)
    return date1 === date2 && month1 === month2 && year1 === year2
  },
  isValidDate (str) {
    if (/\d{4}-\d{2}-\d{2}/.test(str) === false) {
      return false
    }
    return !isNaN(new Date(str).getTime())
  },
  setNewMonth (dateObj, newMonth) {
    let { date, year } = getDateInfo(dateObj)
    return new Date(year, newMonth, date)
  },
  setNewYear (dateObj, newYear) {
    let { date, month } = getDateInfo(dateObj)
    return new Date(newYear, month, date)
  },
  getDateInfo

}
function normalizedForDoubleDigits (num) {
  // 将两位以下数字转化为2位数字符串
  if (typeof num !== 'number' || num > 99) {
    throw new Error('must give a number or number must less than 100')
  }

  return num < 10 ? `0${num}` : `${num}`
}
function getDateInfo (dateObj) {
  let [date, month, year] = [dateObj.getDate(), dateObj.getMonth(), dateObj.getFullYear()]
  return { date, month, year }
}
