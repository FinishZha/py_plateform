<template>
  <div class="notebook">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Index",
  components:{
  }
}
</script>

<style lang="less" scoped>
.notebook{
  min-height: 750px;
}
</style>
