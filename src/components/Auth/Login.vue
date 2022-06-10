<template>
<div class="login">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span id="title"><i class="el-icon-user" style="margin-right: 5px"></i>用户登录</span>
            <el-link href="" type="primary" style="float: right; padding: 3px 0; font-size: 10px" >还没有账号?</el-link>
          </div>
          <div class="body">
            <div style="margin: 20px;">
              <el-form label-position="left" label-width="80px" :model="userInfo">
                <el-form-item label="账号:">
                  <el-input v-model="userInfo.username" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码:">
                  <el-input type="password" v-model="userInfo.password" show-password></el-input>
                </el-form-item>
              </el-form>
              <div class="handle">
                <el-button type="primary" round @click="login">登录</el-button>
              </div>
              <div class="clause_msg">
                 <span>
                   Tip:当您完成注册时，您已经同意
                   <el-link>隐私协议</el-link>和
                   <el-link>服务条款</el-link>
                 </span>
              </div>
            </div>
          </div>
        </el-card>
</div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      userInfo:{
        userName:'',
        passWord:''
      }
    }
  },
  methods:{
    login(){
    }
  },
  computed:{
    is_show(){
      return this.$store.state.User.VERIFICATION_CODE
    }
  }
}
</script>

<style lang="less" scoped>
.el-card{
  width: 500px;
  position: absolute;
  right: 10%;
  bottom: 45%;

  .handle{
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /deep/.el-button{
      width: 280px;
    }
  }
  .clause_msg{
    width: 100%;
    text-align: center;
    margin-top: 20px;
    span{
      display: block;
      position: relative;
      font-size: 10px;
      .el-link{
        font-size: 10px;
        margin-bottom: 4px;
        margin-left: 2px;
        margin-right: 2px;
      }
    }
  }
}
</style>
