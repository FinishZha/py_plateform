<template>
  <div id="markdown">
      <mavon-editor v-model="value"
          :font-size="fontSize"
          :default-open="defaultOpen"
          :subfield="subfield"
          :box-shadow=false
          :toolbarsFlag=false
          previewBackground="#ffffff"
          id="md"
          :ishljs="ishljs"/>
  </div>
</template>

<script>
export default {
  props:{
    content:{
      type:String
    }
  },
  name: "MarkDownShow",
  data() {
    return {
      value: this.$props.content,
      defaultOpen:'preview',
      subfield:false,
      ishljs: true,
      fontSize:'30px',
      previewBackground:'#333'
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
  #md{
    margin-top: 20px;
    z-index: 1;
    min-height: 800px;
  }
}
</style>
