<template>
<div class="consult_card">
  <el-card shadow="hover">
      <div class="python_include">
        <h3 id="py_title">Python介绍</h3>
        <div class="python_banner">
          <el-carousel :interval="4000" type="card" height="290px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image :src="item.url">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="python_content">
          <ul>
            <li>
              <h4>简单</h4>
              <span>Python是一种代表简单主义思想的语言。简单将贯穿Python语言的全程，阅读一个良好的Python程序就感觉像是在读英语一样。它使你能够专注于解决问题而不是去搞明白语言本身。</span>
            </li>
            <li>
              <h4>易学</h4>
              <span>由于它的开源本质，Python已经被移植在许多平台上（经过改动使它能够工作在不同平台上）。</span>
            </li>
            <li>
              <h4>速度快</h4>
              <span>Python 的底层是用 C 语言写的，很多标准库和第三方库也都是用 C 写的，运行速度非常快。</span>
            </li>
            <li>
              <h4>可移植性</h4>
              <span>Python 的底层是用 C 语言写的，很多标准库和第三方库也都是用 C 写的，运行速度非常快。</span>
            </li>
          </ul>
        </div>
      </div>
  </el-card>
</div>
</template>p

<script>
export default {
  name: "ConsultQuestion",
  data(){
    return {
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
.python_include{
  #py_title{
    height: 35px;
    border-bottom: 1px solid #eeeeee;
  }
  .python_banner{
    margin-top: 25px;
  }
  .python_content{
    width: 100%;
    margin-top: 20px;
    ul{
      width: 1200px;
      margin-left: 40px;
      li{
        height: 70px;
        font-size: 16px;
      }
    }
  }
}
</style>
