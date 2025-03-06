import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/info/query',
    name: '业务类型信息查询',
    component: () => import('../views/InfoQuery.vue')
  },
  {
    path: '/info/add',
    name: '业务类型信息新增',
    component: () => import('../views/InfoAdd.vue')
  },
  {
    path: '/info/modify',
    name: '业务类型信息修改',
    component: () => import('../views/InfoModify.vue')
  },
  {
    path: '/info/delete',
    name: '业务类型信息删除',
    component: () => import('../views/InfoDel.vue')
  },
  {
    path: '/admit/admit',
    name: '业务类型准入管理',
    component: () => import('../views/AdmitAdmit.vue')
  }
]

// const router = new VueRouter({
//   routes
// })

export default routes
