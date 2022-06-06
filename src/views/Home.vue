<template>
  <div class="home">
    <Bar></Bar>
    <CodeEditor></CodeEditor>
  </div>
</template>
<script>
import Bar from "@/components/Navigation/Bar";
import CodeEditor from "@/components/Code/CodeEditor";
export default {
  name: 'Home',
  data(){
    return{
      msg:{
        sender:'Jack',
        receiver:'Rose'
      },
    }
  },
  methods:{
    logLine(){
      console.log('---------------分割线---------------')
    },
    logMsg(newVal, oldVal){
      console.log(newVal)
    }
  },
  components: {
    Bar,
    CodeEditor
  },
  mounted() {

  },
  watch:{
    msg:{
      handler:'logMsg',
      deep:true,
      immediate:true
    },
    'msg.sender':['logLine', 'logMsg']
  }
}
</script>
