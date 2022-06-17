<template>
  <div class="book_card">
    <el-card shadow="hover">
      <div class="book">
        <img :src="bookImg" alt="">
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props:{
    bookImg:{
      type: String
    }
  },
  name: "BookCard"
}
</script>

<style lang="less" scoped>
.book_card{
  .el-card{
    margin: 0 auto;
    .book{
        height: 100%;
        width: 100%;
        img{
          height: 270px;
          width: 100%;
        }
    }
  }
}
</style>
