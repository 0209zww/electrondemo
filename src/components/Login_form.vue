<template>
  <div class=" zczh">
    <el-form ref="form" :rules="rules"   :model="form">
      <el-form-item prop="phone">
        <el-input class="input" v-model="form.phone" placeholder="请输入手机号">
          <i class="iconfont icon-yanxishoujihao" slot="prefix">
          </i></el-input>
      </el-form-item>
      <el-form-item prop='password'>
        <el-input class="input"  v-model="form.password" placeholder="请输入密码">
          <i class="iconfont icon-yanximima" slot="prefix"></i>
        </el-input>
      </el-form-item>

      <el-form-item class="jzmm">
        <el-checkbox-group v-model="form.jzmm">
          <el-checkbox label="记住密码" name="type"></el-checkbox>


        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button class='button' type="primary" @click="onSubmit">登录</el-button>

      </el-form-item>
    </el-form>
  </div>
</template>
   
<script>

import { login } from '../api/login'
import {setLocal} from '../utils/auth'
// const { remote } = window.require("electron");

export default {
  name: "register_form",
  data() {
    var checkPhone = (rule, value, callback) => { // 手机号验证
      if (!value) {
        return callback(new Error('手机号不能为空'));
      } else {
        const reg = /^1[3456789]\d{9}$/
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error('请输入正确的手机号'));
        }
      }
    };
    return {
      form: {
        
        phone: '',
        password: "",

        jzmm: '',
      },
      rules: {
        

        phone: [
          { required: true, message: "请输入正确手机号", trigger: "blur" },
          { validator: checkPhone, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 12 个字符',
            trigger: 'blur',
          },

        ],

      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          login(this.form).then((data) => {
            if (data.code == 200) {
              setLocal('token',data.data.token)
              this.$message.success('登录成功!!!');
              this.$router.push('/')
            } else {
              this.$message.error(data.message);
            }
          })
        } else {
          this.$message.error('登录出错请重新输入');
          return false;
        }

      })
    }

  },
  mounted() {
    // // 读取本地存储账号信息
    // if (localStorage.getItem("zddl")) {
    //   this.zddl = true;
    //   this.email = localStorage.getItem("email");
    // }
    // if (localStorage.getItem("jzmm")) {
    //   this.jzmm = true;
    //   this.password = localStorage.getItem("mm");
    // }
    // if (localStorage.getItem("email")) {
    //   this.email = localStorage.getItem("email");
    // }
    // if (!this.email) {
    //   document.getElementById("text").focus();
    // } else {
    //   document.getElementById("text2").focus();
    // }
  },
};
</script>
<style  scoped>
.input /deep/ .el-input__inner {
  border: none;
  border-bottom: 1px solid #dcdfe6;
}
.zczh /deep/ .jzmm{
  margin-bottom: 0;
}
.button {
  width: 100%;
  margin-top: 0;
}
.zczh{
    padding: 20px 80px;
    cursor: pointer;
    color: #7c7a7a;
    user-select: none;
    -webkit-app-region: no-drag;
}
</style>