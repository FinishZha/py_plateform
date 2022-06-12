<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
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
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  methods:{
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

  #back_up{
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: 9999;
  }
}
</style>
