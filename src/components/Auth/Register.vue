<template>
<div class="register">
  <el-card shadow="hover">
    <div slot="header" class="clearfix">
      <span id="title"><i class="el-icon-user" style="margin-right: 5px"></i>用户注册</span>
      <el-link href="#/project/auth/login" type="primary" style="float: right; padding: 3px 0; font-size: 10px" >已有账号?去登录</el-link>
    </div>
    <div class="body">
      <div style="margin: 20px;">
        <el-form label-position="left" label-width="80px" :model="registerInfo" ref="login_form" :rules="register_rule">
          <el-form-item label="用户名:" prop="userName" label-width="90px">
            <el-input v-model="registerInfo.userName"  clearable placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="账号:" prop="userEmail" label-width="90px">
            <el-input v-model="registerInfo.userEmail"  clearable placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="passWord" label-width="90px">
            <el-input type="password" v-model="registerInfo.passWord" show-password placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item label="重复密码:" prop="rePassWord" label-width="90px">
            <el-input type="password" v-model="registerInfo.rePassWord" show-password placeholder="请再次输入密码"></el-input>
          </el-form-item>
          <el-form-item label="验证码:" prop="code" label-width="90px">
            <el-input v-model="registerInfo.code" placeholder="请输入验证码" style="width: 180px"></el-input>
            <el-button type="primary" @click="send_code" style="margin-left: 20px" :loading="code_btn_loading">{{ code_btn_word }}</el-button>
          </el-form-item>
        </el-form>
        <div class="rule">
          <el-switch v-model="switchVal"></el-switch>
          <span>我同意  <el-link>用户隐私协议</el-link>  和  <el-link>服务条款</el-link></span>
        </div>
        <div class="handle">
          <el-button type="primary" round @click="register('login_form')" :loading="register_btn_loading">注册</el-button>
        </div>
      </div>
    </div>
  </el-card>
</div>
</template>

<script>
import {POST_CODE_EMIL, USER_REGISTER} from "@/api/user";
export default {
  name: "Register",
  data(){
    return{
      register_btn_loading: false,
      code_btn_loading:false,
      code_btn_word:'发送验证码',
      registerInfo:{
        userName:'',
        userEmail:'',
        passWord:'',
        rePassWord:'',
        code:''
      },
      register_rule:{
        userName:[
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur' }
        ],
        userEmail:[
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        passWord:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        rePassWord:[
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        code:[
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      },
      switchVal:false
    }
  },
  methods:{
    //验证码状态改变
    code_send_state(second){
     this.code_btn_word = `${second}秒后重发`
      let countdown = setInterval(() => {
        this.code_btn_loading = true
        if (second > 0) {
          this.code_btn_word = second + "s后获取"
          --second;
        } else {
          this.code_btn_word = "获取验证码";
          this.code_btn_loading = false;
          this.type = "primary";
          clearInterval(countdown);
        }
      }, 1000)
    },
    //发送验证码功能
    send_code(){
      let email = this.registerInfo.userEmail
      if(email !== ''){
        this.code_send_state(60)
        let data = {
          email: this.registerInfo.userEmail
        }
        POST_CODE_EMIL(data).then(res => {
          if(res.status === 200 && res.data.statusCode === 200){
              this.$notify({
                type:'success',
                message:'验证码发送成功，请注意查收'
              })
          }else {
            this.$notify({
              type:'error',
              message:'验证码发送失败，未知错误'
            })
            this.code_btn_loading = false
          }
        })
      }else {
        this.$notify({
          type:'warning',
          message:'请输入邮箱地址'
        })
        this.code_btn_loading = false
      }
    },
    //注册功能
    register(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register_btn_loading = true
          if(this.switchVal){
            let register_info = {
              username:this.registerInfo.userName,
              password:this.registerInfo.passWord,
              rwPassword:this.registerInfo.rePassWord,
              email:this.registerInfo.userEmail,
              code:this.registerInfo.code
            }
            USER_REGISTER(register_info).then(res => {
              console.log(res.data.message.registerInfo)
              console.log(res.data.message.registerInfo.registerCode)
              if(res.data.message.registerInfo.registerCode === 1){
                this.$confirm('注册成功，即将前往登录页','提示',{
                  confirmButtonText:'确定',
                  type:'success',
                }).then(()=>{
                  this.$router.push('/project/auth/login')
                })
                this.register_btn_loading = false
              }else {
                this.$notify({
                  type:'error',
                  message:'注册失败'
                })
                this.register_btn_loading = false
              }
            })
          }else {
            this.$notify({
              type:'warning',
              message:'请同意条款'
            })
            this.register_btn_loading = false
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    before_register(){
      let USER_STATE = this.$store.state.User.USER_STATE
      if(USER_STATE === 'ONLINE'){
        this.$router.replace('/')
      }
    }
  },
  mounted() {
    this.before_register()
  }
}
</script>

<style lang="less" scoped>
.register{
  height: 750px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-card{
    width: 550px;
    margin-bottom: 180px;
    position: relative;
    top: 10%;
    .handle{
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /deep/ .el-button {
        width: 280px;
      }
    }

    .rule{
      height: 30px;
      line-height: 30px;
      width: 350px;
      position: relative;
      top: -10px;
      left: 40px;

      span{
        font-size: 12px;
      }
      .el-switch{
        margin-right: 30px;
        margin-left: 30px;
      }
    }
  }
}
</style>
