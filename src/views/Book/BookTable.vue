<template>
<div class="book_table">
  <div class="book_inner">
    <div class="book_inner__left">
      <LeftNav @getBook="getBook"></LeftNav>
    </div>
    <div class="book_inner__right">
      <BookList ref="book_table"></BookList>
      <div class="book_inner__pagination">
        <PaginationCard></PaginationCard>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import LeftNav from "@/components/Book/LeftNav";
import BookList from "@/components/Book/BookList";
import PaginationCard from "@/components/Book/PaginationCard";

export default {
  name: "BookTable",
  components:{
    LeftNav,
    BookList,
    PaginationCard
  },
  methods:{
    getBook(id){
      this.$refs.book_table.get_book_list(id)
    }
  }
}
</script>

<style lang="less" scoped>
.book_table {
  min-height: 800px;
  display: flex;
  justify-content: center;

  .book_inner {
    width: 1300px;
    margin-top: 15px;
    display: flex;
    justify-content: center;

    .book_inner__left {
      width: 220px;
    }

    .book_inner__right {
      width: 1080px;
      margin-bottom: 15px;
    }
  }
}
</style>
