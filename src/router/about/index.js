//  定义是否是子路由,默认是true
// export const isChildrenRouter = true
//  定义子路由的父亲，默认是Layout
// export const father = 'Layout'
export default [
    {
        path: '/about',
        name: 'About',
        text: '关于',
        icon: 'el-icon-location',
        component: () => import('@/views/About.vue'),
        meta: {
            // 面包屑
            menu: [
                {
                    icon: 'el-icon-location',
                    type: 'submenu', // 必须
                    text: '一级目录'
                }
            ]
        }
    }

]
