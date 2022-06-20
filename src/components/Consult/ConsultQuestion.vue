<template>
<div class="consult_question">
  <el-card shadow="hover">
      <div class="consult_question__inner">
        <h3>答题区</h3>
        <div class="consult_question__inner-list">
          <el-skeleton :rows="6" animated v-if="!questionEmptyShow" style="margin-top: 15px"/>
          <ul v-if="questionEmptyShow">
            <li v-for="item in start_question" :key="item.questionId">
              <div class="question_card">
                <p>{{ item.questionContent }}</p>
                <div class="choice">
                  <ul>
                    <li v-for="answer in item.select">
                      {{ answer.scode }}.{{ answer.scontent }}
                    </li>
                  </ul>
                </div>
                <div class="text"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
  </el-card>
</div>
</template>

<script>
import {GET_START_QUESTION} from "@/api/start";
export default {
  name: "ConsultQuestion",
  data(){
    return{
      start_question:[]
    }
  },
  methods:{
    //获取导向问题列表
    get_start_questions(){
      GET_START_QUESTION().then(res => {
        this.start_question = res.data.message.questionInfo
      })
    },
    //判断题目类型
    get_start_question_type(){

    }
  },
  computed:{
    questionEmptyShow(){
      return this.start_question.length
    }
  },
  mounted() {
    this.get_start_questions()
  }
}
</script>

<style lang="less" scoped>
.consult_question{
  margin-top: 10px;
  .consult_question__inner{
    h3{
      border-bottom: 1px solid #eeeeee;
      height: 35px;
    }
    .consult_question__inner-list{
      min-height: 200px;
      .el-skeleton{
        margin-top: 15px;
      }
      ul{
        li{
          list-style: none;
          min-height: 40px;
          margin-top: 10px;
          .question_card{
            min-height: 40px;
            line-height: 40px;
            padding: 15px;
            border-bottom: 1px solid #ececec;
            &:hover{
              background-color: #ececec;
            }
          }
        }
      }
    }
  }
}
</style>
