<template>
  <div class="book_table">
    <el-card shadow="never">
      <div class="book_cards">
        <BookCard v-for="item in 10" :key="item"></BookCard>
      </div>
    </el-card>
  </div>
</template>

<script>
import BookCard from "@/components/Book/BookCard";
export default {
  name: "BookTable",
  components:{
    BookCard
  }
}
</script>

<style lang="less" scoped>
.book_table{
  margin-bottom: 10px;
  .el-card{
    width: 100%;
    .book_cards{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
}
</style>
