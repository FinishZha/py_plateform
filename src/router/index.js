import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //首页功能模块
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home/Index')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/VideoStudy/Index')
  },
  //书库模块
  {
    path: '/book',
    name: 'Book',
    component: () => import('@/views/Book/Index')
  },
  //疑难解惑模块
  {
    path: '/question',
    name:'Question',
    component: () => import('@/views/Question/Index')
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
  //在线练习模块
  {
    path: '/enjoy',
    name: 'Enjoy',
    component:() => import('@/views/Enjoy/Index')
  },
  //关于网站
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  //在线编译模块
  {
    path: '/codeonline',
    name: 'CodeOnline',
    component: () => import('@/views/CodeOnline/Index')
  },
    //权限认证模块
  {
    path: '/auth',
    name: 'Authorization',
    component: () => import('@/views/User/Authorization'),
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component:()=>import('@/components/Auth/Login')
      },
      {
        path: 'register',
        name: 'Register',
        component:()=>import('@/components/Auth/Register')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
