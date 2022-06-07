<template>
    <div class="nav_header">
      <div class="logo"></div>
      <div class="nav_header__left"></div>
      <div class="nav_header__right"></div>
    </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="less" scoped>
.nav_header{
  height: 100%;
  background-color: #20a0ff;
  width: 100%;
  //background-color: grey;
  ul{
    display: flex;
    justify-content: flex-start;
    li{
      list-style: none;
      display: block;
      height: 100%;
      width: 100px;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
