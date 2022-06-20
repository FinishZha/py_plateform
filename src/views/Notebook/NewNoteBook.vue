<template>
<div class="notebook">
  <div class="mdeditor_header">
    <el-input placeholder="请输入笔记标题" v-model="title">
      <el-select v-model="modelId" slot="append" placeholder="请选择笔记分类">
        <el-option label="Python基础" value="1"></el-option>
        <el-option label="Python高级" value="2"></el-option>
        <el-option label="人工智能" value="3"></el-option>
        <el-option label="爬虫" value="4"></el-option>
        <el-option label="大数据" value="5"></el-option>
        <el-option label="Python后端开发" value="6"></el-option>
        <el-option label="自动化运维" value="7"></el-option>
      </el-select>
    </el-input>
    <div class="mdeditor_handle__btns">
      <el-button type="primary" round plain @click="save" icon="el-icon-upload">保存笔记</el-button>
      <el-button type="success" round @click="importCustom">手动导入</el-button>
    </div>
  </div>
  <MarkDownEditor ref="MarkDown"></MarkDownEditor>
  <el-drawer title="上传自定义笔记" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
    <el-upload class="upload-demo" :limit="1" drag action="https://jsonplaceholder.typicode.com/posts/" multiple :style="uploadStyle" :accept="fileType" :on-success="uploadSuccess" :on-error="uploadFilled" ref="upload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">可上传MarkDown、JavaScript、CSS、TXT文件，且不超过500kb</div>
    </el-upload>
  </el-drawer>
</div>
</template>

<script>
import MarkDownEditor from "@/components/MarkDown/MarkDownEditor";
import {SAVE_NOTE} from "@/api/note";
export default {
  name: "NewNoteBook",
  data(){
    return{
      title:'',
      modelId:'',
      drawer: false,
      direction: 'rtl',
      //上传组件样式
      uploadStyle:{
        position:'absolute',
        left:'50%',
        marginLeft:'-170px',
        marginTop:'50px'
      },
      //文件接收类型限制
      fileType:'.md'
    }
  },
  methods:{
    //保存笔记
    save(){
      if(this.title && this.modelId){
        this.$confirm('确定要提交笔记吗?', '提示', {
          confirmButtonText:'确定提交',
          cancelButtonClass:'取消',
          type:'warning'
        }).then(()=>{
          let data = {
            userId: this.$store.state.User.USER_INFO.USER_ID,
            modelId:this.modelId,
            title: this.title,
            content: this.$refs.MarkDown.value
          }
          SAVE_NOTE(data).then(res=>{
            if(res.status === 200 && res.data.message.addCode === 1){
              this.$notify({
                type:'success',
                message:'保存成功'
              })
              this.title = ''
              this.modelId = ''
              this.$router.back()
            }else {
              this.$notify({
                type:'error',
                message:'保存失败，请稍后重试'
              })
            }
          })
        }).catch(()=>{
          this.$notify({
            type:'info',
            message:'取消提交操作成功'
          })
        })
      }else {
        this.$notify({
          type:"warning",
          message:'请补全笔记标题和笔记类别，否则无法保存'
        })
      }
    },
    //导入笔记
    importCustom(){
      this.drawer = true
    },
    //上传自定义抽屉关闭操作
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    //上传成功事件
    uploadSuccess(){
      this.$notify({
        type:"success",
        message:'上传成功'
      })
    },
    //上传文件失败
    uploadFilled(){
      this.$notify({
        type:"error",
        message:'上传失败'
      })
    }
  },
  components:{
    MarkDownEditor
  }
}
</script>

<style lang="less" scoped>
.notebook{
  .mdeditor_header{
    width: 96%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    .el-input{
      .el-select{
        width: 150px;
      }
    }
    .mdeditor_handle__btns{
      width: 220px;
      height: auto;
      margin-left: 30px;
      display: flex;
      justify-content: space-around;
    }

  }
}
</style>
