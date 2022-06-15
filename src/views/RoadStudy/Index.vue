<template>
<div class="road_study">
  <div class="road_study__inner">
    <RecommendArticle></RecommendArticle>
    <RecommendBook></RecommendBook>
    <RecommendTool></RecommendTool>
    <RecommendVideo></RecommendVideo>
  </div>
</div>
</template>

<script>
import RecommendArticle from "@/components/RoadStudy/RecommendArticle";
import RecommendBook from "@/components/RoadStudy/RecommendBook";
import RecommendTool from "@/components/RoadStudy/RecommendTool";
import RecommendVideo from "@/components/RoadStudy/RecommendVideo";
export default {
  name: "Index",
  data(){
    return {

    }
  },
  components:{
    RecommendArticle,
    RecommendBook,
    RecommendTool,
    RecommendVideo
  },
  methods:{
    //进入页面提示功能
    page_notice(){
      if (this.USER_ROAD === ''){
        this.$alert('系统检测到您没有选择学习路线，您将进入一段小测试，定制您的学习之路', '提示', {
          confirmButtonText:'前往答题',
          callback: action => {
            this.$router.replace('/project/consult')
          }
        })
      }else {
        this.$notify({
          type:'success',
          message:`系统检测您选择的学习路线是${this.USER_ROAD},将为您推荐此类内容`
        })
      }
    }
  },
  computed:{
    USER_ROAD(){
      return this.$store.state.User.USER_INFO.USER_ROAD
    }
  },
  mounted() {
    this.page_notice()
  }
}
</script>

<style lang="less" scoped>
.road_study{
  min-height: 800px;
  height: auto;
  display: flex;
  justify-content: center;
  .road_study__inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
