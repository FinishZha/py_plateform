<template>
<div class="content_list_card">
  <el-card shadow="hover">
    <div class="content_list__card-title">
      <h3>视频专区</h3>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "ContentListCard"
}
</script>

<style lang="less" scoped>
.content_list_card{
  width: 100%;
  height: 800px;
  .el-card{
    height: 100%;
    .content_list__card-title{
    }
  }
}
</style>
