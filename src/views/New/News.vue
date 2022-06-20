<template>
<div class="new">
    <div class="new_inner">
        <el-card shadow="never">
          <div class="news_title" @click="back">
            <el-icon class="el-icon-back" style="font-size: 20px"></el-icon>
            <span id="title">Python资讯</span>
          </div>
          <div class="news_main">
            <el-empty description="暂时还没有什么..." v-if="showEmpty"></el-empty>
            <ul>
              <li @click="jump_new_detail(news)" v-for="news in newsList" :key="news.nid">{{ news.ntitle }}</li>
            </ul>
          </div>
        </el-card>
    </div>
</div>
</template>

<script>
import {GET_ALL_NEWS} from "@/api/news";
export default {
  name: "News",
  data(){
    return{
      newsList:[]
    }
  },
  methods:{
    //返回上一页
    back(){
      this.$router.back()
    },
    //跳转到新闻具体页面
    jump_new_detail(news){
      this.$router.push({
        path:'newsdetail',
        query:{
          newsId: news.nid
        }
      })
    },
    //获取所有新闻
    get_all_news(){
      GET_ALL_NEWS().then(res => {
        this.newsList = res.data.message.data
      }).catch(()=>{
        this.$notify({
          type:"warning",
          message:'获取热点列表失败'
        })
      })
    }
  },
  computed:{
    showEmpty(){
      return this.newsList.length === 0
    }
  },
  mounted() {
    this.get_all_news()
  }
}
</script>

<style lang="less" scoped>
.new{
  min-height: 750px;
  display: flex;
  justify-content: center;
  .new_inner{
    width: 1300px;
    margin-bottom: 20px;
    .el-card{
      .news_title{
        height: 40px;
        border-bottom: 1px solid #eeeeee;
        .el-icon-back{
          font-size: 30px;
          &:hover{
            background-color: #eeeeee;
          }
          #title{
            margin-left: 20px;
          }
        }
      }
      .news_main{
        ul{
          margin-top: 10px;
          li{
            list-style: none;
            display: block;
            height: 40px;
            width: 100%;
            margin-top: 5px;
            line-height: 40px;
            &:hover{
              background-color: #f8f8f8;
            }
          }
        }
      }
    }
  }
}
</style>
