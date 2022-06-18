<template>
  <div id="markdown">
      <mavon-editor
          v-model="value"
          :font-size="fontSize"
          :subfield=subfieldShow
          :toolbarsFlag= toolbarOpen
          default-open="preview"
          id="editor"
          ref="editor"
          :box-shadow="box_shadow"
          :toolbars="toolbars"
          :ishljs="ishljs"/>
  </div>
</template>

<script>
export default {
  props:{
    note_word:{
      type: String,
    },
    box_shadow:{
      type: Boolean,
      default: false
    },
    //工具栏是否打开
    toolbarOpen:{
      type:Boolean,
      default: true
    },
    //是否单栏
    subfieldShow:{
      type:Boolean,
      default: true
    }
  },
  name: "MarkDownEditor",
  data() {
    return {
      value: this.$props.note_word,
      ishljs: true,
      fontSize:'20px',
      previewBackground:'#ffffff',
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
        fullscreen: false, // 全屏编辑
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

  },
  mounted() {
  },
  computed:{
  }
}
</script>

<style lang="less" scoped>
#markdown {
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 888;
  top: 0;
  left: 0;

    #editor{
      position: absolute;
      top: 0;
      left: 0;
      height: 98%;
      width: 100%;
    }
}
</style>
