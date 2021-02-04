import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'
import autoScanRouter from './autoScanRouter'
Vue.use(VueRouter)
let routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]
// 添加分层路由,使得路由结构更清晰
routes = autoScanRouter(routes)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
