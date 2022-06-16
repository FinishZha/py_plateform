<template>
  <div class="video_table">
    <el-card shadow="never">
        <div class="video_cards">
          <VideoCard v-for="item in 4" :key="item"></VideoCard>
        </div>
    </el-card>
  </div>
</template>

<script>
import VideoCard from "@/components/Video/VideoCard";
import {GET_VIDEO_LIST} from "@/api/video";
export default {
  name: "VideoTable",
  components:{
    VideoCard
  },
  methods:{
    //获取视频列表
    get_videos(){
      let data = {
        modelId:'1'
      }
      GET_VIDEO_LIST(data).then(res => {
        console.log(res)
      })
    }
  },
  mounted() {
    this.get_videos()
  }
}
</script>

<style lang="less" scoped>
.video_table{
  height: 100%;
  width: 100%;
  .el-card{
    height: 100%;
    .video_cards{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
  }
}
</style>
