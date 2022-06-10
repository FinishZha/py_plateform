import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //首页功能模块
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
