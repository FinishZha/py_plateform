<template>
<div class="recommend_article">
  <el-card shadow="hover" header="文章推荐">
      <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
  </el-card>
</div>
</template>

<script>

export default {
  name: "RecommendArticle",
  data(){
    return{
      article:[]
    }
  },
  computed:{
    emptyShow() {
      return this.article.length === 0
    }
  }
}
</script>

<style lang="less" scoped>
.recommend_article{
  .el-card{
    margin-bottom: 10px;
  }
}
</style>
