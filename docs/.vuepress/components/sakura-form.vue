<template>
  <div>
     <sakura-card>
       <div class="form-wrapper">
        <s-form  :model.sync="user" class="form"  :rules="rules" ref="form">
          <span>请随意填写下方表单并提交，本例子含多种校验规则，详细可以展开代码查看~</span>
          <h3>登录</h3>
          <s-form-item label="姓名" name="name">
            <s-input type="text" v-model="user.name" placeholder="试一下输入Bingo"></s-input>
          </s-form-item>
          <s-form-item label="年龄"  name="age"  >
            <s-input type="number" v-model="user.age" placeholder="输入一个正常人的年龄哦"></s-input>
          </s-form-item>
          <s-form-item label="数量"  name="count">
            <s-input type="number" v-model="user.count"></s-input>
          </s-form-item>
          <div style="display:flex;justify-content:flex-end">
            <s-button class="ok" @click="submit" style="width:60px">提交</s-button>
            <s-button class="ok" @click="reset" style="width:60px;margin-left:30px">重置</s-button>
          </div>
        </s-form>
      </div>

      <template v-slot:code><pre v-highlightjs><code class="vue">{{code}}</code></pre></template>
    </sakura-card>

  </div>
</template>
<script>
import Form from "../../../src/form/form";
import FormItem from "../../../src/form/form-item";
import Button from  "../../../src/button/button";
import Input from  "../../../src/form/input";
import Vue from 'vue'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

export default {
  data () {
    var checkName = (val) => {
    if (val === 'Bingo') {
        throw new Error('被骗了哈哈哈~')
    } else { return true }
    }
    var checkAge = (val) => {
    if (parseInt(val) > 30) {
        throw new Error('不能超过30岁')
    } else { return true }
    }
      return {
        code: `
        <s-form  :model.sync="user" class="form"  :rules="rules" ref="form">
          <h3>登录</h3>
          <s-form-item label="姓名" name="name">
            <s-input type="text" v-model="user.name" placeholder="试一下输入Bingo"></s-input>
          </s-form-item>
          <s-form-item label="年龄"  name="age"  >
            <s-input type="number" v-model="user.age" placeholder="输入一个正常人的年龄哦"></s-input>
          </s-form-item>
          <s-form-item label="数量"  name="count">
            <s-input type="number" v-model="user.count"></s-input>
          </s-form-item>
          <div style="display:flex;justify-content:flex-end">
            <s-button class="ok" @click="submit" style="width:60px">提交</s-button>
            <s-button class="ok" @click="reset" style="width:60px;margin-left:30px">重置</s-button>
          </div>
        </s-form>
        export default {
          data () {
            var checkName = (val) => {
            if (val === 'Bingo') {
                throw new Error('被骗了哈哈哈~')
            } else { return true }
            }
            var checkAge = (val) => {
            if (parseInt(val) > 30) {
                throw new Error('不能超过30岁')
            } else { return true }
            }
              return {
                user: {
                  name: '',
                  age: '',
                  count:''
                },
                rules: {
                  name: [
                    { required: true, message: '请输入名字', trigger: 'blur' },
                    { lengthControl: [3, 5], message: '长度在 3 到 5 个字符', trigger: 'blur' },
                    { pattern: /^(\D)+$/, message: '内容不能有数字', trigger: 'blur' },
                    { validator: checkName, trigger: 'blur' }
                  ],
                  age: [
                    { required: true, message: '请输入年龄', trigger: 'blur' },
                    { lengthControl: [ null, 2 ], message: '长度不能超过2', trigger: 'blur' },
                    { pattern: /\d/, message: '必须是数字', trigger: 'blur' },
                    { validator: checkAge, trigger: 'blur' }
                  ],
                  count: [
                    { lengthControl: [ null, 4 ], message: '长度不能超过4', trigger: 'blur' }
                  ]
                }

              }
            }
    `.replace(/^ {8}/gm, "").trim(),
      user: {
        name: '',
        age: '',
        count:''
      },
      rules: {
        name: [
          { required: true, message: '请输入名字', trigger: 'blur' },
          { lengthControl: [3, 5], message: '长度在 3 到 5 个字符', trigger: 'blur' },
          { pattern: /^(\D)+$/, message: '内容不能有数字', trigger: 'blur' },
          { validator: checkName, trigger: 'blur' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
          { lengthControl: [ null, 2 ], message: '长度不能超过2', trigger: 'blur' },
          { pattern: /\d/, message: '必须是数字', trigger: 'blur' },
          { validator: checkAge, trigger: 'blur' }
        ],
        count: [
          { lengthControl: [ null, 4 ], message: '长度不能超过4', trigger: 'blur' }
        ]
      }

    }
  },
  components:{
    's-form': Form,
    's-form-item':FormItem,
    's-button': Button,
    's-input': Input
  },
  methods: {
    submit () {
      this.$refs.form.validate(this.user)
    },
    reset(){
      this.$refs.form.reset(this.user)
    }
  },
};
</script>
<style lang="scss" scoped>
.form {
    background: white;
    border-radius: 8px;
    &-wrapper {
      display: flex;
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

