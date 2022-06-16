<template>
  <div class="video_card">
  <el-card shadow="hover">
    <div class="left_img">
    </div>
    <h2><el-link href="#/project/video">视频专区</el-link></h2>
  </el-card>
  </div>
</template>

<script>
export default {
  name: "VideoCard"
}
</script>

<style lang="less" scoped>
.video_card{
  height: 150px;
  width: 320px;
  .el-card{
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .left_img{
      height: 46px;
      width: 46px;
      background-image: url("../../../public/videos.png");
      position: relative;
      top: 0;
      left: -80px;
    }
    h2{
      position: absolute;
      top: 64px;
      left: 120px;
      .el-link{
        font-weight: bolder;
        font-size: 22px;
      }
    }
  }
}
</style>
