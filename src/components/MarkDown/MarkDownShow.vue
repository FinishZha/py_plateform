<template>
  <div id="markdown">
    <el-card shadow="hover">
      <mavon-editor
          v-model="value"
          :font-size="fontSize"
          id="editor" ref="editor"
          :toolbars="toolbars"
          :default-open="defaultOpen"
          :subfield="subfield"
          :toolbarsFlag=false
          :ishljs="ishljs"/>
    </el-card>
    <el-button type="primary" @click="show">获取</el-button>
  </div>
</template>

<script>
export default {
  name: "MarkDownShow",
  data() {
    return {
      value:'',
      defaultOpen:'preview',
      subfield:false,
      ishljs: true,
      fontSize:'20px',
      previewBackground:'#333',
      toolbars:{
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: false, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
      }
    }
  },
  methods:{
    show(){
      console.log(this.value)
    },
  },
  mounted() {
  }
}
</script>

<style lang="less" scoped>
#markdown {
  height: 100%;
  width: 100%;

  .el-card{
    margin: 10px;
    height: 90vh;
    position: relative;
    top: 0;
    left: 0;

    #editor{
      position: absolute;
      bottom: 40px;
      left: 0;
      width: 100%;
    }
  }
}
</style>
