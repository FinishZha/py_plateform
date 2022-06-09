<template>
    <div class="nav_header">
      <div class="logo">
        <img src="../../../public/logo.png" alt="Logo">
      </div>
      <div class="nav_header__left">
        <ul>
          <li>
            <el-link>首页</el-link>
          </li>
          <li>
            <el-link>视频学习区</el-link>
          </li>
          <li>
            <el-link>书库</el-link>
          </li>
          <li>
            <el-link>疑难解惑</el-link>
          </li>
          <li>
            <el-link>在线练习</el-link>
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
                <el-link>提问</el-link>
              </li>
              <li>
                <el-button type="primary" size="medium" icon="el-icon-c-scale-to-original" round>线路牵引</el-button>
              </li>
              <li>
                <el-link>登录 | 注册</el-link>
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
      search_data:''
    }
  },
  methods:{
    search_target(){
      let key = this.search_data
      console.log(key)
    }
  }
}
</script>

<style lang="less" scoped>
.nav_header{
  width: 100%;
  height: 100%;
  min-width: 1600px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ffffff;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
  box-shadow: #333333;
  display: flex;
  justify-content: space-between;
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
