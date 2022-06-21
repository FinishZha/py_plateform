<template>
    <div class="nav_header">
      <div class="logo">
        <a href="#/project/home"><img src="../../../public/logo.png" alt="Logo"></a>
      </div>
      <div class="nav_header__left">
        <ul>
          <li>
            <el-link href="#/project/home">首页</el-link>
          </li>
          <li>
            <el-link href="#/project/video">视频学习区</el-link>
          </li>
          <li>
            <el-link href="#/project/book">书库</el-link>
          </li>
          <li>
            <el-link href="#/project/question">疑难解惑</el-link>
          </li>
          <li>
            <el-link href="#/project/enjoy">在线练习</el-link>
          </li>
        </ul>
      </div>
      <div class="search_input">
        <el-input
            placeholder="请输入搜索内容"
            v-model="search_data"
            prefix-icon="el-icon-search"
            size="small"
            @keyup.enter.native="search_target"
            clearable>
        </el-input>
      </div>
      <div class="nav_header__right">
          <div class="nav_header__right-in">
            <ul>
              <li>
                <el-link v-if="!SHOW_LOGIN" href="#/project/auth/login">登录 | 注册</el-link>
                <el-dropdown placement="bottom" @command="handleCommand" v-if="SHOW_LOGIN">
                  <el-avatar size="medium" :src="USER_INFO.USER_HEAD || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" v-if="SHOW_LOGIN"></el-avatar>
                  <el-dropdown-menu slot="dropdown">
                    <template>
                      <el-dropdown-item disabled>我的积分: <span>{{ USER_INFO.USER_POINT || 0 }}</span></el-dropdown-item>
                      <el-dropdown-item icon="el-icon-user-solid" :command="beforeHandleCommand('jump', '/project/user')">个人中心</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-collection" :command="beforeHandleCommand('jump', '/project/notebook')">我的笔记</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-present" disabled>积分商城</el-dropdown-item>
                      <el-dropdown-item icon="el-icon-back" :command="beforeHandleCommand('leave', )">退出登录</el-dropdown-item>
                    </template>
                  </el-dropdown-menu>
                </el-dropdown>
              </li>
              <li>
                <el-button type="primary" size="medium" icon="el-icon-c-scale-to-original" @click="url_jump('/project/roadstudy')" round>线路牵引</el-button>
              </li>
            </ul>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      search_data:'',
    }
  },
  methods:{
    search_target(){
      let key = this.search_data
      console.log(key)
    },
    //路由跳转
    url_jump(target){
      let USER_STATE = this.$store.state.User.USER_STATE
      if (USER_STATE === 'ONLINE'){
        this.$router.push(target.toString())
      }else {
        this.$notify({
          type:"warning",
          message:'你还未登录，无法体验此功能'
        })
      }
    },
    //返回新的command对象
    beforeHandleCommand(handle,command){
      return {
        'handle': handle,
        'command':command
      }
    },
    //下拉菜单事件
    handleCommand(command){
      switch (command.handle){
        case 'jump':
          this.$router.push(command.command)
              break
        case  'leave':
          this.$store.commit('USER_LEAVE')
          window.localStorage.clear()
          this.$notify({
            type:'success',
            message:'退出成功'
          })
              break
      }
    }
  },
  computed:{
    SHOW_LOGIN(){
      return this.$store.state.User.USER_STATE === 'ONLINE'
    },
    USER_INFO(){
      return this.$store.state.User.USER_INFO
    }
  }
}
</script>

<style lang="less" scoped>
.nav_header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  max-height: 70px;
  background-color: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 3px 1px 4px 1px #ececec !important;
  .logo{
    img{
      height: 40px;
      margin:15px 15px 15px 35px;
    }
  }
  .nav_header__left{
    height: 100%;
    width: 600px;
    min-width: 450px;
    ul{
      width: 100%;
      height: 100%;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        .el-link{
          font-size: 18px;
        }
      }
    }
  }
  .search_input{
    min-width: 400px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav_header__right{
    height: 100%;
    width:400px;
    min-width: 300px;
    .nav_header__right-in{
      height: 100%;
      ul{
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        li{
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
