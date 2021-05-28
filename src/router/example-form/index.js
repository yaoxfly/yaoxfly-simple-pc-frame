/*
   路由分层范例-表单页
*/
//  定义是否是子路由,默认是true
// export const isChildrenRouter = true
//  定义子路由的父亲，默认是Layout
// export const father = 'Layout'
export default [
    {
        path: '/form',
        name: 'Form',
        text: '表单',
        icon: 'el-icon-location',
        component: () => import('@/views/example/Form.vue'),
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
    }
]
