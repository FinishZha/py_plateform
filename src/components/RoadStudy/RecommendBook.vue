<template>
  <div class="recommend_book">
    <el-card shadow="hover" header="书籍推荐" v-loading="loading">
      <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
      <div class="book_inner" v-else>
        <BookCard v-for="book in books" :key="book.bid" :book-img="book.bheader" :book-id="book.bid"></BookCard>
      </div>
    </el-card>
  </div>
</template>

<script>
import {GET_BOOK_LIST} from "@/api/book";
import BookCard from "@/components/Book/BookCard";
export default {
  name: "RecommendBook",
  data(){
    return{
      books:[],
      loading:false
    }
  },
  methods:{
    //获取指定模块的书籍列表
    get_book_list(){
      this.loading = true
      let USER_ROAD = this.$store.state.User.USER_INFO.USER_ROAD
      let data = {
        modelId: USER_ROAD
      }
      GET_BOOK_LIST(data).then(res=>{
        if(res.status === 200){
          this.loading = false
          this.books = res.data.message.data
        }else {
          this.$notify({
            type:'error',
            message:'获取推荐书籍列表失败，刷新试试'
          })
          this.loading = false
        }
      }).catch(()=>{
        this.loading = false
      })
    },
  },
  components:{
    BookCard
  },
  computed:{
    emptyShow() {
      return this.books.length === 0
    }
  },
  mounted() {
    this.get_book_list()
  }
}
</script>

<style lang="less" scoped>
.recommend_book{
  .el-card{
    margin-bottom: 10px;
    .book_inner{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
}
</style>
