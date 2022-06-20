import Vue from 'vue'
import VueRouter from 'vue-router'
import { PROJECT_NAME } from '../../project'
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
         component: () => import('@/views/VideoStudy/Index'),
         redirect: 'video/videostudy',
         children: [
           {
             path: 'videostudy',
             name:'VideoStudy',
             component:() => import('@/views/VideoStudy/VideoStudy')
           },
           {
             path: 'videodetail',
             name:'VideoDetail',
             component:() => import('@/views/VideoStudy/VudeoDetail')
           }
         ]
       },
       //热点模块
       {
         path: 'hot',
         name:'Hot',
         component: () => import('@/views/New/Index'),
         redirect: 'hot/news',
         children: [
           {
             path: 'news',
             name:'NewsList',
             component:()=>import('@/views/New/News')
           },
           {
             path: 'newsdetail',
             name:'NewsDetail',
             component:()=>import('@/views/New/NewDetails')
           }
         ]
       },
       //书库模块
       {
         path: 'book',
         name: 'Book',
         component: () => import('@/views/Book/Index'),
         redirect: 'book/booklist',
         children: [
           {
             path: 'bookdetail',
             name: 'BookDetail',
             component: () => import('@/views/Book/BookDetail')
           },
           {
             path: 'booklist',
             name:'BookList',
             component: () => import('@/views/Book/BookTable')
           }
         ]
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
         component: () => import('@/views/Question/Index'),
         redirect: 'question/list',
         children: [
           //详情页面
           {
             path: 'list',
             name: 'QuestionList',
             component: () => import ('@/views/Question/QuestionList')
           },
           //详情页面
           {
             path: 'detail',
             name: 'Detail',
             component: () => import ('@/views/Question/QuestionDetail')
           }
         ]
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
           },
           {
             path:'notebookdetail',
             name:'NotebookDetail',
             component:() => import('@/views/Notebook/NoteDetail')
           }
         ]
       },
       //问卷调查阶段
       {
         path: 'consult',
         component: ()=>import('@/views/Consult/Index')
       },
       //关于网站
       {
         path: 'about',
         name: 'About',
         component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
       },
     ]
  },
  //在线编译模块
  {
    path: '/codeonline',
    name: 'CodeOnline',
    component: () => import('@/views/CodeOnline/Index')
  },
  {
    path: '*',
    name: '404',
    component: () => import('@/views/ErrorPages/404'),
    meta: {title: '404'}
  }
]
window.document.title = PROJECT_NAME
const router = new VueRouter({
  routes
})

export default router
