<template>
  <div class="question">
    <div class="question_inner">
      <div class="question_inner__search">
        <SearchInput></SearchInput>
      </div>
      <div class="question_inner__result">
        <SearchResult></SearchResult>
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from "@/components/Question/Search";
import SearchResult from "@/components/Question/SearchResult";
export default {
  name: "QuestionList",
  components:{
    SearchInput,
    SearchResult
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
