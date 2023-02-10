import Vue from 'vue'
import VueRouter from 'vue-router'
import SchedulerPage from '../views/SchedulerPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SchedulerPage',
    component: SchedulerPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DrawingBoard.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
