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
    path: '/workbenches/home',
    name: '首页',
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
    path: '/workbenches/businessTypeDetails',
    name: '业务类型详情',
    component: () => import( '../views/BusinessTypeDetails.vue')
  },
  ,
  {
    path: '/workbenches/superviseDetails',
    name: '监管项目详情',
    component: () => import( '../views/SuperviseDetails.vue')
  },,
  {
    path: '/workbenches/signDetails',
    name: '签约账户详情',
    component: () => import('../views/SignDetails.vue')
  },,
  {
    path: '/workbenches/quickSign',
    name: '一步签约',
    component: () => import( '../views/QuickSign.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
