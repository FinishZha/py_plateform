<template>
 <div class="notebooklist">
   <div class="notebook_list__inner">
     <el-card shadow="hover">
        <div class="notebook_list__inner-title">
          <h3>我的笔记</h3>
          <el-button type="primary" icon="el-icon-edit" round plain @click="url_jump('/project/notebook/createnotebook')">记个笔记</el-button>
        </div>
       <div class="notebook_list__inner-main" v-loading="loading">
         <el-empty description="当前笔记列表为空，快去做个笔记吧..." v-if="emptyShow"></el-empty>
         <ul v-if="!emptyShow">
           <li v-for="item in note_book_list" :key="item.nid">
             <div class="notebook_card" v-if="!emptyShow">
               <div class="note_top">
                 <span>{{ item.ntitle }}</span>
                 <div class="btn">
                   <el-button type="warning" size="mini" plain @click="delete_note(item.nid)">删除</el-button>
                 </div>
               </div>
               <div class="note_msg">
                 <div class="model">
                   <span id="model_word">模块</span>
                   <el-tag size="mini">{{ item.nmodel | tag_filler }}</el-tag>
                 </div>
                 <div class="date">
                    发布时间:&nbsp;&nbsp;&nbsp;{{ item.createTime | time_filler}}
                 </div>
               </div>
             </div>
           </li>
         </ul>
       </div>
     </el-card>
   </div>
 </div>
</template>

<script>
import {GET_NOTE_LIST, DELETE_NOTE} from "@/api/note";
export default {
  name: "NoteBookList",
  data(){
    return{
      note_book_list:[{
        nid:'',
        ntitle:'',
        nmodel:'',
        createTime:''
      }],
      loading: false
    }
  },
  methods:{
    //路由跳转
    url_jump(target){
      let USER_STATE = this.$store.state.User.USER_STATE
      if (USER_STATE === 'ONLINE'){
        this.$router.push(target.toString())
      }else {
        this.$notify({
          type:"warning",
          message:'你还未登录，无法体验此功能'
        })
      }
    },
    //根据获取的用户ID查找笔记
    get_note_list(){
      this.loading = true
      let query = {
        userId: this.$store.state.User.USER_INFO.USER_ID
      }
      GET_NOTE_LIST(query).then((res)=>{
        if(res.status === 200){
          this.note_book_list = res.data.message.data
          this.loading = true
        }else {
          this.$notify({
            type:"error",
            message:'获取笔记列表失败，请刷新'
          })
        }
        this.loading = false
      })
    },
    //删除笔记
    delete_note(id){
      this.$confirm('确定要删除此笔记么？', '提示', {
        confirmButtonText:'忍心删除',
        cancelButtonClass:'留着',
        type:"warning"
      }).then(()=>{
        let data = {
          noteId: id
        }
        DELETE_NOTE(data).then(res=>{
          console.log(res)
          if(res.status === 200 && res.data.message.deleteCode === 1){
            this.$notify({
              type:"success",
              message:'删除成功'
            })
            this.get_note_list()
          }else {
            this.$notify({
              type:"error",
              message:'删除失败，请稍后重试'
            })
          }
        })
      }).catch(()=>{
        this.$notify({
          type:"info",
          message:'取消操作'
        })
      })
    }
  },
  computed:{
    //空检测
    emptyShow(){
      return this.note_book_list.length <= 0
    }
  },
  filters:{
    //标签文字转换
    tag_filler(num){
      let tag_word = ''
      switch (num){
        case 1:
          tag_word = 'Python基础'
            break
        case 2:
          tag_word = 'Python高级'
            break
        case 3:
          tag_word = '人工智能'
            break
        case 4:
          tag_word = '爬虫'
            break
        case 5:
          tag_word = '大数据'
            break
        case 6:
          tag_word = 'Python后端开发'
            break
        case 7:
          tag_word = '自动化运维'
            break
        default:
          tag_word = '未分类'
      }
      return tag_word
    },
    //时间转换
    time_filler(time){
      return time.split('T')[0]
    }
  },
  mounted(){
    this.get_note_list()
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
          height: 50px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #eeeeee;
          align-items: center;
          margin-top: -10px;
          .el-button{
          }
      }
      .notebook_list__inner-main{
        height: 300px;
        ul{
          li{
            list-style: none;
            min-height: 120px;
            border-bottom: 1px solid #f8f8f8;
            &:hover{
              background-color: #f8f8f8;
            }
            .notebook_card{
              font-size: 18px;
              padding-top: 20px;
              padding-left: 20px;
              position: relative;
              top: 0;
              left: 0;
              .note_top{
                height: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .btn{
                  margin-right: 20px;
                }
              }
              .note_msg{
                height: 30px;
                margin-top: 30px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .date{
                  height: 20px;
                  color: #a1a1a1;
                  font-size: 14px;
                  margin-right: 20px;
                }
                .model{
                  width: 200px;
                  #model_word{
                    color: #a1a1a1;
                    font-size: 14px;
                  }
                  .el-tag{
                    margin-left: 6px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
