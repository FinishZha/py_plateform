<template>
  <div class="book_card" @click="jump_book_detail">
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
    },
    bookId:{
      type: Number
    }
  },
  name: "BookCard",
  methods:{
    //跳转至书籍详情页面
    jump_book_detail(){
     let user_status = this.$store.state.User.USER_STATE
      if(user_status === 'OUTLINE'){
        this.$notify({
          type:"warning",
          message:'当前未登录，登录后才可以看本书哦'
        })
      }else {
        this.$router.push({
          path:'bookdetail',
          query:{
            bid: this.$props.bookId
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.book_card{
  .el-card{
    margin: 0 auto;
    cursor: pointer;
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
