<template>
<div class="consult">
  <div class="consult_inner">
    <ConsultInduct></ConsultInduct>
    <ConsultQuestion></ConsultQuestion>
  </div>
</div>
</template>

<script>
import ConsultInduct from "@/components/Consult/ConsultInduct";
import ConsultQuestion from "@/components/Consult/ConsultQuestion";
export default {
  name: "Index",
  components:{
    ConsultInduct,
    ConsultQuestion
  }
}
</script>

<style lang="less" scoped>
.consult{
  min-height: 800px;
  display: flex;
  justify-content: center;
  .consult_inner{
    width: 1300px;
    margin-top: 15px;
    margin-bottom: 20px;
    //background-color: #2e7cee;
  }
}
</style>
