<template>
  <div class="footer">
    <div class="footer_list">
      <div class="footer_list__inner">
        <el-link :underline="false">联系我们</el-link>
        <el-link :underline="false">编程环境</el-link>
        <el-link :underline="false">MySQL教程</el-link>
        <el-link :underline="false">Java教程</el-link>
        <el-link :underline="false">接口规范</el-link>
        <el-link :underline="false">就业指导</el-link>
        <el-link :underline="false">关于作者</el-link>
      </div>
    </div>
    <div class="footer_record">
      <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34172102000085" target="_blank"><img src="../../../public/ba.png" alt=""><span>皖公网安备 34172102000085号</span></a>
      <span> | 皖ICP备2021016370号-1</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="less" scoped>
.footer{
  height: 100%;
  .footer_list{
    height: 140px;
    display: flex;
    justify-content: center;
    .footer_list__inner{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      .el-link{
        min-width: 160px;
        font-size: 16px;
      }
    }
  }
  .footer_record{
    border-top: 1px solid #eeeeee;
    height: 30px;
    line-height: 36px;
    width: 100%;
    text-align: center;
    a{
      text-decoration: none;
      img{
        position: relative;
        left: -4px;
        top: 4px;
      }
      span{
        font-size: 14px;
        color: #a1a1a1;
        &:hover{
          color: #20a0ff;
        }
      }
    }
    span{
      color:#a1a1a1;
      font-size: 14px;
    }
  }
}
</style>
