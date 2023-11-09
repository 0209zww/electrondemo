<template>
    <div class="center404" style=''>
      <img src="../assets/404 (3).png" alt="" srcset="">
    </div>
  </template>
  
  <script>
  
  
  export default {
    components: {
      // SvgIcon,
    },
    name: 'Page404Vue',
    computed: {
      message() {
        return 'The webmaster said that you can not enter this page...'
      }
    }
  }
  </script>
  
  <style lang="less" >
  .center404 {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    // position: relative;
    img{
      width: 90%;
      
    }
  }
  </style>
  