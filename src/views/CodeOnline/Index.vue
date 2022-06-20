<template>
<div class="code_online">
  <div class="code_online__left">
    <CodeMessage></CodeMessage>
  </div>
  <div class="code_online__right">
    <CodeEditor></CodeEditor>
    <CodeResult></CodeResult>
  </div>
</div>
</template>

<script>
import CodeEditor from "@/components/Code/CodeEditor";
import CodeResult from "@/components/Code/CodeResult";
import CodeMessage from "@/components/Code/CodeMessage";
export default {
  name: "CodeOnline",
  components:{
    CodeResult,
    CodeEditor,
    CodeMessage
  }
}
</script>

<style lang="less" scoped>
.code_online{
  height: 100%;
  min-height: 900px;
  width: 100%;
  display: flex;
  justify-content: space-around;
    .code_online__left{
      flex: 0;
      height: 100%;
    }
    .code_online__right{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
}
</style>
