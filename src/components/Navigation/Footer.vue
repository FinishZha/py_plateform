<template>
  <div class="footer">
    <div class="footer_list">
      <div class="footer_list__other">
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-width: 1600px;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  .footer_list{
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer_list__other{
        height: 120px;
        width: 900px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .el-link{
            margin: 0 30px 0 30px;
            font-size: 16px;
            height: 20px;
            width: 100px;
        }
    }
  }
  .footer_record{
    border-top: 1px solid #eeeeee;
    height: 35px;
    line-height: 35px;
    width: 100%;
    position: relative;
    left: 0;
    top: 0;
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
