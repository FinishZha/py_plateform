<template>
<div class="page_content_end">
  <el-card shadow="hover">
    <div class="page_content__end-title">
      <h3>文章精选</h3>
    </div>
    <div class="page_content__end-main">
        <ul>
          <li v-for="item in articleList" :key="item.id">
            <el-link href="">{{item.title}}</el-link>
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
export default {
  name: "PageContentEnd",
  data(){
    return{
      articleList:[
        {
          id:'1',
          title:'精选文章1'
        },{
          id:'12',
          title:'精选文章2'
        },{
          id:'3',
          title:'精选文章3'
        },{
          id:'4',
          title:'精选文章4'
        },{
          id:'5',
          title:'精选文章5'
        },{
          id:'6',
          title:'精选文章6'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  .page_content_end{
    min-height: 300px;
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
        min-height: 180px;
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
            height: 90px;
            width: 610px;
            line-height: 90px;
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
