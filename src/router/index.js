import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  {
    path: '/code',
    name:'CodeOnline',
    component: ()=>import('@/views/CodeOnline')
  }
]

const router = new VueRouter({
  routes
})

export default router
