<template>
<div class="enjoy">
  <div class="enjoy_inner">
    <div class="enjoy_content">
      <el-card shadow="hover">
        <div class="title">
          <h3>试刀厂</h3>
        </div>
        <CodeQuestionList></CodeQuestionList>
      </el-card>
    </div>
  </div>
</div>
</template>

<script>
import CodeQuestionList from "@/components/Enjoy/CodeQuestionList";
export default {
  name: "Index",
  components:{
    CodeQuestionList
  }
}
</script>

<style lang="less" scoped>
.enjoy{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .enjoy_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    .enjoy_content{
      height: auto;
      .el-card{
        min-height: 800px;
        .title{
          height: 35px;
          line-height: 35px;
          width: 300px;
          background: url("../../../public/icon10.png") no-repeat center;
        }
      }
    }
  }
}
</style>
