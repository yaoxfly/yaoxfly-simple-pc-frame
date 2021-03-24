import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'
import autoScanRouter from './autoScanRouter'
import './repeatRoute'
Vue.use(VueRouter)
let routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'Home',
        text: '主页',
        icon: 'el-icon-location',
        component: () => import('@/views/Home.vue')
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
export { routes }
export default router
