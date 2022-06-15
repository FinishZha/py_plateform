import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/project/home'
  },
  //project
  {
     path: '/project',
     name: 'Project',
     component: () => import('@/views/Project/Index'),
     redirect: '/project/home',
     children:[
       //首页功能模块
       {
         path: 'home',
         name: 'Home',
         component: () => import('@/views/Home/Index'),
       },
       //视频专区
       {
         path: 'video',
         name: 'Video',
         component: () => import('@/views/VideoStudy/Index')
       },
       //书库模块
       {
         path: 'book',
         name: 'Book',
         component: () => import('@/views/Book/Index')
       },
       //在线练习模块
       {
         path: 'enjoy',
         name: 'Enjoy',
         component:() => import('@/views/Enjoy/Index')
       },
       //线路指导
       {
         path:'roadstudy',
         name: 'RoadStudy',
         component:() => import('@/views/RoadStudy/Index')
       },
       //疑难解惑模块
       {
         path: 'question',
         name:'Question',
         component: () => import('@/views/Question/Index')
       },
       //权限认证模块
       {
         path: 'auth',
         name: 'Authorization',
         component: () => import('@/views/User/Authorization'),
         redirect: '/project/auth/login',
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
       },
       //用户信息
       {
         path: 'user',
         name: 'User',
         component: ()=>import('@/views/User/Usercenter')
       },
       //关于网站
       {
         path: 'about',
         name: 'About',
         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
       },
       //笔记模块
       {
         path: 'notebook',
         name: 'NoteBook',
         component:() => import('@/views/Notebook/Index'),
         redirect:'/project/notebook/mynotebook',
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
       //问卷调查阶段
       {
         path: 'consult',
         component: ()=>import('@/views/Consult/Index')
       }
     ]
  },
  //在线编译模块
  {
    path: '/codeonline',
    name: 'CodeOnline',
    component: () => import('@/views/CodeOnline/Index')
  }
]

const router = new VueRouter({
  routes
})

export default router
