<template>
<div class="recommend_article">
  <el-card shadow="hover" header="文章推荐">
      <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
      <ul v-else>
        <li v-for="item in article" :key="item.aid" @click="jump_target(item, 'question/detail')">
          <span>{{ item.aname}}</span>
        </li>
      </ul>
  </el-card>
</div>
</template>

<script>
import {GET_ARTICLE_BY_ID} from "@/api/article";
export default {
  name: "RecommendArticle",
  data(){
    return{
      article:[]
    }
  },
  methods:{
    //获取推荐文章列表
    get_article_list(){
      let USER_ROAD = this.$store.state.User.USER_INFO.USER_ROAD
      let query = {
        modelId:USER_ROAD
      }
      GET_ARTICLE_BY_ID(query).then(res => {
        if(res.status === 200){
          this.article = res.data.message.data
        }else {
          this.$notify({
            type:'error',
            message:'获取推荐文章列表失败'
          })
        }
      })
    },
    //跳转到文章详情
    jump_target(item, url){
      console.log(item)
      this.$router.push({
        path:url,
        query: {
          aid:item.aid
        }
      })
    },
  },
  computed:{
    emptyShow() {
      return this.article.length === 0
    }
  },
  mounted() {
    this.get_article_list()
  }
}
</script>

<style lang="less" scoped>
.recommend_article{
  .el-card{
    margin-bottom: 10px;

    ul{
      li{
        list-style: none;
        height: 60px;
        line-height: 60px;
        padding-left: 10px;
        border-bottom: 1px solid #f8f8f8;
        &:hover{
          background-color: #f8f8f8;
        }
      }
    }
  }
}
</style>
