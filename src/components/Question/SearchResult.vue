<template>
  <div class="search_result">
    <el-card shadow="never" class="search_result">
      <el-empty description="你要问的问题没找到，请换个问题试试吧" v-if="!questionEmptyShow"></el-empty>
      <ul v-if="questionEmptyShow">
        <li v-for="item in question" :key="item.title" @click="jump_target(item)">
          <div class="question_card">
            <p>{{ item.title }}</p>
            <p class="describe">
              题干描述:{{ item.describe }}
            </p>
          </div>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  data(){
    return {
      question:[{
        title:'问题',
        describe:"这是题干描述1"
      },{
        title:'问题1',
        describe:"这是题干描述2"
      }]
    }
  },
  methods:{
    //跳转到文章详情
    jump_target(item){
      console.log(item)
    }
  },
  components:{

  },
  computed:{
    //题目是否为空
    questionEmptyShow(){
      return this.question.length
    }
  }
}
</script>

<style lang="less" scoped>
.search_result{
  ul{
    li{
      list-style: none;
      height: 120px;
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
