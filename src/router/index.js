import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/main')
  },
  {
    path: '/portfolio/:project',
    name: 'Portfolio',
    component: () => import('@/views/portfolio')
  },
  // {
  //   path: '*',
  //   redirect: '/'
  // }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
