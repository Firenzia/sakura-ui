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
  }
}

function getDateInfo (dateObj) {
  let [date, month, year] = [dateObj.getDate(), dateObj.getMonth(), dateObj.getFullYear()]
  return { date, month, year }
}
