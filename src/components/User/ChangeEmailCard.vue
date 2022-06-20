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
import {CHANGE_USER_EMAIL} from "@/api/user";
export default {
  name: "Email",
  data(){
    return{
      labelPosition:'left',
      newEmail:''
    }
  },
  methods:{
    //提交修改邮箱
    change_email(){
      if(this.newEmail !== ''){
        this.$confirm(`确定要将邮箱修改为${this.newEmail}`, '提示', {
          confirmButtonText:'确定修改',
          cancelButtonText:'取消',
          type:"warning"
        }).then(()=>{
          let data = {
            userId: this.$store.state.User.USER_INFO.USER_ID,
            newEmail:this.newEmail
          }
          CHANGE_USER_EMAIL(data).then(res=>{
            if (res.status ===200 && res.data.message.updateCode === 1){
              this.$notify({
                type:'success',
                message:'邮箱成功修改为:${this.newEmail}，请重新登录'
              })
              this.$store.commit('USER_LEAVE')
            }else {
              this.$notify({
                type:'error',
                message:'邮箱修改失败,请稍后重试'
              })
            }
          })
        }).catch(()=>{
          this.$notify({
            type:'info',
            message:'邮箱取消修改'
          })
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
