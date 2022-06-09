import Vue from 'vue'
import VueRouter from 'vue-router'
import * as path from "path";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/Index'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/Home')
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/views/Home/VideoStudy')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
    //笔记模块
  {
    path: '/notebook',
    name: 'NoteBook',
    component:() => import('@/views/Notebook/Index'),
    redirect:'/notebook/mynotebook',
    children:[
      {
        path:'mynotebook',
        name:'MyNoteBook',
        component:() => import('@/views/Notebook/NoteBookList')
      },
      {
        path:'createnotebook',
        name:'CreateNotebook',
        component:() => import('@/views/Notebook/NewNoteBook')
      }
    ]
  },
   //在线编译模块
  {
    path: '/codeonline',
    name: 'CodeOnline',
    component: () => import('@/views/CodeOnline/Index')
  },
  {
    path: '/code',
    name:'CodeOnline',
    component: ()=>import('@/views/CodeOnline/Index')
  }
]

const router = new VueRouter({
  routes
})

export default router
