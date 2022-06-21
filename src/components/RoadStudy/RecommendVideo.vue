<template>
<div class="recommend_video">
  <el-card shadow="hover" header="视频推荐">
    <el-empty description="啥也没有..." v-if="emptyShow"></el-empty>
    <div class="video_list" v-if="!emptyShow">
      <VideoCard v-for="video in video" :key="video.vid" :video-img="video.vpicture" :video-title="video.vname" :video-introduce="video.vintroduce" :video-id="video.vid" :video-link="video.vpath"></VideoCard>
    </div>
  </el-card>
</div>
</template>

<script>
import VideoCard from "@/components/Video/VideoCard";
import {GET_VIDEO_LIST} from "@/api/video";
export default {
  name: "RecommendVideo",
  data(){
    return {
      video:[]
    }
  },
  methods:{
    get_video_list(){
      let USER_ROAD = this.$store.state.User.USER_INFO.USER_ROAD
      let query = {
        modelId:USER_ROAD
      }
      GET_VIDEO_LIST(query).then(res => {
        if(res.status === 200){
          this.video = res.data.message.data
        }else {
          this.$notify({
            type:'error',
            message:'获取推荐视频失败'
          })
        }
      })
    }
  },
  computed:{
    emptyShow(){
      return this.video.length === 0
    }
  },
  components:{
    VideoCard
  },
  mounted() {
    this.get_video_list()
  }
}
</script>

<style lang="less" scoped>
.recommend_video{
  .el-card{
    .video_list{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px
    }
  }
}
</style>
