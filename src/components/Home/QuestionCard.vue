<template>
  <div class="question_card">
    <el-card shadow="hover">
      <div class="left_img">
      </div>
      <h2><el-link href="#/project/question">问题解答</el-link></h2>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "QuestionCard"
}
</script>

<style lang="less" scoped>
.question_card{
  width: 320px;
  height: 150px;
  .el-card{
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .left_img{
      height: 46px;
      width: 46px;
      background-image: url("../../../public/icon09.png");
      position: relative;
      top: 0;
      left: -80px;
    }
    h2{
      position: absolute;
      top: 64px;
      left: 120px;
      .el-link{
        font-weight: bolder;
        font-size: 22px;
      }
    }
  }
}
</style>
