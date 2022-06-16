<template>
 <div class="notebooklist">
   <div class="notebook_list__inner">
     <el-card shadow="hover">
        <div class="notebook_list__inner-title">
          <el-button type="primary" icon="el-icon-edit" round plain @click="go_create">记个笔记</el-button>
        </div>
       <div class="notebook_list__inner-main">

       </div>
     </el-card>
   </div>
 </div>
</template>

<script>
export default {
  name: "NoteBookList",
  methods:{
    go_create(){
      this.$router.replace('/project/notebook/createnotebook')
    }
  }
}
</script>

<style lang="less" scoped>
.notebooklist{
  display: flex;
  justify-content: center;
  .notebook_list__inner{
    width: 1300px;
    .el-card{
      .notebook_list__inner-title{
          display: flex;
          justify-content: flex-end;
          border-bottom: 1px solid #eeeeee;
          .el-button{
            margin-bottom: 10px;
          }
      }
      .notebook_list__inner-main{
        height: 300px;
        //background-color: #20a0ff;
      }
    }
  }
}
</style>
