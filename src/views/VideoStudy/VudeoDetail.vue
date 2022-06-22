<template>
<div class="video_detail">
 <div class="video_detail_inner">
   <el-card shadow="hover">
     <div class="video">
       <iframe
           :src="this.$route.query.videourl"
           scrolling="no"
           border="0"
           frameborder="no"
           framespacing="0"
           allowfullscreen="true"> </iframe>
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
    .el-card{
      .video{
        width: 100%;
        height: 600px;
        iframe{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
