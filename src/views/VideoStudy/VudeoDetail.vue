<template>
<div class="video_detail">
 <div class="video_detail_inner">
   <el-card shadow="hover">
     <div class="video">
        <video src=""></video>
     </div>
     <div class="catalogue">

     </div>
   </el-card>
 </div>
</div>
</template>

<script>
export default {
  name: "VudeoDetail"
}
</script>

<style lang="less" scoped>
.video_detail{
  min-height: 750px;
  display: flex;
  justify-content: center;
  .video_detail_inner{
    width: 1300px;
    margin-bottom: 20px;
  }
}
</style>
