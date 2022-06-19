<template>
  <div class="question">
    <div class="question_inner">
      <div class="question_inner__search">
        <SearchInput @search="resetList"></SearchInput>
      </div>
      <div class="question_inner__result">
        <SearchResult ref="search_result"></SearchResult>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Question/Search";
import SearchResult from "@/components/Question/SearchResult";
export default {
  name: "QuestionList",
  data(){
    return {
    }
  },
  components:{
    SearchInput,
    SearchResult
  },
  methods:{
    //重新获取提问问题列表
    resetList(word){
      this.$refs.search_result.search_target(word)
    }
  }
}
</script>

<style lang="less" scoped>
.question{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .question_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    .question_inner__search{

    }
    .question_inner__result{
      margin-top: 10px;
    }
  }
}
</style>
