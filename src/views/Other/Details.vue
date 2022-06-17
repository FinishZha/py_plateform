<template>
  <div class="detail">
      <div class="detail_inner">
        <el-card shadow="hover">
          <div slot="header" class="detail_inner__title" @click="back">
            <el-icon class="el-icon-back" style="font-size: 20px"></el-icon>
            <span style="margin-left: 10px">文章详情</span>
          </div>
        </el-card>
      </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  methods:{
    //返回上一页
    back(){
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.detail{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .detail_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 15px;
    .el-card{
      .detail_inner__title{
          .el-icon-back{
            width: 20px;
            height: 20px;
            cursor: pointer;
            &:hover{
              background-color: #ececec;
            }
          }
      }
    }
  }
}
</style>
