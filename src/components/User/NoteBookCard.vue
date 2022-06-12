<template>
<div class="notebook">
  <el-card shadow="hover">
    <h3>个人笔记列表</h3>
    <div class="user_notebook__list" v-if="NOTEBOOK_LIST_EMPTY">
      <el-empty description="笔记列表为空，快去做个笔记吧..."></el-empty>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "NoteBook",
  computed:{
    NOTEBOOK_LIST_EMPTY(){
      return this.$store.state.Setting.NOTEBOOK_LIST_EMPTY
    }
  }
}
</script>

<style lang="less" scoped>
.notebook{
  .el-card{
    h3{
      height: 40px;
      border-bottom: 1px solid #eeeeee;
    }
    .user_notebook__list{
      height: auto;
    }
  }
}
</style>
