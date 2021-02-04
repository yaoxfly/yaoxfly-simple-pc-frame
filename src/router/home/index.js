//  定义是否是子路由
// export const isChildrenRouter = true
//  定义子路由的父亲
// export const father = 'Layout'
export default [
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    }
]
