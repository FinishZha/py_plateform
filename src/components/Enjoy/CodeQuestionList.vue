<template>
<div class="code_question_list">
  <el-empty :image-size="200" description="练习题等待补充中..." v-if="emptyShow" style="margin-top: 140px"></el-empty>
  <ul v-if="!emptyShow">
    <li v-for="item in exercise" :key="item.title">
      <div class="question_card">
        <p>{{ item.questionContent }}</p>
        <p class="describe">
          题干描述:{{ item.questionContent }}
        </p>
        <el-button type="primary" size="mini" plain @click="go_playground(item)">去试一试</el-button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import {GET_EXERCISES} from "@/api/code";

export default {
  name: "CodeQuestion",
  data(){
    return {
      exercise:[]
    }
  },
  methods:{
    //跳转到练习场
    go_playground(item){
        let user_state = this.$store.state.User.USER_STATE
        if(user_state === 'OUTLINE'){
          this.$notify({
            type:'warning',
            message:'暂未登录，不可使用该功能'
          })
        }else {
          this.$router.push({
            path:'/codeonline',
            query:{
              title: item.questionContent,
              describe: item.questionContent
            }
          })
        }
    },
    //获取题目列表
    get_exercises(){
      let query = {
        modelId:'1'
      }
      GET_EXERCISES(query).then(res => {
        console.log( res.data.message.questionInfo)
        if(res.status === 200){
            this.exercise = res.data.message.questionInfo
        }
      })
    }
  },
  components:{
  },
  computed:{
    emptyShow(){
      return this.exercise.length <= 0
    }
  },
  mounted() {
    this.get_exercises()
  }
}
</script>

<style lang="less" scoped>
.code_question_list{
  ul{
    margin-top: 20px;
    li{
      list-style: none;
      height: 100px;
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
        .el-button{
          position: absolute;
          right: 20px;
          top: 60px;
        }
        .describe{
          position: relative;
          top: 25px;
          left: 10px;
          font-size: 14px;
          color: #a1a1a1;
        }
      }
    }
  }
}
</style>
