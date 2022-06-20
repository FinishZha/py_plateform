<template>
  <div class="recommend_book">
    <el-card shadow="hover" header="书籍推荐">
      <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RecommendBook",
  data(){
    return{
      books:''
    }
  },
  computed:{
    emptyShow() {
      return this.books.length === 0
    }
  }
}
</script>

<style lang="less" scoped>
.recommend_book{
  .el-card{
    margin-bottom: 10px;
  }
}
</style>
