<template>
<div class="code_question_list">
  <el-empty :image-size="200" description="练习题等待补充中..." v-if="emptyShow" style="margin-top: 140px"></el-empty>
  <ul v-if="!emptyShow">
    <li v-for="item in exercise" :key="item.title">
      <div class="question_card">
        <p>{{ item.title }}</p>
        <p class="describe">
          题干描述:{{ item.describe }}
        </p>
        <el-button type="primary" size="mini" plain @click="go_playground(item)">去试一试</el-button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "CodeQuestion",
  data(){
    return {
      exercise:[{
        title:'Python题干1',
        describe:"这是题干描述1"
      },{
        title:'Python题干2',
        describe:"这是题干描述2"
      }]
    }
  },
  methods:{
    //跳转到练习场
    go_playground(item){
      this.$router.push({
        path:'/codeonline',
        query:{
          title: item.title,
          describe: item.describe
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
