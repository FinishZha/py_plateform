import Vue from 'vue'
import Vuex from 'vuex'
//导入用户模块
import User from "@/store/user";
//导入页面设置模块
import Setting from "@/store/setting";
//导入代码模块
import Code from "@/store/code";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  //Vuex模块化
  modules: {
    User,
    Setting,
    Code
  }
})
