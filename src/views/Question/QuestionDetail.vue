<template>
  <div class="detail">
    <div class="detail_inner">
      <el-card shadow="hover">
        <div slot="header" class="detail_inner__title" @click="back">
          <el-icon class="el-icon-back" style="font-size: 20px"></el-icon>
          <span style="margin-left: 10px">文章详情</span>
        </div>
        <div class="detail_inner__main">
          <el-empty :image-size="200" description="啥也没有..." v-if="!emptyShow && !skeletonShow"></el-empty>
          <el-skeleton :rows="10" animated v-if="skeletonShow"/>
          <div class="detail_inner__main-content">
                <h1>{{ detailContent.atitle }}</h1>
                <MarkDownShow ref="newDetail"></MarkDownShow>
<!--            //:content="detailContent.acontent"-->
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {GET_QUESTIONS_DETAIL} from "@/api/question";
import MarkDownShow from "@/components/MarkDown/MarkDownShow";
export default {
  name: "QuestionDetails",
  data(){
    return{
      skeletonShow:false,
      detailContent:{}
    }
  },
  components:{
    MarkDownShow
  },
  methods:{
    //返回上一页
    back(){
      this.$router.back()
    },
    //获取文章详情
    get_detail_content(){
      this.skeletonShow = true
      let data = {
        articleId: this.$route.query.aid
      }
      GET_QUESTIONS_DETAIL(data).then((res)=>{
        if(res.request.status === 200){
          this.skeletonShow = false
          this.detailContent = res.data.message.data
          this.$refs.newDetail.value = res.data.message.data.acontent
        }
      })
    }
  },
  computed:{
    emptyShow(){
      return this.detailContent != null
    }
  },
  mounted() {
    this.get_detail_content()
  }
}
</script>

<style lang="less" scoped>
.detail{
  min-height: 750px;
  display: flex;
  justify-content: center;
  .detail_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 15px;
    .el-card{
      min-height: 800px;
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
      .detail_inner__main{
        height: 100%;
        .detail_inner__main-content{
          h1{
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
