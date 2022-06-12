<template>
<div class="change_user_password">
  <el-card shadow="hover">
    <el-form :label-position="labelPosition" label-width="90px" inline>
      <el-form-item label="旧密码">
        <el-input size="mini" v-model="oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input size="mini" v-model="newPassword"></el-input>
      </el-form-item>
      <el-form-item label="重复新密码">
        <el-input size="mini" v-model="reNewPassword"></el-input>
      </el-form-item>
    </el-form>
    <div class="password_handle">
      <el-button type="primary" size="mini" @click="change_password">确定修改</el-button>
      <el-button type="warning" size="mini" @click="clean">清除输入</el-button>
    </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "ChangePasswordCard",
  data(){
    return{
      labelPosition:'left',
      newPassword:'',
      reNewPassword:'',
      oldPassword:''
    }
  },
  methods:{
    //提交修改密码
    change_password(){
        if(this.oldPassword === this.newPassword){
          this.$notify({
            type:'warning',
            message:'旧密码与新密码一致，无需更改'
          })
        }else {
          if (this.newPassword !== this.reNewPassword) {
            this.$notify({
              type: 'warning',
              message: '新密码与重复密码不一致'
            })
          } else {
            this.$notify({
              type: 'success',
              message: '修改成功'
            })
          }
        }
    },
    //清除
    clean(){
      this.reNewPassword = ''
      this.newPassword = ''
      this.oldPassword = ''
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
  .password_handle{
    height: 40px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
  }
}
</style>
