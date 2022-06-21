<template>
<div class="page_content_end">
  <el-card shadow="hover">
    <div class="page_content__end-title">
      <h3>问题精选</h3>
    </div>
    <div class="page_content__end-main">
        <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
        <ul v-if="!emptyShow">
          <li v-for="item in articleList" :key="item.aid" @click="jump_target(item,'question/detail')">
            <el-link href="">{{item.aname}}</el-link>
          </li>
        </ul>
    </div>
    <div class="page_content__end-end">
      <el-link icon="el-icon-bottom" href="#/project/question">更多</el-link>
    </div>
  </el-card>
</div>
</template>

<script>
import {GET_HOT_QUESTION} from "@/api/question";
export default {
  name: "PageContentEnd",
  data(){
    return{
      articleList:[]
    }
  },
  methods:{
    //获取问题精选
    get_hot_question(){
      GET_HOT_QUESTION().then(res=>{
        this.articleList = res.data.message.data
      }).catch(()=>{
        this.$notify({
          type:"error",
          message:'获取问题精选列表失败'
        })
      })
    },
    //跳转到文章详情
    jump_target(item, url){
      console.log(item)
      this.$router.push({
        path:url,
        query: {
          aid:item.aid
        }
      })
    },
  },
  computed:{
    emptyShow(){
      return this.articleList.length === 0
    }
  },
  mounted() {
    this.get_hot_question()
  }
}
</script>

<style lang="less" scoped>
  .page_content_end{
    min-height: 180px;
    width: 100%;
    .el-card{
      height: 100%;
      .page_content__end-title{
        h3{
          height: 35px;
          border-bottom: 1px solid #eeeeee;
        }
      }
      .page_content__end-main{
        min-height: 120px;
        margin-top: 20px;
        ul{
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;
          li{
            display: inline-block;
            margin-top: 5px;
            margin-left: 10px;
            list-style: none;
            height: 40px;
            width: 610px;
            line-height: 40px;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;
            text-overflow: ellipsis;
            .el-link{
              font-size: 17px;
              padding-left: 15px;
            }
            &:hover{
              background-color: #ececec;
            }
          }
        }
      }
      .page_content__end-end{
        width: 100%;
        margin-top: 10px;
        text-align: center;
        .el-link{
          font-size: 18px;
        }
      }
    }
  }
</style>
