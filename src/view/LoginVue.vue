<template>
    <div class="login" style="overflow:hidden;">
      <!-- 顶部 -->
      <header class="header">
        <!-- 最小化按钮 -->
        <span  @click="minwin" class="iconfont zczh icon-yanxi24gl-minimization"></span>
       
        <span @click="close" class="iconfont zczh icon-yanxiguanbi"></span>
      </header>
   
      <main>
        <!-- 顶部背景图 -->
        <div class="bg">
          <img style="" src="../assets/login.png" />
        </div>
        <!-- 登录表单组件 -->
        <div class="body">
          <Login_form></Login_form>
        </div>
      </main>
      <footer class="footer">

        <div class="zczh" @click="zc">注册账号</div>
        <div>
          <span title="二维码登录" class="iconfont icon-yanxierweima"></span>
        </div>
      </footer>
    </div>
  </template>
   
  <script>
  import "@/assets/css/login.css";
//   import "@/assets/fonts/gb/iconfont.css";
//   import "@/assets/fonts/zxh/iconfont.css";
//   import "@/assets/fonts/ewm/iconfont.css";
  import Login_form from "@/components/Login_form.vue";
   
  //网页测试要关闭,打包成软件要启动
  const { remote } = window.require("electron");
   
  export default {
    name: "loginVue",
    data() {
      return {};
    },
    components: {
      Login_form,
    },
    created(){
        remote.getCurrentWindow().setSize(432, 401)

    },
    methods: {
        close() {
        // 只是关闭窗口，软件不退出
        // remote.getCurrentWindow().hide()
   
        // 关闭窗口，退出软件
        remote.getCurrentWindow().close();
      },
      // 最小化
      minwin() {
        // 最小化，在任务栏显示
        remote.getCurrentWindow().minimize()
   
        // 隐藏窗口,任务栏也隐藏
        // remote.getCurrentWindow().hide();
      },
      zc() {
        
        this.$router.push("/register");
      },
      
    },
    mounted() {
      //显示窗口
      remote.getCurrentWindow().show();
    },
  };
  </script>
   
  <style lang="less" scpoed>
  .login {
    max-width: 900px;
    overflow: hidden;
    min-width: 430px;
    .bg {
      img {
        width: 100%;
        height: 124px;
        object-fit: cover;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 5px 15px 5px 15px;
    align-items: center;
}
  </style>