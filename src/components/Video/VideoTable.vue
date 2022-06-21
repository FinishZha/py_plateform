<template>
  <div class="video_table">
    <el-card shadow="never">
        <el-empty description="暂时没有视频，可以去其他区看看..." v-if="showEmpty"></el-empty>
        <div class="video_cards" v-if="!showEmpty">
          <VideoCard v-for="item in videoList"
                     key="item.id"
                     :video-img="item.vpicture"
                     :video-title="item.vname"
                     :video-introduce="item.vintroduce"
                     :video-link="item.vpath"
                     :video-id="item.vid"></VideoCard>
        </div>
    </el-card>
  </div>
</template>

<script>
import VideoCard from "@/components/Video/VideoCard";
import {GET_VIDEO_LIST} from "@/api/video";
export default {
  name: "VideoTable",
  data(){
    return {
      videoList:[]
    }
  },
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
        if(res.status === 200){
          this.videoList = res.data.message.data
        }else {
          this.$notify({
            type:'error',
            message:'获取视频列表失败'
          })
        }
      })
    }
  },
  computed:{
    showEmpty(){
      return this.videoList.length === 0
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
