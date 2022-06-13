<template>
<div class="video_study">
  <div class="video_study__inner">
    <div class="video_study__inner-nav">

    </div>
    <div class="video_study__inner-table">

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style lang="less" scoped>
.video_study{
  min-height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  .video_study__inner{
    width: 1300px;
    //background-color: #20a0ff;
    margin-top: 15px;
    .video_study__inner-nav{
      height: 250px;
      background-color: yellow;
    }
    .video_study__inner-table{
      height: 800px;
      background-color: blueviolet;
    }
  }
}
</style>
