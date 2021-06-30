import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    redirect:"main"
  },
  {
    path:"/main",
    name:"main",
    component:Main,
    meta:{
      title:"首页"
    },
    children:[
      {
        path:"/topics",
        name:"topics",
        component:()=>import('../views/Topic/index.vue'),
        meta:{
          title:"题库"
        }
      },
      {
        path:"/addTopic",
        name:"addTopic",
        component:()=>import('../views/AddTopic'),
        meta:{
          title:"添加试题"
        }
      },
      {
        path:"/check",
        name:"check",
        component:()=>import('../views/Check'),
        meta:{
          title:"试题审核"
        }
      },
      {
        path:"/subject",
        name:"subject",
        component:()=>import('../views/Subject'),
        meta:{
          title:"科目管理"
        }
      }
    ]    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
