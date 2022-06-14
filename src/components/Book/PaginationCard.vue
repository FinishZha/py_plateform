<template>
<div class="pagination_card">
  <el-card shadow="hover">
    <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
    </el-pagination>
  </el-card>
</div>
</template>

<script>
export default {
  name: "PaginationCard"
}
</script>

<style lang="less" scoped>
  .pagination_card{
    .el-card{
      display: flex;
      justify-content: center;
    }
  }
</style>
