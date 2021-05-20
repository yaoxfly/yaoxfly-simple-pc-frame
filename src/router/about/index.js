/*
   路由分层范例-about模块
*/
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
            // 菜单、面包屑数据
            menu: [
                {
                    icon: 'el-icon-location',
                    type: 'submenu', // type属性必须
                    text: '一级目录'
                }
            ]
        }
    },
    {
        path: '/details',
        name: 'details',
        text: '详情',
        component: () => import('@/views/details.vue'),
        meta: {
            noMenu: true, // 设置当前属性不会在菜单栏显示
            // 面包屑数据
            menu: [
                {
                    text: '一级目录'
                },
                {
                    text: '关于',
                    path: '/about'
                },
                {
                    text: '详情'
                }
            ]
        }
    }
]
