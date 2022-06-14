<template>
<div class="book">
  <div class="book_inner">
    <div class="book_inner__left">
      <LeftNav></LeftNav>
    </div>
    <div class="book_inner__right">
      <BookTable></BookTable>
      <div class="book_inner__pagination">
        <PaginationCard></PaginationCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftNav from "@/components/Book/LeftNav";
import BookTable from "@/components/Book/BookTable";
import PaginationCard from "@/components/Book/PaginationCard";
export default {
  name: "Index",
  components:{
    LeftNav,
    BookTable,
    PaginationCard
  }
}
</script>

<style lang="less" scoped>
.book{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .book_inner{
    width: 1300px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    .book_inner__left{
      width: 220px;
    }
    .book_inner__right{
      width: 1080px;
      margin-bottom: 15px;
    }
  }
}
</style>
