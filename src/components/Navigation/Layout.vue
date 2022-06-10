<template>
  <div class="layout">
    <el-container>
      <el-header>
          <Header></Header>
      </el-header>
      <el-main class="layout_main">
        <router-view></router-view>
      </el-main>
      <el-footer>
          <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
export default {
  name: "Layout",
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.layout{
  .el-container{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    /deep/.el-header{
      position: sticky;
      top: 0;
      left: 0;
      z-index: 9999;
      min-width: 1300px;
      height: 70px !important;
      box-shadow: 3px 1px 4px 1px #ececec !important;
    }
    .el-footer {
      text-align: center;
      z-index: 999;
    }

    .el-main {
      width: 100%;
      color: #333;
      text-align: center;
      line-height: 160px;
      min-height: 100vh;
    }
  }
}
</style>
