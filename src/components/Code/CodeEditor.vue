<template>
  <div class="in-coder-panel">
    <div class="code_header">
      <div class="language">
        <span class="span">请选择语言</span>
        <el-select class="code-mode-select" v-model="mode" @change="changeMode" size="mini">
          <el-option v-for="mode in modes" :key="mode.value" :label="mode.label" :value="mode.value">
          </el-option>
        </el-select>
      </div>
      <div class="theme">
        <span class="span">切换主题</span>
        <el-select class="theme-select" v-model="options.theme" @chang="changeTheme" size="mini">
          <el-option v-for="theme in themes" :key="theme.value" :label="theme.label" :value="theme.value"></el-option>
        </el-select>
      </div>
    </div>
    <div class="code_body">
      <textarea ref="textarea" v-model="code" id="code"></textarea>
    </div>
    <div class="code_footer">
      <div class="code_footer__buttons">
        <el-button type="primary" size="mini" @click="runCode">运行</el-button>
        <el-button type="primary" size="mini" @click="clean">清除代码</el-button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// 引入全局实例
import _CodeMirror from 'codemirror'
// 核心样式
import 'codemirror/lib/codemirror.css'
//代码自动补全样式
import 'codemirror/addon/hint/show-hint.css'
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/cobalt.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abbott.css'
import 'codemirror/theme/ayu-mirage.css'
// 需要引入具体的语法高亮库才会有对应的语法高亮效果
// 但 vue 貌似没有无法在实例初始化后再动态加载对应 JS ，所以此处才把对应的 JS 提前引入
//引入智能提示插件
import 'codemirror/addon/hint/show-hint'
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/python/python.js'

// 尝试获取全局实例
const CodeMirror = window.CodeMirror || _CodeMirror

export default {
  name: 'in-coder',
  props: {
    // 外部传入的内容，用于实现双向绑定
    value: String,
    // 外部传入的语法类型
    language: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      // 内部真实的内容
      code: '',
      // 默认的语法类型
      mode: 'Python',
      // 编辑器实例
      coder: null,
      // 默认配置
      options: {
        // 缩进格式
        tabSize: 2,
        //智能缩进
        smartIndent:true,
        // 启用行槽中的代码折叠
        foldGutter: true,
        // 自动聚焦
        autofocus: true,
        // 主题，对应主题库 JS 需要提前引入
        theme: 'abbott',
        // 显示行号
        lineNumbers: true,
        line: true,
        //括号匹配
        matchBrackets: true,
        hintOptions: {
          tables: {
            users: ['name', 'score', 'birthDate'],
            countries: ['name', 'population', 'size']
          }
        }
      },
      // 支持切换的语法高亮类型，对应 JS 已经提前引入
      // 使用的是 MIME-TYPE ，不过作为前缀的 text/ 在后面指定时写死了
      modes: [{
        value: 'x-python',
        label: 'Python'
      },{
        value: 'javascript',
        label:'Javascript'
      }],
      //这里是主题模块
      themes:[{
        value:'ayu-mirage',
        label:'ayu-mirage'
      },{
        value: 'abbott',
        label: 'abbott'
      },{
        value: '3024-night',
        label: '3024-night'
      }],
    }
  },
  mounted () {
    // 初始化
    this._initialize()
  },
  methods: {
    // 初始化
    _initialize () {
      // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
      this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options)
      // 编辑器赋值
      this.coder.setValue(this.value || this.code)

      // 支持双向绑定
      this.coder.on('change', (coder) => {
        this.code = coder.getValue()

        if (this.$emit) {
          this.$emit('input', this.code)
        }
      })
      // 尝试从父容器获取语法类型
      if (this.language) {
        // 获取具体的语法类型对象
        let modeObj = this._getLanguage(this.language)

        // 判断父容器传入的语法是否被支持
        if (modeObj) {
          this.mode = modeObj.label
        }
      }
    },
    // 获取当前语法类型
    _getLanguage (language) {
      // 在支持的语法类型列表中寻找传入的语法类型
      return this.modes.find((mode) => {
        // 所有的值都忽略大小写，方便比较
        let currentLanguage = language.toLowerCase()
        let currentLabel = mode.label.toLowerCase()
        let currentValue = mode.value.toLowerCase()
        // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
        return currentLabel === currentLanguage || currentValue === currentLanguage
      })
    },
    //获取当前主题
    _getTheme (theme) {
      return this.themes.find((themes)=>{
        //所有值都忽略大小写
        let currentTheme = theme.toLocaleString()
        let currentLabel = themes.label.toLowerCase()
        let currentValue = themes.value.toLowerCase()
        // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
        return currentLabel === currentTheme || currentValue === currentTheme
      })
    },
    // 更改模式
    changeMode (val) {
      // 修改编辑器的语法配置
      this.coder.setOption('mode', `text/${val}`)
      // 获取修改后的语法
      let label = this._getLanguage(val).label.toLowerCase()
      // 允许父容器通过以下函数监听当前的语法值
      this.$emit('language-change', label)
    },
    //更改主题
    changeTheme(val) {
      this.coder.setOption('options.theme', `${val}`)
      //获取修改后的语法
      let label = this._getTheme(val).label.toLowerCase()
      //允许父容器通过以下函数监听当前语法值
      this.$emit('theme-change', label)
    },
    //清除代码
    clean(){
      this.code = ''
      this.coder.setValue(this.value || this.code)
    },
    //运行代码
    runCode(){
      console.log(this.code)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/stylus">
.in-coder-panel{
  width: 100%;
  min-width: 450px;
  //max-width: 950px;
  max-width: 98%;
  min-height: 550px;
  //background-color: #fff;
  margin: 3px;
  .code_header{
    width: 100%;
    height: 38px;
    line-height: 35px;
    box-sizing: border-box;
    border: 1px solid #cecdcd;
    display: flex;
    justify-content: space-between;
    .language{
      .span{
        font-size: 12px;
        margin-right: 10px;
        margin-left: 10px;
        display: inline-block;
      }
      .code-mode-select{
        width: 100px;
        height: 30px;
      }
    }
    .theme{
       .span{
         font-size: 12px;
         margin-right: 10px;
       }
      .el-select{
        margin-right: 10px;
      }
    }
  }
  .code_body{
    width: 100%;
    height: 85%;
    .CodeMirror{
      height:100%;
      z-index: 1;
    }
  }
  .code_footer{
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-sizing: border-box;
    border: 1px solid #cecdcd;
    display: flex;
    justify-content: center;
    align-items: center;
    .code_footer__buttons{
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px;
    }
  }
}
</style>
