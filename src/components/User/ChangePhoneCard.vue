<template>
  <el-card shadow="hover">
    <el-form :label-position="labelPosition" label-width="80px" inline>
      <el-form-item label="新手机号">
        <el-input size="mini" v-model="newPhone"></el-input>
      </el-form-item>
    </el-form>
    <div class="phone_handle">
      <el-button type="primary" size="mini" @click="change_phone">确定修改</el-button>
      <el-button type="warning" size="mini" @click="clean">清除输入</el-button>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "Phone",
  data(){
    return{
      labelPosition:'left',
      newPhone:''
    }
  },
  methods:{
    //提交修改手机号
    change_phone(){
      if(this.newPhone.length === 11){
        this.$notify({
          type:'success',
          message:'手机号成功修改为:'+this.newPhone
        })
      }else {
        this.$notify({
          type:'warning',
          message:'手机号格式不正确'
        })
      }
    },
    clean(){
      this.newPhone = ''
    }
  }
}
</script>

<style lang="less" scoped>
.el-card{
  .el-form{
    width: 400px;
    margin-left: 40px;
    .el-form-item{
      width: 500px;
      .el-input{
        width: 300px;
      }
    }
  }
  .phone_handle{
    height: 40px;
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
  }
}
</style>
