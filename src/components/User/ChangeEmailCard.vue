<template>
  <el-card shadow="hover">
    <el-form :label-position="labelPosition" label-width="80px" inline>
      <el-form-item label="新邮箱">
        <el-input size="mini" v-model="newEmail"></el-input>
      </el-form-item>
    </el-form>
    <div class="email_handle">
      <el-button type="primary" size="mini" @click="change_email">确定修改</el-button>
      <el-button type="warning" size="mini" @click="clean">清除输入</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Email",
  data(){
    return{
      labelPosition:'left',
      newEmail:''
    }
  },
  methods:{
    //提交修改手机号
    change_email(){
      if(this.newEmail !== ''){
        this.$notify({
          type:'success',
          message:'邮箱成功修改为:'+this.newEmail
        })
      }else {
        this.$notify({
          type:'warning',
          message:'邮箱格式不正确'
        })
      }
    },
    clean(){
      this.newEmail = ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-card{
  .el-form{
    width: 400px;
    margin-left: 40px;
    .el-form-item{
      width: 500px;
      .el-input{
        width: 300px;
      }
    }
  }
  .email_handle{
    height: 40px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
  }
}
</style>
