<template>
  <el-select class="theme-select" v-model="theme"  size="mini">
    <el-option v-for="theme in themes" :key="theme.value" :label="theme.label" :value="theme.value"></el-option>
  </el-select>
</template>

<script>
export default {
  name:'Test',
  data(){
    return{
      theme:'',
      options:{
        theme:''
      },
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
  }
}
</script>
