<template>
<div class="left_nav">
<el-card shadow="never" header="书籍类别">
  <el-menu default-active="1">
    <el-menu-item index="1" @click="getBook(1)">
      <i class="el-icon-place"></i>
      <span slot="title">Python基础</span>
    </el-menu-item>
    <el-menu-item index="2" @click="getBook(2)">
      <i class="el-icon-coin"></i>
      <span slot="title">Python高级</span>
    </el-menu-item>
    <el-menu-item index="3" @click="getBook(5)">
      <i class="el-icon-pie-chart"></i>
      <span slot="title">大数据</span>
    </el-menu-item>
    <el-menu-item index="4" @click="getBook(7)">
      <i class="el-icon-s-tools"></i>
      <span slot="title">自动化运维</span>
    </el-menu-item>
    <el-menu-item index="5" @click="getBook(4)">
      <i class="el-icon-cpu"></i>
      <span slot="title">爬虫开发</span>
    </el-menu-item>
    <el-menu-item index="6" @click="getBook(6)">
      <i class="el-icon-copy-document"></i>
      <span slot="title">Python后端开发</span>
    </el-menu-item>
    <el-menu-item index="7" @click="getBook(3)">
      <i class="el-icon-s-custom"></i>
      <span slot="title">人工智能</span>
    </el-menu-item>
  </el-menu>
</el-card>
</div>
</template>

<script>
export default {
  name: "LeftNav",
  methods:{
    getBook(id){
      this.$emit('getBook', id)
    }
  }
}
</script>

<style lang="less" scoped>
.left_nav{
  .el-card{
    width: 200px;
    height: auto;
    min-height: 600px;
    position: fixed;
    top: 83px;
    .el-menu{
      border:0 !important;
    }
  }
}
</style>
