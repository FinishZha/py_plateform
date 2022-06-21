<template>
<div class="user_center">
    <div class="user_inner">
        <div class="user_inner__left">
          <el-card shadow="hover">
              <el-menu>
                <el-menu-item index="1" @click="CHANGE_COMPONENT('DefaultInfoCard')">
                  <i class="el-icon-user-solid"></i>
                  <span slot="title">个人基本信息</span>
                </el-menu-item>
                <el-menu-item index="2" @click="CHANGE_COMPONENT('NoteBookCard')">
                  <i class="el-icon-collection"></i>
                  <span slot="title">笔记集合</span>
                </el-menu-item>
                <el-menu-item index="3" @click="CHANGE_COMPONENT('SettingCard')">
                  <i class="el-icon-s-tools"></i>
                  <span slot="title">账号设置</span>
                </el-menu-item>
              </el-menu>
          </el-card>
        </div>
        <div class="user_inner__right">
         <component :is="componentName"></component>
        </div>
    </div>
</div>
</template>

<script>
import DefaultInfoCard from "@/components/User/DefaultInfoCard";
import NoteBookCard from "@/components/User/NoteBookCard";
import SettingCard from "@/components/User/SettingCard";
export default {
  name: "Usercenter",
  data(){
    return{
      componentName:'DefaultInfoCard'
    }
  },
  methods:{
    //个人中心卡片跟换
    CHANGE_COMPONENT(target){
      this.componentName = target
    },
    //检测是否登录
    CHECK_LOGIN(){
      let state = this.$store.state.User.USER_STATE
      let token = this.$store.state.USER_TOKEN
      if( token === '' || state === 'OUTLINE' ){
        this.$router.push('/project/home')
      }
    }
  },
  components:{
    DefaultInfoCard,
    NoteBookCard,
    SettingCard
  },
  mounted() {
    this.CHECK_LOGIN()
  }
}
</script>

<style lang="less" scoped>
.user_center{
  height: auto !important;
  width: 100%;
  min-height: 750px;
  .user_inner{
    height: 100%;
    width: 80%;
    min-width: 1200px;
    position: relative;
    margin: 0 auto;
    top: 10px;
    left: 0;
    display: flex;
    justify-content: flex-start;
    .user_inner__left{
      width: 300px;
      position: fixed;
      top: 90px;
      .el-card{
        .el-menu{
          border:0 !important;
        }
      }
    }
    .user_inner__right{
      height: 100%;
      width: 80%;
      position: relative;
      left: 310px;
    }
  }
}
</style>
