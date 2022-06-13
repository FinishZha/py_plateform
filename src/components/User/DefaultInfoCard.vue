<template>
<div class="default_msg">
  <el-card shadow="hover" class="user_header">
      <div class="user_header_img">
        <img :src="USER_INFO.USER_HEAD" alt="用户头像">
      </div>
      <div class="user_header_road">
          <span>你选择的路线是:</span><span id="road_word"> {{ USER_INFO.USER_ROAD  }}</span>
          <el-button type="text" @click="change_road">修改线路</el-button>
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
export default {
  name: "Default",
  data(){
    return{
      //表单label位置
      labelPosition:'left'
    }
  },
  methods:{
    //修改用户信息
    change_user_info(){
      this.$notify({
        type:"success",
        message:"个人信息修改成功"
      })
    },
    //修改用户线路
    change_road(){
      this.$notify({
        type:"success",
        message:"学习线路修改成功"
      })
    }
  },
  computed:{
    USER_INFO() {
      return this.$store.state.User.USER_INFO;
    }
  }
}
</script>

<style lang="less" scoped>
.default_msg{
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
