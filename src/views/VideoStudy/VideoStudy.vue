<template>
  <div class="video_study">
    <div class="video_study__inner">
      <div class="video_study__inner-nav">
        <el-card shadow="hover">
          <div class="direction">
            <span>方向:</span>
            <div class="direction_list">
              <ul>
                <li><el-link @click="change_module(1)">全部</el-link></li>
                <li><el-link @click="change_module(1)">Python基础</el-link></li>
                <li><el-link @click="change_module(2)">Python高级</el-link></li>
                <li><el-link @click="change_module(3)">大数据</el-link></li>
                <li><el-link @click="change_module(4)">爬虫</el-link></li>
                <li><el-link @click="change_module(5)">Python后端开发</el-link></li>
                <li><el-link @click="change_module(6)">人工智能</el-link></li>
                <li><el-link @click="change_module(7)">自动化</el-link></li>
              </ul>
            </div>
          </div>
          <div class="class">
            <span>类别:</span>
            <div class="class_list">
              <ul>
                <li><el-link>全部</el-link></li>
                <li><el-link>入门</el-link></li>
                <li><el-link>初级</el-link></li>
                <li><el-link>中级</el-link></li>
                <li><el-link>高级</el-link></li>
              </ul>
            </div>
          </div>
        </el-card>
      </div>
      <div class="video_study__inner-table">
        <VideoTable ref="videoTable"></VideoTable>
      </div>
      <div class="video_study__inner-pagination">
        <PaginationCard></PaginationCard>
      </div>
    </div>
  </div>
</template>

<script>
import VideoTable from "@/components/Video/VideoTable";
import PaginationCard from "@/components/Video/PaginationCard";
export default {
  name: "Index",
  components:{
    VideoTable,
    PaginationCard
  },
  methods:{
    change_module(id){
      this.$refs.videoTable.get_videos(id)
    }
  }
}
</script>

<style lang="less" scoped>
.video_study{
  min-height: 750px;
  width: 100%;
  display: flex;
  justify-content: center;
  .video_study__inner{
    width: 1300px;
    .video_study__inner-nav{
      margin-bottom: 10px;
      .el-card{
        height: 100%;
        .direction{
          height: 40px;
          line-height: 40px;
          margin-bottom: 10px;
          span{
            font-size: 14px;
            font-weight: bolder;
          }
          .direction_list{
            position: relative;
            top: 0;
            left: 0;
            ul{
              display: flex;
              justify-content:space-between;
              position: absolute;
              top: -40px;
              left: 20px;
              li{
                list-style: none;
                display: block;
                height: 40px;
                width: 100px;
                text-align: center;
                font-size: 14px;
                color: #a1a1a1;
              }
            }
          }
        }
        .class{
          height: 40px;
          line-height: 40px;
          span{
            font-size: 14px;
            font-weight: bolder;
          }
          .class_list{
            position: relative;
            top: 0;
            left: 0;
            ul {
              display: flex;
              justify-content: space-between;
              position: absolute;
              top: -40px;
              left: 20px;
              li {
                list-style: none;
                display: block;
                height: 40px;
                width: 100px;
                text-align: center;
                font-size: 14px;
                color: #a1a1a1;
              }
            }
          }
        }
      }
    }
    .video_study__inner-table{
      margin-bottom: 10px;
    }
    .video_study__inner-pagination{
      margin-bottom: 15px;
    }
  }
}
</style>
