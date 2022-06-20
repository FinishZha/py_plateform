<template>
<div class="login">
        <el-card shadow="hover">
          <div slot="header" class="clearfix">
            <span id="title"><i class="el-icon-user" style="margin-right: 5px"></i>用户登录</span>
            <el-link href="#/project/auth/register" type="primary" style="float: right; padding: 3px 0; font-size: 10px" >还没有账号?</el-link>
          </div>
          <div class="body">
            <div style="margin: 20px;">
              <el-form label-position="left" label-width="80px" :model="userInfo" ref="login_form" :rules="login_rule">
                <el-form-item label="账号:" prop="userName">
                  <el-input v-model="userInfo.userName"  clearable></el-input>
                </el-form-item>
                <el-form-item label="密码:" prop="passWord">
                  <el-input type="password" v-model="userInfo.passWord" show-password></el-input>
                </el-form-item>
              </el-form>
              <div class="handle">
                <el-button type="primary" round @click="login('login_form')">登录</el-button>
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
import {USER_LOGIN} from "@/api/user";
import {SET_TOKEN, SET_USER_ID} from "@/ulits/auth";
export default {
  name: "Login",
  data(){
    return{
      userInfo:{
        userName:'2848135295@qq.com',
        passWord:'zdc200081'
      },
      login_rule:{
        userName: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    //登录成功后的操作
    login_success(token, info){
      SET_TOKEN(token)
      this.$store.commit('USER_ENTER')
      this.$store.commit('GET_TOKEN', token)
      this.$store.commit('EMIT_USER_INFO', info)
    },
    //登录功能
    login(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let user_count = {
            email: this.userInfo.userName,
            password: this.userInfo.passWord
          }
          USER_LOGIN(user_count).then(res => {
            if(res.data.message.loginInfo.loginCode === 1){
              this.$notify({
                type:"success",
                message:'登录成功'
              })
              this.login_success(res.data.message.loginInfo.token, res.data.message.loginInfo.userInfo)
              this.$router.push('/project/home')
            }else {
              this.$notify({
                type:"error",
                message:'登录失败，账号或密码错误'
              })
            }
          }).catch(()=>{
            this.$notify({
              type:"error",
              message:'登录失败，网络异常'
            })
          })
        } else {
          this.$notify({
            type:"warning",
            message:'登录失败，请检查表单'
          })
          return false;
        }
      });
    },
    //登录检测功能
    before_login(){
      let USER_STATE = this.$store.state.User.USER_STATE
      if(USER_STATE === 'ONLINE'){
        this.$router.replace('/')
      }
    },
  },
  computed:{
  },
  mounted() {
    this.before_login()
  }
}
</script>

<style lang="less" scoped>
.login{
  height: 750px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-card {
    width: 500px;
    margin-bottom: 180px;
    position: relative;
    top: 10%;
    .handle {
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      /deep/ .el-button {
        width: 280px;
      }
    }

    .clause_msg {
      width: 100%;
      text-align: center;
      margin-top: 20px;

      span {
        display: block;
        position: relative;
        font-size: 10px;

        .el-link {
          font-size: 10px;
          margin-bottom: 4px;
          margin-left: 2px;
          margin-right: 2px;
        }
      }
    }
  }
}

</style>
