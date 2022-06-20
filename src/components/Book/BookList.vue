<template>
  <div class="book_list">
    <el-card shadow="never" v-loading="loading">
      <el-empty :description="description" v-if="emptyShow"></el-empty>
      <div class="book_cards">
        <BookCard v-for="book in book_list" :key="book.bid" :book-img="book.bheader" :book-id="book.bid"></BookCard>
      </div>
    </el-card>
  </div>
</template>

<script>
import BookCard from "@/components/Book/BookCard";
import {GET_BOOK_LIST} from "@/api/book";
export default {
  name: "BookList",
  data(){
    return {
      book_list:[],
      loading: false,
      description:'啥也没有哦,等待管理员补货中...'
    }
  },
  components:{
    BookCard
  },
  methods:{
    //获取指定模块的书籍列表
    get_book_list(id){
      this.loading = true
      let data = {
        modelId: id || 1
      }
      GET_BOOK_LIST(data).then(res=>{
        if(res.request.status === 200){
          this.loading = false
          this.book_list = res.data.message.data
        }else {
          this.$notify({
            type:'error',
            message:'获取书籍列表失败，刷新试试'
          })
          this.loading = false
        }
      }).catch(()=>{
        this.loading = false
      })
    },
    show(){
      console.log('1')
    }
  },
  computed:{
    emptyShow(){
      return this.book_list.length <= 0
    }
  },
  mounted() {
    this.get_book_list()
  }
}
</script>

<style lang="less" scoped>
.book_list{
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
