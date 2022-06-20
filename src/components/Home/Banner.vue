<template>
 <div class="banner">
     <el-carousel :interval="8000" :style="bannerStyle">
       <el-carousel-item v-for="item in imgList" :key="item.id">
            <img :src="item.url">
       </el-carousel-item>
     </el-carousel>
 </div>
</template>

<script>
import MainNavTop from "@/components/Home/MainNavTop";
export default {
  name: "Banner",
  components: {MainNavTop},
  data(){
    return{
      bannerStyle:{
        height:'400px'
      },
      imgList:[{
        id:'1',
        url:'http://106.55.103.152/file/image/baner/dsj.png',
        link:''
      },{
        id:'2',
        url:'http://106.55.103.152/file/image/baner/pygj.jpg',
        link:''
      },{
        id:'3',
        url:'http://106.55.103.152/file/image/baner/pypc.jpg',
        link:''
      },{
        id:'4',
        url:'http://106.55.103.152/file/image/baner/rgzn.jpg',
        link:''
      },{
        id:'5',
        url:'http://106.55.103.152/file/image/baner/zdh.jpg',
        link:''
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  width: 760px;
  height: 400px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
    .el-carousel {
      /deep/ .el-carousel__container {
        height: 100%;
        width: 100%;
        img {
          height: 400px;
          width: 760px;
        }
      }
    }
}
</style>
