class Validator {
  static add (name, fn) {
    Validator.prototype[name] = fn
  }

  validate (formData, rules) {
    let errs = {}
    for (let item of Object.entries(rules)) { // [[name,[namerule]]]
      let checkName = item[0]
      for (let rule of item[1]) {
        let validatorKeysList = Object.keys(rule).filter(x => ['min', 'max', 'pattern', 'validator', 'required'].includes(x))
        for (let key of validatorKeysList) {
          let res = this[key](formData[checkName], rule)
          if (!res) {
            console.log(checkName, key)
            errs[checkName] = rule.message
            break
          }
          if (typeof res === 'string') {
            errs[checkName] = res
            break
          }
        }
      }
    }
    return errs
  }

  required (val) {
    return !(val === undefined || val === '')
  }

  min (val, rule) {
    return val.toString().length >= rule.min
  }

  max (val, rule) {
    return val.toString().length <= rule.max
  }

  pattern (val, rule) {
    console.log('pattern', rule.pattern.test(val), rule.pattern, val)
    return rule.pattern.test(val)
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
