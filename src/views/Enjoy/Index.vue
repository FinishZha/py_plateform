<template>
<div class="enjoy">
  <div class="enjoy_inner">
    <div class="tool_tags">
      <el-card shadow="hover">
        <ul>
          <li>
            <el-link icon="el-icon-s-platform"><a href="#/codeonline" target="_blank">在线IDE</a></el-link>
          </li>
        </ul>
      </el-card>
    </div>
    <div class="enjoy_content">
      <el-card shadow="hover">

      </el-card>
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
.enjoy{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .enjoy_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    .tool_tags{
      height: auto;
      width: 130px;
      position: fixed;
      right: 155px;
      top:82px;
      .el-card{
        height: 100%;
        min-height: 200px;
        ul{
          text-align: center;
          li{
            height: 30px;
            line-height: 30px;
            list-style: none;
            .el-link{
              a{
                text-decoration: none;
                color: #4d92e1;
              }
            }
          }
        }
      }
    }
    .enjoy_content{
      height: auto;
      .el-card{
        min-height: 1200px;
      }
    }
  }
}
</style>
