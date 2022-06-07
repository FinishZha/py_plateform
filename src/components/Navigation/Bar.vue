<template>
  <div class="bar">
    <el-container>
      <el-header>
          <Header></Header>
      </el-header>
      <el-main>Main</el-main>
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
  name: "Bar",
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="less" scoped>
.bar{
  .el-header{
    height: 160px;
  }
  .el-footer {
    text-align: center;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100vh;
  }
}
</style>
