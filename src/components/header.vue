<!--
 * @Author: your name
 * @Date: 2019-11-22 14:56:47
 * @LastEditTime: 2020-04-07 14:41:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \client-system\src\components\header.vue
 -->
<template>
  <div class="header qx-flexBetween">
    <div class="left qx-flex">
      <div class="logo">
        <img src="../assets/public/logo.png" alt @click="goHome" />
      </div>
      <div class="title">欢迎登录企兴知识产权客户系统</div>
    </div>
    <div class="right qx-flex">
      <div class="name">{{clientName}}</div>
      <div class="message center" title="消息通知">
        <i class="iconfont iconduanxin"></i>
      </div>
      <div class="login-out" @click="loginOut" title="退出系统">
        <i class="iconfont icontuichu"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clientName: "【企兴之源（天津）科技有限公司】"
    };
  },
  methods: {
    loginOut() {
      this.$router.push("./");
      this.$message.success("退出成功");
      sessionStorage.removeItem("jtoken");
    },
    goHome() {
      this.$router.push({
        name: 'page'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  line-height: 70px;
  background-color: #fff;
  .logo {
    width: 240px;
    background-color: #018eed;
    cursor: pointer;
    img {
      margin: 10px 0 0 10px;
    }
  }
  .title {
    color: #222222;
    font-size: 18px;
    margin-left: 20px;
    font-weight: 600;
  }
  .right {
    .name {
      color: #018eed;
      margin-right: 10px;
    }
    .message,
    .login-out {
      width: 80px;
      cursor: pointer;
      text-align: center;
      &:hover {
        i {
          color: #018eed;
        }
      }
      i {
        font-size: 24px;
      }
    }
    .message {
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
    }
  }
}
</style>
