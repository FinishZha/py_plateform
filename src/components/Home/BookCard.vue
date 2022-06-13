<template>
  <div class="book_card">
    <el-card shadow="hover"></el-card>
  </div>
</template>

<script>
export default {
  name: "BookCard"
}
</script>

<style lang="less" scoped>
.book_card{
  height: 150px;
  width: 320px;
  .el-card{
    height: 100%;
  }
}
</style>
