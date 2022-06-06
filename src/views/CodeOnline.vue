<template>
<div class="code_online">
  <div id="code_editor">
    <textarea></textarea>
  </div>
  <div id="code_res"></div>
</div>
</template>

<script>
export default {
  name: "CodeOnline"
}
</script>

<style lang="less" scoped>
.code_online{
  width: 100%;
  height: 100%;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;

  #code_editor{
    width: 50%;
    height: 100%;
  }

  #code_res{
    width: 50%;
    height: 800px;
    background-color: grey;
  }
}
</style>
