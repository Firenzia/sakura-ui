<template>
  <form action="" @submit.prevent="$emit('submit',$event)">
    <slot></slot>
  </form>
</template>
<script>
import Validate from './validate'
export default {
  name: 's-form',
  data () {
    return {
      errors: {},
      validator: new Validate(),
      eventTriggerModel: {},
      requiredFieldsList: []
    }
  },
  props: {
    rules: {
      type: Object
    },
    model: {
      type: Object
    }
  },
  mounted () {
    this.bindEvent()
    this.setRequiredLabel()
  },
  methods: {
    findReqiredFields () {
      for (let item of Object.entries(this.rules)) {
        for (let rule of item[1]) {
          let keys = Object.keys(rule)
          if (keys.includes('required') && rule['required']) {
            this.requiredFieldsList.push(item[0])
            break
          }
        }
      }
    },
    setRequiredLabel () {
      this.findReqiredFields()
      this.$children.forEach(vm => {
        if (this.requiredFieldsList.includes(vm.name)) {
          vm.required = true
        }
      })
    },
    bindEvent () {
      this.$children.forEach(vm => {
        let name = vm.$props.name
        vm.$children.forEach(input => {
          input.$on('blur', () => {
            let obj = { [name]: this.model[name] }
            this.eventTriggerModel = Object.assign(this.eventTriggerModel, obj)
            this.validate(this.eventTriggerModel)
          })
        })
      })
    },
    validate (formData) {
      const rules = this.rules
      const v = this.validator
      this.errors = v.validate(formData, rules)
      this.boardcast()
    },
    reset (formData) {
      let copy = { ...formData }
      Object.keys(copy).forEach(x => { copy[x] = '' })
      this.errors = {}
      this.boardcast()
    },
    boardcast () {
      let totalErrors = { ...this.errors }
      this.$children.forEach(vm => {
        vm.error = totalErrors[vm.$props.name]
      })
    }
  }
}
</script>
