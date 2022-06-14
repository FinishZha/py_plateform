<template>
<div class="question">
  <div class="question_inner">
      <div class="question_inner__search">
          <SearchInput></SearchInput>
      </div>
  </div>
</div>
</template>

<script>
import SearchInput from "@/components/Question/Search";
export default {
  name: "Index",
  components:{
    SearchInput
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
  }
}
</style>
