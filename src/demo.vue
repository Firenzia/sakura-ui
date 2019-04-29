<template>
  <div>

   <div class="form-wrapper">
    <form class="form" @submit.prevent="onSubmit">
      <h1>登录</h1>
      <s-form-item label="邮箱" :error="errors.name">
        <s-input type="text" v-model="user.name"></s-input>
      </s-form-item>
      <s-form-item label="密码" :error="errors.region">
        <s-input type="password" v-model="user.region"></s-input>
      </s-form-item>
      <div>
        <s-button class="ok" type="submit">提交</s-button>
      </div>
    </form>
   </div>

  </div>
</template>
<script>
import formMixin from './form-mixin'
let func = (val) => {
  if (val === 'Bingo') {
    console.log('throw')
    throw new Error('有问题阿')
  } else { return true }
}
export default {
  data () {
    return {

      selected: 'culture',
      user: {
        name: '',
        region: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /123/g, message: '格式错误', trigger: 'blur' },
          { validator: function (val) { if (val === 'Bingo') { return new Error('有问题阿') } else { return true } }, trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /123/g, message: '格式错误', trigger: 'blur' },
          { validator: func, trigger: 'blur' }
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
  //   let func = (val) => {
  //     if (val === 'Bingo') {
  //       console.log('throw')
  //       throw new Error('有问题阿')
  //     } else { return true }
  //   }
  //   let v = new Validator()
  //   let data = { name: '123', region: 'Bingo' }
  //   let rules = {
  //     name: [
  //       { required: true, message: '请输入活动名称', trigger: 'blur' },
  //       { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  //       { pattern: /123/g, message: '格式错误', trigger: 'blur' },
  //       { validator: function (val) { if (val === 'Bingo') { return new Error('有问题阿') } else { return true } }, trigger: 'blur' }
  //     ],
  //     region: [
  //       { required: true, message: '请输入活动名称', trigger: 'blur' },
  //       { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' },
  //       { pattern: /123/g, message: '格式错误', trigger: 'blur' },
  //       { validator: func, trigger: 'blur' }
  //     ]
  //   }
  //   let msg = v.validate(data, rules)
  //   console.log('msg', msg)
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
