<!--
 * @Author: your name
 * @Date: 2019-11-22 09:26:19
 * @LastEditTime: 2020-04-07 16:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \client-system\src\views\login\login.vue
 -->
<template>
  <div class="login">
    <div class="login-bg"></div>
    <div class="login-center">
      <img src="../../assets/public/login-bg.png" alt class="center-img" />
      <el-row class="qx-maxbox">
        <el-col :span="12">
          <div class="login-logo">
            <img src="../../assets/public/login-icon.png" alt />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="login-box qx-alignCenter">
            <div class="title">用户登录</div>
            <el-form
              :model="loginForm"
              ref="loginForm"
              :rules="rules"
              class="login-form"
              label-width="0"
            >
              <el-form-item prop="userName">
                <i class="iconfont iconxingmingyonghumingnicheng"></i>
                <el-input v-model="loginForm.userName" placeholder="请输入用户名" class="login-input"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <i class="iconfont iconmima"></i>
                <el-input
                  type="password"
                  v-model="loginForm.password"
                  placeholder="请输入密码"
                  class="login-input"
                ></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-row class="qx-code">
                  <el-col :span="24">
                    <i class="iconfont iconyanzhengma3"></i>
                    <el-input
                      v-model="loginForm.code"
                      placeholder="请输入验证码"
                      class="login-input"
                      @keyup.enter.native="submit('loginForm')"
                    ></el-input>
                  </el-col>
                  <el-col :span="6" class="verify">
                    <!-- <el-button type="text" size="small">FFFF</el-button> -->
                    <validCode :value.sync="validCode"></validCode>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submit('loginForm')" round class="login-btn">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="copyright qx-alignCenter">版权所有: 知识产权认证专业平台</div>
  </div>
</template>

<script>
import loginApi from "../../api/login";
import validCode from "../../components/validCode";
export default {
  components: {
    validCode
  },
  data() {
    return {
      validCode: "",
      loginForm: {},
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        code: [
          {
            required: true,
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            loginName: "superadmin",
            password: "1qa2ws3ed",
            model: "oa"
          };
          loginApi.login(data).then(res => {
            if (res.data.status == 1) {
              this.$router.push({
                name: "page"
              });
            } else {
              this.$message.warning(res.data.message);
            }
          });
        } else {
          this.$message.warning("请将用户名和密码填写完整");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-bg {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("../../assets/public/bg.jpg") center no-repeat;
  background-size: cover;
  zoom: 1;
  z-index: -10;
}

.login {
  height: 100vh;
}

.login-center {
  position: relative;
  top: 25%;
  height: 440px;

  .center-img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 440px;
  }

  .qx-maxbox {
    width: 1300px;
    height: 100%;

    .el-col {
      height: 100%;
    }

    .login-logo {
      position: relative;
      top: 50%;
      margin-top: -60px;

      img {
        width: 600px;
        // height: 120px;
      }
    }
  }
}

@media screen and (max-width: 1400px) {
  .login-center {
    top: 20%;
    height: 350px;

    .center-img {
      height: 350px;
    }
  }
}

.login-input {
  border: none;
  outline: none;
}

.login-box {
  // width: 400px;
  height: 550px;
  margin-top: -50px;
  background: url("../../assets/public/login.png") center no-repeat;
  background-size: 80% 90%;

  .login-form {
    width: 350px;
    margin: 0 auto;
    position: relative;

    .el-form-item {
      margin-bottom: 30px;
    }
  }

  .title {
    padding: 80px 0 30px;
    font-size: 30px;
  }

  i {
    position: absolute;
    left: 5px;
    top: 5px;
    font-size: 20px;
    z-index: 30;
  }

  .login-btn {
    width: 100%;
  }

  .qx-code {
    position: relative;

    .verify {
      position: absolute;
      right: 0;
      top: 0;
      border: 1px solid #ddd;
    }
  }
}

.copyright {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  color: #018eed;
}

@media screen and (max-width: 1400px) {
  .login-box {
    height: 450px;
    background-size: 65% 90%;

    .login-form {
      width: 300px;
    }

    .title {
      font-size: 24px;
      padding: 60px 0 20px;
    }

    i {
      top: 2px;
    }
  }
}
</style>
