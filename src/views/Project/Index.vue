<template>
<div class="project">
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
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
  name: "Index",
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.project{
  .el-container{
    display: flex;
    justify-content: space-between;
    /deep/.el-header{
      padding: 0px;
      background-color: #20a0ff;
      height: 70px !important;
    }
    /deep/.el-main{

    }
    /deep/.el-footer{
      height: 180px !important;
      border-top: 1px solid #eeeeee;
      background-color: #ffffff;
    }
  }
}
</style>
