<template>
  <div class="footer">
    <div class="footer_list">
      <div class="footer_list__inner">
        <ul>
          <li>
            <el-link :underline="true">联系我们</el-link></li>
          <li><el-link :underline="true">编程环境</el-link></li>
          <li><el-link :underline="true">MySQL教程</el-link></li>
          <li><el-link :underline="true">Java教程</el-link></li>
          <li><el-link :underline="true">接口规范</el-link></li>
          <li><el-link :underline="true">就业指导</el-link></li>
          <li><el-link :underline="true">关于作者</el-link></li>
        </ul>
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
      justify-content: center;
      align-items: center;
      ul{
        width: 600px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        li{
          list-style: none;
          height: 30px;
          width: 180px;
          line-height: 30px;
          text-align: center;
          margin-top: 10px;
        }
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
