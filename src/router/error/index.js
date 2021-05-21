/* 错误界面模块 */

//  定义是否是子路由,默认是true
export const isChildrenRouter = false
export default [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '*',
    redirect: '/404',
    meta: {}
  }
]
