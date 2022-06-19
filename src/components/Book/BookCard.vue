<template>
  <div class="book_card" @click="show">
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
  name: "BookCard",
  methods:{
    show(){
      console.log('1')
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
