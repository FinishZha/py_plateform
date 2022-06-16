<template>
  <div class="hot_news">
     <el-card shadow="hover">
          <div class="hot_news__title">
            <span>Python热点</span>
            <el-link :underline="false">更多</el-link>
          </div>
          <div class="hot_news__list">
            <ul>
              <li v-for="(news,index) in six_hot_list" :key="news.id">
                <el-link :href="news.link">{{ news.title }}</el-link>
              </li>
            </ul>
          </div>
     </el-card>
  </div>
</template>

<script>
export default {
  name: "HotNews",
  data(){
    return {
      news:[
        {
          id:'1',
          title:'这是新闻一',
          link:'/'
        },{
          id:'2',
          title:'这是新闻二',
          link:'/'
        },{
          id:'3',
          title:'这是新闻三',
          link:'/'
        },{
          id:'4',
          title:'这是新闻四',
          link:'/'
        },{
          id:'5',
          title:'这是新闻五',
          link:'/'
        },{
          id:'6',
          title:'这是新闻六',
          link:'/'
        }
      ]
    }
  },
  computed:{
    six_hot_list(){
      return this.news
    }
  }
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
