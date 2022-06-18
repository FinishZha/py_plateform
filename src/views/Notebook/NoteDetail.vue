<template>
<div class="note_detail">
  <div class="note_detail_inner">
    <el-card shadow="never">
      <div class="btn">
        <div class="left_btn">
          <el-button type="warning" size="mini" icon="el-icon-back" plain @click="back_once">返回上一页</el-button>
        </div>
        <div class="right_btn">
          <el-button type="primary" size="mini" plain @click="open_change" icon="el-icon-brush">{{ subfieldShow ? '取消修改':'修改' }}</el-button>
          <transition name="el-zoom-in-center">
            <el-button type="success" size="mini" icon="el-icon-s-promotion" plain v-if="subfieldShow" @click="update_note">保存</el-button>
          </transition>
        </div>
      </div>
      <div class="note_msg">
          <div class="old_msg">
            <transition name="el-zoom-in-bottom">
              <h2 v-if="!subfieldShow">{{ note.ntitle }}</h2>
            </transition>
          </div>
        <transition name="el-zoom-in-top">
          <el-input placeholder="请输入笔记标题" v-model="note.ntitle" v-if="subfieldShow"></el-input>
        </transition>
      </div>
    </el-card>
    <div class="out_md" v-loading="loading">
      <MarkDownEditor :subfield-show="subfieldShow" :toolbar-open="toolbarOpen" ref="MarkDown"></MarkDownEditor>
    </div>
  </div>
</div>
</template>

<script>
import MarkDownEditor from "@/components/MarkDown/MarkDownEditor";
import {UPDATE_NOTE, GET_TARGET_NOTE} from "@/api/note";
export default {
  name: "NoteDetail",
  data(){
    return{
      subfieldShow:false,
      toolbarOpen:false,
      note:{
        ntitle:''
      },
      loading: false
    }
  },
  components:{
    MarkDownEditor
  },
  methods:{
    //返回上一页
    back_once(){
      this.$router.back()
    },
    //修改页面的打开与关闭
    open_change(){
      this.subfieldShow = !this.subfieldShow
      this.toolbarOpen = !this.toolbarOpen
    },
    //获取特定笔记
    get_target_note(){
      this.loading = true
      let data = {
        noteId: this.$route.query.noteId
      }
      GET_TARGET_NOTE(data).then(res => {
        if(res.status === 200 && res.data.statusCode === 200){
          this.note = res.data.message.data
          this.$refs.MarkDown.value = this.note.ncontent
        }else {
          this.$notify({
            type:'error',
            message:'获取笔记内容失败，请稍后刷新重试'
          })
        }
      }).finally(()=>{
        this.loading = false
      })
    },
    //修改笔记
    update_note(){
      console.log(this.note)
      let data = {
        userId: this.$store.state.User.USER_INFO.USER_ID,
        noteId: this.$route.query.noteId,
        title: this.note.ntitle,
        content: this.$refs.MarkDown.value
      }
      UPDATE_NOTE(data).then(res=>{
        if(res.status === 200 && res.data.message.updateCode === 1){
          this.$notify({
            type:"success",
            message:'更新笔记成功'
          })
          this.subfieldShow = false
          this.toolbarOpen = false
          this.get_target_note()
        }else {
          this.$notify({
            type:"error",
            message:'更新笔记失败'
          })
        }
      })
    }
  },
  mounted() {
    this.get_target_note()
  }
}
</script>

<style lang="less" scoped>
.note_detail{
  display: flex;
  justify-content: center;
  .note_detail_inner{
    width: 1800px;
    .el-card{
      margin-bottom: 10px;
      .btn{
        display: flex;
        justify-content: space-between;
      }
      .note_msg{
        .old_msg{}
        margin-top: 15px;
        .el-input{
          .el-select{
            width: 150px;
          }
        }
      }
      .out_md{
        margin-bottom: 10px;
      }
    }
  }
}
</style>
