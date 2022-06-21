<template>
<div class="default_msg">
  <el-card shadow="hover" class="user_header">
      <div class="user_header_img">
        <img :src="USER_INFO.USER_HEAD || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" alt="用户头像">
      </div>
      <div class="user_header_road">
          <span>你选择的路线是:</span><span id="road_word"> {{ USER_INFO.USER_ROAD | road_filler}}</span>
          <el-button type="text" @click="open_dialog">修改线路</el-button>
          <el-dialog title="修改线路" :visible.sync="dialogFormVisible">
            <el-form :model="USER_INFO">
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="USER_INFO.USER_ROAD" placeholder="请选择学习线路">
                  <el-option label="Python基础" value="1"></el-option>
                  <el-option label="Python高级" value="2"></el-option>
                  <el-option label="人工智能" value="3"></el-option>
                  <el-option label="爬虫" value="4"></el-option>
                  <el-option label="大数据" value="5"></el-option>
                  <el-option label="Python后端开发" value="6"></el-option>
                  <el-option label="自动化运维" value="7"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="change_road">确 定</el-button>
            </div>
          </el-dialog>
      </div>
  </el-card>
  <el-card shadow="hover" class="user_info">
    <span class="user_info__title">基本信息</span>
    <div class="user_info__content">
      <el-form :label-position="labelPosition" label-width="80px" :model="USER_INFO">
        <el-form-item label="用户名">
          <el-input v-model="USER_INFO.USER_NAME" clearable></el-input>
        </el-form-item>
        <el-form-item label="用户ID">
          <el-input v-model="USER_INFO.USER_ID" disabled></el-input>
        </el-form-item>
        <el-form-item label="用户性别">
          <el-select v-model="USER_INFO.USER_SEX" placeholder="请选择">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="user_info_handle">
      <el-button type="primary" @click="change_user_info">确定修改</el-button>
    </div>
  </el-card>
</div>
</template>

<script>
import {CHANGE_USER_NAME, CHANGE_USER_ROAD} from "@/api/user";
export default {
  name: "Default",
  data(){
    return{
      //表单label位置
      labelPosition:'left',
      //对话框显示
      dialogFormVisible:false,
      formLabelWidth:'120px'
    }
  },
  methods:{
    //打开对话框
    open_dialog(){
      this.dialogFormVisible = true
    },
    //修改用户信息
    change_user_info(){
     this.$confirm(`确定要更改用户名为${this.USER_INFO.USER_NAME}吗？`, '提示', {
       confirmButtonText:'确定更改',
       cancelButtonText:'取消',
       type:"warning"
     }).then(_=>{
       let data = {
         userId: this.$store.state.User.USER_INFO.USER_ID,
         username: this.$store.state.User.USER_INFO.USER_NAME
       }
       CHANGE_USER_NAME(data).then(res => {
         if(res.status === 200 && res.data.message.updateCode === 1){
           this.$notify({
             type:"success",
             message:"个人信息修改成功"
           })
         }else {
           this.$notify({
             type:"error",
             message:"个人信息修改失败，请稍后重试"
           })
         }
       })
     }).catch(_=>{
       this.$notify({
         type:'info',
         message:'取消更改成功'
       })
     })
    },
    //修改用户线路
    change_road(){
      let data = {
        userId: this.$store.state.User.USER_INFO.USER_ID,
        userDirection: this.$store.state.User.USER_INFO.USER_ROAD
      }
      CHANGE_USER_ROAD(data).then(res=>{
        console.log(res)
        if(res.status === 200 && res.data.message.updateInfo.updateCode === 1){
          this.$notify({
            type:"success",
            message:`学习线路成功修改为${res.data.message.updateInfo.directionName}`
          })
        }else {
          this.$notify({
            type:"error",
            message:`学习线路修改失败`
          })
        }
        this.dialogFormVisible = false
      })
    }
  },
  computed:{
    USER_INFO() {
      return this.$store.state.User.USER_INFO;
    }
  },
  filters:{
    //标签文字转换
    road_filler(num){
      let tag_word = ''
      switch (num){
        case '1':
          tag_word = 'Python基础'
          break
        case '2':
          tag_word = 'Python高级'
          break
        case '3':
          tag_word = '人工智能'
          break
        case '4':
          tag_word = '爬虫'
          break
        case '5':
          tag_word = '大数据'
          break
        case '6':
          tag_word = 'Python后端开发'
          break
        case '7':
          tag_word = '自动化运维'
          break
        default:
          tag_word = '暂未选择'
      }
      return tag_word
    },
  }
}
</script>

<style lang="less" scoped>
.default_msg{
  margin-top: -12px;
  .el-card{
    margin-bottom: 15px;
    width: 98%;
  }
  .user_header{
    position: relative;
    top: 0;
    left: 0;
    margin-top: 2px;
    .user_header_img{
      height: 120px;
      width: 120px;
      img{
        max-width: 100%;
        max-height: 100%;
      }
    }
    .user_header_road{
      height: 50px;
      width: 300px;
      position: absolute;
      top: 90px;
      left: 150px;
      line-height: 50px;
      span{
        font-size: 16px;
        color: #a1a1a1;
      }
      #road_word{
        font-size: 18px;
        color: black;
        margin-right: 10px;
      }
    }
  }
  .user_info{
    height: 450px;
    .user_info__title{
      display: block;
      height: 30px;
      width: 100%;
      font-size: 18px;
      font-weight: bolder;
      border-bottom: 1px solid #eeeeee;
    }
    .user_info__content{
      width: 500px;
      position: relative;
      left: 40px;
      top: 40px;
    }
    .user_info_handle{
      position: relative;
      top: 60px;
      left: 40px;
    }
  }
}
</style>
