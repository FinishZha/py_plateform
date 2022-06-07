<template>
  <div class="code_message">
      <div class="define" v-if="!listenDefineShow">
          <div class="question">
            <span class="question_span">
                {{ question }}
            </span>
          </div>
      </div>
      <div class="handle_button">
        <i class="el-icon-arrow-right" v-if="listenDefineShow" @click="defineChage"></i>
        <i class="el-icon-arrow-left" v-if="!listenDefineShow" @click="defineChage"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: "CodeMessage",
  data(){
    return{
      //define默认打开状态,Vux后报废
      defineIsShow: true,
      //编程题目
      question:'这里是在线编程的题目指导区'
    }
  },
  components:{

  },
  methods:{
    //define边打开或许关闭操作
    defineChage(){
      this.$store.commit('CHANGE_ONLINE_DEFINE_OPEN')
    }
  },
  computed:{
    listenDefineShow(){
      return this.$store.state.Setting.ONLINE_DEFINE_OPEN
    }
  }
}
</script>

<style lang="less" scoped>
.code_message{
  position: relative;
  height: 100%;
  min-height: 865px;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;

  .define{
    height: 100%;
    width: 92%;
    min-width: 300px;
    box-sizing: border-box;
    border-right: 1px solid #eee;
    background-color: #ececec;
    .question{
      padding: 20px;
      .question_span{
        display: block;
        word-wrap: break-word;
        font-size: 28px;
      }
    }
  }

  .handle_button{
    height: 100%;
    min-width: 50px;
    display: flex;
    background-color: #2e7cee;
    justify-content: center;
    align-items: center;
    border-right: 1px solid #eee;
    box-sizing: border-box;

    .el-icon-arrow-right,.el-icon-arrow-left{
      font-size: 25px;
      font-weight: bolder;
      color: #ffffff;

      &:hover{
        background-color: #cecdcd;
      }
    }
  }
}
</style>
