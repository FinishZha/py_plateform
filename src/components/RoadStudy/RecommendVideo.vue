<template>
<div class="recommend_video">
  <el-card shadow="hover" header="视频推荐">
    <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
  </el-card>
</div>
</template>

<script>
export default {
  name: "RecommendVideo",
  data(){
    return {
      video:[]
    }
  },
  computed:{
    emptyShow(){
      return this.video.length === 0
    }
  }
}
</script>

<style lang="less" scoped>
.recommend_video{
  .el-card{
    margin-bottom: 10px;
  }
}
</style>
