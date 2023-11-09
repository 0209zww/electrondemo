<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;

}
.clearfix::after{
   content: '';
   clear: both;
   display: block;
}
body,html{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  width: 100%;
  height: 100%;
}



 a {
  color: #484E5E;

  text-decoration: none;
}

</style>
