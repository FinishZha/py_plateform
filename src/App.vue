<template>
  <div id="app">
      <router-view></router-view>
      <el-button
          type="primary"
          icon="el-icon-top"
          circle
          plain
          @click="BACK_TOP"
          id="back_up"
          style="display: none"></el-button>
  </div>
</template>

<script>
window.onscroll = function (){
  let backup = document.getElementById('back_up')
  let target = document.documentElement.scrollTop
  if(target >= 300){
    backup.style.display = 'block'
  }else {
    backup.style.display = 'none'
  }
}

export default {
  name: 'app',
  methods:{
    //返回顶部
    BACK_TOP(){
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  min-width: 1400px;

  #back_up{
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: 9999;
  }
}
</style>
