<template>
  <div class="search_result" v-loading="loading">
    <el-card shadow="never" class="search_result">
      <el-empty description="你要问的问题没找到，请换个问题试试吧" v-if="!questionEmptyShow"></el-empty>
      <ul v-if="questionEmptyShow">
        <el-skeleton :rows="12" animated  v-if="skeletonShow"/>
        <li v-for="item in question" :key="item.title" @click="jump_target(item, 'detail')" v-if="!skeletonShow">
          <div class="question_card" v-if="!skeletonShow">
            <p>{{ item.atitle }}</p>
            <p class="describe">
              {{ item.aname }}
            </p>
          </div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
import {GET_QUESTIONS_LIST} from "@/api/question";
import {SEARCH_TARGET} from "@/api/article";
export default {
  name: "SearchResult",
  data(){
    return {
      question:[{
        acontent:'',
        atitle:'',
        aname:''
      }],
      skeletonShow: true,
      loading:false
    }
  },
  methods:{
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
    //获取所有文章
    get_question_list(){
      GET_QUESTIONS_LIST().then(res=>{
        if(res.data.statusCode === 200){
          this.question = res.data.message.data
          this.skeletonShow = false
        }else {
          this.$notify({
            type:"error",
            message:'问题列表获取失败，请刷新'
          })
        }
      })
    },
    //关键字搜索
    search_target(word){
      this.loading = true
      let query = {
        word: word
      }
      SEARCH_TARGET(query).then(res=>{
        if(res.status === 200 && res.data.statusCode === 200){
          this.$notify({
            type:'success',
            message:`成功为您筛选出以下${res.data.message.data.length}条结果`
          })
          this.question = res.data.message.data
          this.loading = false
        }else {
          this.$notify({
            type:"error",
            message:'搜索异常，请稍后重试'
          })
        }
      })
    }
  },
  components:{

  },
  computed:{
    //题目是否为空
    questionEmptyShow(){
      return this.question.length
    },
  },
  mounted() {
    this.get_question_list()
  }
}
</script>

<style lang="less" scoped>
.search_result{
  ul{
    li{
      list-style: none;
      min-height: 120px;
      border-bottom: 1px solid #eeeeee;
      &:hover{
        background-color: #f8f8f8;
      }
      .question_card{
        font-size: 18px;
        padding-top: 20px;
        padding-left: 20px;
        position: relative;
        top: 0;
        left: 0;
        .describe{
          margin-top: 10px;
          font-size: 14px;
          color: #a1a1a1;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
