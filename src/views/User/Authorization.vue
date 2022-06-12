<template>
  <div class="auth">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Footer from "@/components/Navigation/Footer";
export default {
  name: "Login",
  components:{
    Footer,
    Header
  }
}
</script>

<style lang="less" scoped>
.auth{
  height: 100%;
  width: 100%;

}
</style>
