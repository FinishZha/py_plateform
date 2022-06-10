<template>
  <div class="auth">
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Navigation/Footer";
export default {
  name: "Login",
  components:{
    Footer
  }
}
</script>

<style lang="less" scoped>

</style>
