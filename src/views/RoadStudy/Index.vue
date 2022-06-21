<template>
<div class="road_study">
  <div class="road_study__inner">
    <RecommendBook></RecommendBook>
    <RecommendArticle></RecommendArticle>
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
    //路线文字格式化
    road_word(key){
      let tag_word = ''
      switch (key){
        case '1':
          tag_word = 'Python基础'
          break
        case '2':
          tag_word = 'Python高级'
          break
        case '3':
          tag_word = '人工智能'
          break
        case '4':
          tag_word = '爬虫'
          break
        case '5':
          tag_word = '大数据'
          break
        case '6':
          tag_word = 'Python后端开发'
          break
        case '7':
          tag_word = '自动化运维'
          break
        default:
          tag_word = '暂未选择'
      }
      return tag_word
    },
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
          message:`系统检测您选择的学习路线是${this.road_word(this.USER_ROAD)},将为您推荐此类内容`
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
  min-height: 750px;
  height: auto;
  display: flex;
  justify-content: center;
  .road_study__inner{
    width: 1300px;
    //margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
