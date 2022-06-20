<template>
<div class="recommend_tool">
  <el-card shadow="hover" header="工具推荐">
    <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
  </el-card>
</div>
</template>

<script>
export default {
  name: "RecommendTool",
  data(){
    return {
      tool:[]
    }
  },
  computed:{
    emptyShow(){
      return this.tool.length === 0
    }
  }
}
</script>

<style lang="less" scoped>
.recommend_tool{
  .el-card{
    margin-bottom: 15px;
  }
}
</style>
