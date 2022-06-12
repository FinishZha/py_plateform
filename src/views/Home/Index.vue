<template>
  <div class="home">
    <div class="home_content">

    </div>
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
  name: "Home",
  methods:{
    BACK_TOP(){
      document.documentElement.scrollTop = 0
    }
  }
}
</script>

<style lang="less" scoped>
.home{
  position: relative;
  top: 0;
  left: 0;
  width: 100%;

  .home_content{
    min-height: 1200px;
    width: 100%;
  }
  #back_up{
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: 9999;
  }
}
</style>
