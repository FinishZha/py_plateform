<template>
  <div class="hot_news">
     <el-card shadow="hover">
          <div class="hot_news__title">
            <span>Python热点</span>
            <el-link :underline="false" @click="jump_new_list">更多</el-link>
          </div>
          <div class="hot_news__list">
            <el-empty description="暂时还没有什么..." v-if="showEmpty"></el-empty>
            <ul v-else>
              <li v-for="news in news" :key="news.nid">
                <el-link @click="jump_new_detail(news)">{{ news.ntitle }}</el-link>
              </li>
            </ul>
          </div>
     </el-card>
  </div>
</template>

<script>
import {GET_HOT_MEWS_LIST} from "@/api/news";
export default {
  name: "HotNews",
  data(){
    return {
      news:[]
    }
  },
  methods:{
    //获取热点新闻列表
    get_hot_news_list(){
      GET_HOT_MEWS_LIST().then(res=>{
        this.news = res.data.message.data
      }).catch(()=>{
        this.$notify({
          type:"error",
          message:'获取热点新闻列表失败'
        })
      })
    },
    //跳转到详情列表
    jump_new_list(){
      this.$router.push('hot')
    },
    //跳转到新闻具体页面
    jump_new_detail(news){
      this.$router.push({
        path:'hot/newsdetail',
        query:{
          newsId: news.nid
        }
      })
    }
  },
  computed:{
    showEmpty(){
      return this.news.length === 0
    }
  },
  mounted() {
    this.get_hot_news_list()
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
