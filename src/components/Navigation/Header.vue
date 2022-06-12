<template>
    <div class="nav_header">
      <div class="logo">
        <a href="#/home"><img src="../../../public/logo.png" alt="Logo"></a>
      </div>
      <div class="nav_header__left">
        <ul>
          <li>
            <el-link href="#/home">首页</el-link>
          </li>
          <li>
            <el-link href="#/video">视频学习区</el-link>
          </li>
          <li>
            <el-link href="#/book">书库</el-link>
          </li>
          <li>
            <el-link href="#/question">疑难解惑</el-link>
          </li>
          <li>
            <el-link href="#/enjoy">在线练习</el-link>
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
                <el-avatar size="medium" :src="circleUrl" v-if="SHOW_LOGIN"></el-avatar>
                <el-link v-else href="#/auth/login">登录 | 注册</el-link>
              </li>
              <li>
                <el-link>提问</el-link>
              </li>
              <li>
                <el-button type="primary" size="medium" icon="el-icon-c-scale-to-original" round>线路牵引</el-button>
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
      circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  methods:{
    search_target(){
      let key = this.search_data
      console.log(key)
    }
  },
  computed:{
    SHOW_LOGIN(){
      return this.$store.state.User.USER_STATE === 'ONLINE'
    }
  }
}
</script>

<style lang="less" scoped>
.nav_header{
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
  max-height: 70px;
  min-width: 1300px;
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
