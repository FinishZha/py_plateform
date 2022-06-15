<template>
<div class="consult">
  <div class="consult_inner">
    <ConsultQuestion></ConsultQuestion>
  </div>
</div>
</template>

<script>
import ConsultQuestion from "@/components/Consult/ConsultQuestion";
export default {
  name: "Index",
  components:{
    ConsultQuestion
  }
}
</script>

<style lang="less" scoped>
.consult{
  min-height: 800px;
  display: flex;
  justify-content: center;
  //background-color: #2e7cee;
  .consult_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    background-color: #2e7cee;
  }
}
</style>
