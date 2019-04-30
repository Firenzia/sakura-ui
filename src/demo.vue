<template>
  <div>
   <div class="form-wrapper">
    <s-form class="form" @submit.prevent="onSubmit" :rules="rules">
      <h1>登录</h1>
      <s-form-item label="姓名" :error="errors.name" name="name">
        <s-input type="text" v-model="user.name"  @blur="validate(user)"></s-input>
      </s-form-item>
      <s-form-item label="年龄" :error="errors.age" name="age">
        <s-input type="password" v-model="user.age"></s-input>
      </s-form-item>
      <div>
        <s-button class="ok" type="submit">提交</s-button>
      </div>
    </s-form>
   </div>

  </div>
</template>
<script>
import formMixin from './form-mixin'

export default {
  data () {
    var checkName = (val) => {
      if (val === 'Bingo') {
        throw new Error('有问题阿')
      } else { return true }
    }
    var checkAge = (val) => {
      if (parseInt(val) > 30) {
        throw new Error('不能超过30岁')
      } else { return true }
    }
    return {

      selected: 'culture',
      user: {
        name: '',
        age: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { lengthControl: [3, 5], message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /(\D)+/, message: '格式错误', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { lengthControl: [ null, 2 ], message: '长度不能超过2', trigger: 'blur' },
          { pattern: /\d/, message: '必须是数字', trigger: 'blur' },
          { validator: checkAge, trigger: 'blur' }
        ]
      }

    }
  },
  mixins: [formMixin],
  methods: {
    onSubmit () {
      this.validate(this.user)
      console.log(this.errors)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss">
 @import './static/scss/global.scss';
.form {
    background: white;
    padding: 24px;
    border-radius: 8px;
    margin-top: 36px;
    min-height: 60vh;
    &-wrapper {
      display: flex;justify-content: center;
    }
    .controls {
    }
    .ok {
      display: block;
      width: 100%;
      margin-top: 24px;
    }
  }
</style>
