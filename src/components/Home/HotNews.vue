<template>
  <div class="hot_news">
     <el-card shadow="hover">
          <div class="hot_news__title">
            <span>Python热点</span>
            <el-link>更多</el-link>
          </div>
          <div class="hot_news__list">
            <ul>
              <li v-for="(news) in 6">
                <el-link>{{ news }}</el-link>
              </li>
            </ul>
          </div>
     </el-card>
  </div>
</template>

<script>
export default {
  name: "HotNews"
}
</script>

<style lang="less" scoped>
.hot_news{
  margin-top: 10px;
  .el-card{
    width: 528px;
    height: 400px;
   .hot_news__title{
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      span{
        font-weight: bolder;
      }
    }
    .hot_news__list{
      width: 100%;
      ul{
        margin-top: 20px;
        li{
          height: 30px;
          line-height: 30px;
          list-style: none;
          padding: 10px;
          .hot_number{
            display: inline-block;
            height: 20px;
            width: 20px;
            line-height: 20px;
            text-align: center;
          }
          .el-link{
            font-size: 17px;
          }
        }
      }
    }
  }
}
</style>
