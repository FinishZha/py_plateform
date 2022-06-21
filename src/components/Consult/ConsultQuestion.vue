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
                  <el-input v-model='answer[item.questionId.toString()]'></el-input>
                </div>
                <div class="text"></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="consult_question__inner-button">
          <el-button type="primary" icon="el-icon-s-promotion" @click="post_question">提交问卷</el-button>
        </div>
      </div>
  </el-card>
</div>
</template>

<script>
import {GET_START_QUESTION} from "@/api/start";
import {CHANGE_USER_ROAD} from "@/api/user";

export default {
  name: "ConsultQuestion",
  data(){
    return{
      start_question:[],
      answer:[]
    }
  },
  methods:{
    //获取导向问题列表
    get_start_questions(){
      GET_START_QUESTION().then(res => {
        this.start_question = res.data.message.questionInfo
      })
    },
    //修改用户线路
    change_user_road(){
      let data = {
        userId: this.$store.state.User.USER_INFO.USER_ID,
        userDirection: '1'
      }
      CHANGE_USER_ROAD(data).then(res=>{
        console.log(res)
        if(res.status === 200 && res.data.message.updateInfo.updateCode === 1){
          this.$notify({
            type:"success",
            message:`学习线路成功修改为${res.data.message.updateInfo.directionName}`
          })
        }else {
          this.$notify({
            type:"error",
            message:`学习线路修改失败`
          })
        }
        this.dialogFormVisible = false
      })
    },
    //提交问题
    post_question(){
      if(this.answer.length > 0){
        this.$confirm(`你选择的线路是Python初级,系统将主动为您提供此类资源，如需更改，请前往“个人中心”调整`, '提示', {
          cancelButtonText:'取消',
          confirmButtonText:'OK',
          type:'success'
        }).then(()=>{
          this.$router.push('roadstudy')
        }).catch(()=>{
          this.push('roadstudy')
        }).finally(()=>{
          this.change_user_road()
        })
      }else {
        this.$notify({
          type:'error',
          message:'线路判断失败:答题不完整'
        })
      }
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
            border-bottom: 1px solid #eeeeee;
            &:hover{
              background-color: #f8f8f8;
            }
          }
        }
      }
    }
    .consult_question__inner-button{
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .el-button{
        margin-top: 15px;
        margin-right: 20px;
      }
    }
  }
}
</style>
