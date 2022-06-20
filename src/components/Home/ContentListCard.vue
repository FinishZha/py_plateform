<template>
<div class="content_list_card">
  <el-card shadow="hover">
    <div class="content_list__card-title">
      <h3>视频专区</h3>
    </div>
    <el-empty description="啥也没有" v-if="showEmpty"></el-empty>
    <div class="content_list__card-main" v-if="!showEmpty">
      <VideoCard v-for="item in 6" :key="item"></VideoCard>
    </div>
    <div class="content_list__card-end">
      <el-link icon="el-icon-bottom" href="#/project/video">更多</el-link>
    </div>
  </el-card>
</div>
</template>

<script>
import VideoCard from "@/components/Video/VideoCard";
export default {
  name: "ContentListCard",
  data(){
    return{
      videoList:[]
    }
  },
  components:{
    VideoCard
  },
  computed:{
    showEmpty(){
      return this.videoList.length === 0
    }
  }
}
</script>

<style lang="less" scoped>
.content_list_card{
  width: 100%;
  min-height: 400px;
  .el-card{
    height: 100%;
    .content_list__card-title{
      h3{
        height: 35px;
        border-bottom: 1px solid #eeeeee;
      }
    }
    .content_list__card-main{
      height: 100%;
      margin-top: 15px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
    }
    .content_list__card-end{
      width: 100%;
      margin-top: 10px;
      text-align: center;
      .el-link{
        font-size: 18px;
      }
    }
  }
}
</style>
