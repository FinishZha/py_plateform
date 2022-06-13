<template>
<div class="project">
  <Header></Header>
  <div class="main">
  <router-view></router-view>
  </div>
  <Footer></Footer>
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
  .main{
    margin-top: 68px;
  }
}
</style>
