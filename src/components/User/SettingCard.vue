<template>
<div class="setting">
  <el-card shadow="hover">
    <h3>账号设置</h3>
    <div class="user_setting__list">
      <ul>
        <li>
          <label>密码</label>
          <el-button type="text" @click="open_change_box('password')">修改密码</el-button>
        </li>
        <li>
          <label>邮箱<span id="email">{{ USER_INFO.USER_EMAIL | USER_EMAIL_FILTER}}</span></label>
          <el-button type="text" @click="open_change_box('email')">修改邮箱</el-button>
        </li>
        <li>
          <label>手机号<span id="phone">{{ USER_INFO.USER_PHONE | USER_PHONE_FILTER}}</span></label>
          <el-button type="text" @click="open_change_box('phone')">修改手机号</el-button>
        </li>
      </ul>
    </div>
  </el-card>
  <el-collapse-transition>
    <div shadow="hover" v-if="CHANGE_MSG_SHOW">
      <comment :is="componentName"></comment>
    </div>
  </el-collapse-transition>
</div>
</template>

<script>
import ChangePasswordCard from "@/components/User/ChangePasswordCard";
import ChangeEmailCard from "@/components/User/ChangeEmailCard";
import ChangePhoneCard from "@/components/User/ChangePhoneCard";
export default {
  name: "Setting",
  data(){
    return{
      CHANGE_MSG_SHOW:false,
      componentName:'ChangePasswordCard'
    }
  },
  methods:{
    //修改密码的打开
    chang_password(){
      if(this.CHANGE_MSG_SHOW){
        this.CHANGE_MSG_SHOW = false
        this.componentName = 'ChangePasswordCard'
        setTimeout(()=>{
          this.CHANGE_MSG_SHOW = true
        },500)
      }else {
        this.componentName = 'ChangePasswordCard'
        this.CHANGE_MSG_SHOW = !this.CHANGE_MSG_SHOW
      }
    },
    //修改盒子打开
    open_change_box(target){
      let componentName = ''
      switch (target){
        case 'email':
          componentName = 'ChangeEmailCard'
          break
        case 'phone':
          componentName = 'ChangePhoneCard'
          break
        case 'password':
          componentName = 'ChangePasswordCard'
          break
        default:
          break
      }
      if(this.CHANGE_MSG_SHOW){
        this.CHANGE_MSG_SHOW = false
        this.componentName = componentName
        setTimeout(()=>{
          this.CHANGE_MSG_SHOW = true
        },500)
      }else {
        this.componentName = componentName
        this.CHANGE_MSG_SHOW = !this.CHANGE_MSG_SHOW
      }
    }
  },
  computed:{
    USER_INFO(){
      return this.$store.state.User.USER_INFO
    }
  },
  components:{
    ChangePasswordCard,
    ChangeEmailCard,
    ChangePhoneCard
  },
  //过滤器
  filters:{
    //格式化（加密）用户邮箱
    USER_EMAIL_FILTER(value){
      let oldVal = value
      let newVal = ''
      newVal = value.toString().trim().slice(0,4)+'*****'+oldVal.toString().trim().slice(oldVal.length-8,oldVal.length)
      return newVal
    },
    //格式化（加密）用户手机号
    USER_PHONE_FILTER(value){
      let oldVal = value
      let newVal = ''
      newVal = value.toString().trim().slice(0,3)+'*****'+oldVal.toString().trim().slice(oldVal.length-3,oldVal.length)
      return newVal
    }
  }
}
</script>

<style lang="less" scoped>
.setting{
  .el-card{
    margin-bottom: 10px;
    h3{
      height: 40px;
      border-bottom: 1px solid #eeeeee;
    }
    .user_setting__list{
      height: auto;
      min-height: 170px;
      margin-top: 20px;
      ul{
        li{
          height: 40px;
          line-height: 40px;
          margin: 10px 15px 10px 15px;
          list-style: none;
          font-size: 19px;
          display: flex;
          justify-content: space-between;

          #phone{
            font-size: 16px;
            color: #a1a1a1;
            margin-left: 10px;
          }

          #email{
            font-size:16px;
            color: #a1a1a1;
            margin-left: 28px;
          }
        }
      }
    }
  }
}
</style>
