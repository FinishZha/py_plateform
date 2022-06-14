<template>
<div class="search">
  <el-card shadow="never" class="search_input">
    <el-input placeholder="请输入你想要搜索的问题" v-model="search_data" class="input-with-select">
      <el-button slot="append" icon="el-icon-search">问一下</el-button>
    </el-input>
    <div class="hot_question">
      <ul>
        <li v-for="question in hot_questions" :key="question.title"><el-link :underline="false" :href="question.url">{{ question.title }}</el-link></li>
      </ul>
    </div>
  </el-card>
  <el-card shadow="never" class="search_result">
    <el-empty description="你要问的问题没找到，请换个问题试试吧"></el-empty>
  </el-card>
</div>
</template>

<script>
export default {
  name: "SearchInput",
  data(){
    return{
      search_data:'',
      hot_questions:[
        {
          'title':'Python如何安装',
          'url':''
        },{
          'title':'ZeroDivisionError除数为0如何解决',
          'url':''
        },{
          'title':'AttributeError尝试访问未知的对象属性无效怎么办',
          'url':''
        },{
          'title':'第三方包安装成功，但是pycharm引入（import）失败',
          'url':''
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  .search_input{
    .hot_question{
      ul{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 40px;
        line-height: 40px;
        margin-top: 5px;
        li{
          display: block;
          list-style: none;
          height: 40px;
          margin: 0 10px;
          .el-link{
            color: #a1a1a1;
            font-size: 12px;
            &:hover{
              color: #4f8fee;
            }
          }
        }
      }
    }
  }
  .search_result{
    margin-top: 10px;
  }
}
</style>
