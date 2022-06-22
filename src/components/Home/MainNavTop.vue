<template>
<div class="main_nav__top">
  <el-card shadow="hover">
      <div class="main_nav__content">
        <div class="main_nav__content-left">
           <ul>
             <li>
               <img src="../../../public/hot.png" width="50px">
               <el-link :underline="false" @click="wait">今日热点</el-link>
             </li>
             <li>
               <img src="../../../public/talk.png" width="50px">
               <el-link :underline="false"  href="#/project/hot">热门话题</el-link>
             </li>
             <li>
               <img src="../../../public/no.png" width="50px">
               <el-link :underline="false" @click="wait">学习积分排行</el-link>
             </li>
           </ul>
        </div>
        <div class="main_nav__content-center">
          <ul>
            <li>
              <el-link icon="el-icon-coordinate" :underline="false" @click="wait">实用工具</el-link>
            </li>
            <li>
              <el-link icon="el-icon-monitor" :underline="false" href="/#/project/question/detail?aid=4">环境配置</el-link>
            </li>
            <li>
              <el-link icon="el-icon-reading" :underline="false"  @click="user_state_check('notebook')" >笔记</el-link>
            </li>
            <li>
              <el-link icon="el-icon-suitcase" :underline="false" @click="wait">面试题</el-link>
            </li>
            <li>
              <el-link icon="el-icon-position" :underline="false" @click="user_state_check('consult')">方向导向</el-link>
            </li>
            <li>
              <el-link icon="el-icon-more" :underline="false" @click="wait">更多</el-link>
            </li>
          </ul>
        </div>
        <div class="main_nav__content-right">
          <ul>
            <li>
              <img src="../../../public/everyday.png" alt="">
              <el-link :underline="false" @click="wait">每周精选</el-link>
            </li>
            <li>
              <img src="../../../public/video.png" alt="">
              <el-link :underline="false">哔哩哔哩推荐</el-link>
            </li>
            <li>
              <img src="../../../public/gift.png" alt="">
              <el-link :underline="false" @click="wait">礼包兑换</el-link>
            </li>
            <li>
              <img src="../../../public/admin.png" alt="">
              <el-link :underline="false">联系客服</el-link>
            </li>
          </ul>
        </div>
      </div>
  </el-card>
</div>
</template>

<script>
export default {
  name: "MainNavTop",
  methods:{
    wait(){
      this.$notify({
        type:'warning',
        message:'功能维护中，敬请期待！'
      })
    },
    //登录鉴权
    user_state_check(url){
      let user_state = this.$store.state.User.USER_STATE
      if(user_state === 'OUTLINE'){
        this.$notify({
          type:'warning',
          message:'暂未登录，不可使用该功能'
        })
      }else {
        this.$router.push(url)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main_nav__top{
  .el-card{
    .main_nav__content{
      height: 80px;
      width: 94%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .main_nav__content-left{
        height: 100%;
        width: 442px;
        display: flex;
        align-items: center;
        ul{
          display: flex;
          justify-content: space-around;
          align-items: center;
          li{
            list-style: none;
            height: 50px;
            line-height: 50px;
            width: 150px;
            cursor: pointer;
            .el-link{
              position: relative;
              top: -15px;
              left: 1px;
              font-size: 15px;
            }
          }
        }
      }
      .main_nav__content-center{
        height: 100%;
        ul{
          height: 100%;
          width: 360px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          li{
            list-style: none;
            display: block;
            width: 100px;
            text-align: center;
            margin: 0 10px;
            .el-link{
              font-size: 16px;
            }
          }
        }
      }
      .main_nav__content-right{
        width: 280px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        ul{
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          li{
            list-style: none;
            width: 120px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              height: 30px;
            }
          }
        }
      }
    }
  }
}
</style>
