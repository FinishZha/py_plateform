<template>
  <div class="book_detail">
      <div class="book_detail__top">
        <el-card shadow="hover">
          <el-button type="primary" @click="back" size="mini" plain>返回上一页</el-button>
        </el-card>
      </div>
      <div class="book_detail__inner">
        <el-card shadow="hover">
          <iframe :src='src' frameborder="0" id="book" v-if="!emptyShow"></iframe>
          <el-empty v-if="emptyShow">
            <el-button type="primary" @click="back" plain>返回上一页</el-button>
          </el-empty>
        </el-card>
      </div>
  </div>
</template>
<script>
import {GET_TARGET_BOOK} from "@/api/book";
export default {
  name: "BookDetail",
  data(){
    return{
      src:''
    }
  },
  methods:{
    //获取选定的图书
    get_target_book(){
      let query = {
        bookId: this.$route.query.bid
      }
      GET_TARGET_BOOK(query).then(res=>{
        if(res.status === 200 && res.data.statusCode === 200 && res.data.message.data.bfile !== ''){
          this.$notify({
            type:"success",
            message:'图书内容获取成功，请等待加载完成后即可查看内容'
          })
          this.src = res.data.message.data.bfile
        }else {
          this.$notify({
            type:"error",
            message:'图书内容获取失败'
          })
        }
      })
    },
    //返回上一页
    back(){
      this.$router.back()
    }
  },
  mounted() {
    this.get_target_book()
  },
  computed:{
    emptyShow(){
      return this.src === ''
    }
  }
}
</script>

<style lang="less" scoped>
.book_detail{
  min-height: 800px;
  .book_detail__top{
    display: flex;
    justify-content: center;
    .el-card{
      margin-top: 15px;
      width: 98%;
    }
  }
  .book_detail__inner{
    width:100%;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    .el-card{
      width: 98%;
      #book{
        width:100%;
        height: 850px;
      }
    }
  }
}
</style>
