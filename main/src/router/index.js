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
// router.beforeEach((to, from, next) => {
//   console.log('router.beforeEach',to.path, from.path)
//   if (to.path ===  from.path) {
//     // 可以在这里显示一个提示或者不进行路由跳转
//     alert("你已经在这个页面了");
//     next(false); // 不进行跳转
//   } else {
//     next(); // 继续路由跳转
//   }
// });

export default router
