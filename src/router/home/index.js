//  定义是否是子路由,默认是true
// export const isChildrenRouter = true
//  定义子路由的父亲，默认是Layout
// export const father = 'Layout'
export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }
]
