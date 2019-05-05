class Validator {
  static add (name, fn) {
    Validator.prototype[name] = fn
  }

  validate (formData, rules) {
    let errs = {}
    for (let item of Object.entries(rules)) { // [[name,[namerule]]]
      let checkName = item[0]
      if (formData[checkName] === undefined) continue
      for (let rule of item[1]) {
        let validatorKey = Object.keys(rule).filter(x => ['lengthControl', 'pattern', 'validator', 'required'].includes(x))[0]
        let res = this[validatorKey](formData[checkName], rule)
        if (!res) {
          console.log(checkName, 'checked failed in', validatorKey)
          errs[checkName] = rule.message
          break
        }
        if (typeof res === 'string') {
          console.log(checkName, 'checked failed in', validatorKey)
          errs[checkName] = res
          break
        }
      }
    }
    return errs
  }

  required (val) {
    return !(val === undefined || val === '')
  }

  lengthControl (val, rule) {
    let flag = true
    let dataLength = val.toString().length
    let [min, max] = rule.lengthControl
    if (min && dataLength < min) { flag = false }
    if (max && dataLength > max) { flag = false }
    return flag
  }

  max (val, rule) {
    return val.toString().length <= rule.max
  }

  pattern (val, rule) {
    let res = rule.pattern.test(val)
    return res
  }

  validator (val, rule) {
    try {
      return rule.validator.call(this, val)
    } catch (e) {
      return e.message
    }
  }
}
export default Validator
