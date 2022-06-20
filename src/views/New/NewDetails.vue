<template>
  <div class="detail">
      <div class="detail_inner">
        <el-card shadow="hover">
          <div slot="header" class="detail_inner__title" @click="back">
            <el-icon class="el-icon-back" style="font-size: 20px"></el-icon>
            <span style="margin-left: 10px">热点详情</span>
          </div>
          <div class="detail_inner__main">
            <MarkDownShow ref="NewDetail"></MarkDownShow>
          </div>
        </el-card>
      </div>
  </div>
</template>

<script>
import MarkDownShow from "@/components/MarkDown/MarkDownShow";
import {GET_HOT_MEWS_DETAIL} from "@/api/news";
export default {
  name: "Details",
  data(){
    return{
      news:''
    }
  },
  methods:{
    //返回上一页
    back(){
      this.$router.back()
    },
    //获取指定的新闻
    get_news_detail(){
      let query = {
        newsId: this.$route.query.newsId
      }
      GET_HOT_MEWS_DETAIL(query).then(res=>{
        this.$refs.NewDetail.value = res.data.message.data.ncontent
      })
    }
  },
  components:{
    MarkDownShow
  },
  mounted() {
    this.get_news_detail()
  }
}
</script>

<style lang="less" scoped>
.detail{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .detail_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 15px;
    .el-card{
      .detail_inner__title{
          .el-icon-back{
            width: 20px;
            height: 20px;
            cursor: pointer;
            &:hover{
              background-color: #ececec;
            }
          }
      }
    }
  }
}
</style>
