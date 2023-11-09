<template>
<div class=''>
    <div class="drag">

    </div>
    <header class="header">
        <!-- 最小化按钮 -->
        <span  @click="minwin" class="iconfont zczh icon-yanxi24gl-minimization"></span>
        <span  @click="maximizeWin" class="iconfont zczh " :class="icon"></span>
       
        <span @click="close" class="iconfont zczh icon-yanxiguanbi"></span>
      </header>
<router-view></router-view>
 </div>
</template>

<script>
  const { remote } = window.require("electron");

export default {
 name: 'layoutVue',
 data() {
  return {
    icon:'icon-yanxizuidahuaxi',
  }
 },
 created() {
        remote.getCurrentWindow().setSize(900,600)
     },
     methods:{
        close() {
        // 只是关闭窗口，软件不退出
        // remote.getCurrentWindow().hide()
   
        // 关闭窗口，退出软件
        remote.getCurrentWindow().close();
      },
      maximizeWin(){
      const win=remote.getCurrentWindow();
      if(win.isMaximized()){ // 判断 窗口是否已最大化 
        this.icon='icon-yanxizuidahuaxi'
        win.restore();// 恢复原窗口大小
      }else{
        this.icon='icon-yanxizuidahua'
         win.maximize();  //最大化窗口
      }
    },

      // 最小化
      minwin() {
        // 最小化，在任务栏显示
        remote.getCurrentWindow().minimize()
   
        // 隐藏窗口,任务栏也隐藏
        // remote.getCurrentWindow().hide();
      },
     }
}

</script>
<style lang="less" scoped>
.drag{
  width: 100%;
  height: 30px;
  background-color: bisque;
  -webkit-app-region: drag;
}
.header{
  position: absolute;
    height: 30px;
    width: 100vw;
    top: 0;
    text-align: right;
    .zczh{
      line-height: 30px;
      padding: 10px;
       -webkit-app-region: no-drag;
    }
   
}
</style>
