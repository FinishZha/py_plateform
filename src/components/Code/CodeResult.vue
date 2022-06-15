<template>
    <div class="result">
      <div class="result_top">
        <span class="span">执行结果</span>
        <el-tooltip class="tip" effect="light" content="结果不可更改，但重新运行代码可自动被覆盖。" placement="top-start">
          <el-icon class="el-icon-warning-outline"></el-icon>
        </el-tooltip>
      </div>
      <div class="result_body">
        <i>{{ CODE_RESULT }}</i>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    width:{
      type:String,
      default:'940px'
    },
    height:{
      type:String,
      default: '320px'
    }
  },
  name: "CodeResult",
  methods:{

  },
  computed:{
    //代码结果
    CODE_RESULT(){
      return this.$store.state.Code.CODE_RESULT
    }
  }
}
</script>

<style lang="less" scoped>
.result{
  height: 100%;
  width: 100%;
  min-width: 450px;
  min-height: 300px;
  max-width: 98%;
  border:1px solid #cecdcd;
  background-color: #ffffff;
  margin: 3px;
  .result_top{
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #cecdcd;
    .span{
      font-size: 12px;
      margin-left: 10px;
    }
    .el-icon-warning-outline{
      font-size: 15px;
      margin-left: 5px;
    }
  }
  .result_body{
    font-size: 14px;
    padding: 5px;
  }
}
</style>
