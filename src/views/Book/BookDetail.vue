<template>
  <div class="book_detail">
      <div class="book_detail__inner">
        <el-card shadow="hover"></el-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "BookDetail"
}
</script>

<style lang="less" scoped>
.book_detail{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .book_detail__inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
  }
}
</style>
