<template>
<div class="notebook">
  <div class="mdeditor_header">
    <el-input placeholder="请输入标题" v-model="title">
      <template slot="prepend">笔记标题</template>
    </el-input>
    <div class="mdeditor_handle__btns">
      <el-button type="primary" round plain @click="save">保存笔记</el-button>
      <el-button type="success" round @click="importCustom">手动导入</el-button>
    </div>
  </div>
  <MarkDownEditor></MarkDownEditor>
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
export default {
  name: "NewNoteBook",
  data(){
    return{
      title:'',
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
      // fileType:['.html', '.txt', '.css', '.js', '.md']
      fileType:'.md'
    }
  },
  methods:{
    //保存笔记
    save(){
      this.$notify({
        type:"success",
        message:'笔记保存成功'
      })
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
  },
  //离开前进行咨询
  beforeRouteLeave(to, from, next) {
    // next(false)
    this.$confirm('正在离开本页面，本页面内所有未保存数据都会丢失', '警告', {
      distinguishCancelAndClose: true,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(()=>{
      next()
    }).catch(()=>{
      window.history.go(1)
    })
  }
}
</script>

<style lang="less" scoped>
.notebook{
  .mdeditor_header{
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;

    .mdeditor_handle__btns{
      width: 220px;
      height: auto;
      margin-left: 10px;
      display: flex;
      justify-content: space-around;
    }

  }
}
</style>
