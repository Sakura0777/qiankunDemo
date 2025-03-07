import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusinessTypeDetails from '../views/BusinessTypeDetails.vue'
import SuperviseDetails from '../views/SuperviseDetails.vue'
import SignDetails from '../views/SignDetails.vue'
import QuickSign from '../views/QuickSign.vue'

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
    path: '/BusinessTypeDetails',
    name: 'BusinessTypeDetails',
    component: BusinessTypeDetails
  },
  {
    path: '/SuperviseDetails',
    name: 'SuperviseDetails',
    component: SuperviseDetails
  },
  {
    path: '/SignDetails',
    name: 'SignDetails',
    component: SignDetails
  },
  {
    path: '/QuickSign',
    name: 'QuickSign',
    component: QuickSign
  },
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default routes
