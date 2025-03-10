import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectQuery from '../views/ProjectQuery.vue'
import ProjectAdd from '../views/ProjectAdd.vue'
import ProjectModify from '../views/ProjectModify.vue'
import ProjectDel from '../views/ProjectDel.vue'

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
    path: '/project/query',
    name: 'ProjectQuery',
    component: ProjectQuery  
  },
  {
    path: '/project/add',
    name: 'ProjectAdd',
    component: ProjectAdd  
  },
  {
    path: '/project/modify',
    name: 'ProjectModify',
    component: ProjectModify
  },
  {
    path: '/project/delete',
    name: 'ProjectDel',
    component: ProjectDel
   }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default routes
