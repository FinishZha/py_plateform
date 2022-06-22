<template>
<div class="video_card">
 <el-card shadow="hover">
   <div class="video_img">
     <el-image :src="videoImg" fit="fill">
       <div slot="error" class="image-slot">
         <i class="el-icon-picture-outline"></i>
       </div>
     </el-image>
   </div>
   <div class="video_title">
     <div class="video_title__inner">
       <p>{{ videoTitle }}</p>
       <span> 视频简介:{{ videoIntroduce }}</span>
     </div>
     <div class="video_title__handle">
       <el-button type="primary" size="mini" @click="go_target_url">去看看</el-button>
     </div>
   </div>
 </el-card>
</div>
</template>

<script>
export default {
  props:{
    videoImg:{
      type: String,
    },
    videoTitle:{
      type: String,
    },
    videoIntroduce:{
      type:String
    },
    videoId:{
      type:Number
    },
    videoLink:{
      type:String
    }
  },
  name: "VideoCard",
  methods:{
    go_target_url(){
      this.$router.push({
        path:'/project/video/videodetail',
        query:{
          videourl: this.$props.videoLink
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.video_card{
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-card{
    .video_img{
      width: 360px;
      height: 160px;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 15px;
      .el-image{
        max-height: 160px;
      }
    }
    .video_title{
      align-self: flex-start;
      font-size: 18px;
      height: 60px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .video_title__inner{
        p{
          margin-top: 5px;
          font-size: 16px;
        }
        span{
          color: #a1a1a1;
          display: block;
          width: 260px;
          &:nth-child(2){
            font-size: 12px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}
</style>
