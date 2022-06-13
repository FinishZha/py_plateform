<template>
 <div class="banner">
     <el-carousel :interval="8000" :style="bannerStyle">
       <el-carousel-item v-for="item in imgList" :key="item">
            <img :src="item">
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
      imgList:[
          'https://www.py.cn/src/img/index/pybanner.png',
          'https://www.py.cn/src/img/index/new3.png',
          'https://www.py.cn/src/img/index/ibanner.jpg',
          'https://www.py.cn/src/img/index/new2.png',
      ]
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
