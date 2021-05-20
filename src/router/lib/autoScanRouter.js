/** @description  路由分层
 * @author yx
 * @param  {Array}  routes 路由数组
 * @param  {Object}  config 配置 father 全局指定默认的父路由，isChildrenRouter全局指定路由是否是子路由
 */
export default function (routes, config) {
    const { father = 'Layout', isChildrenRouter = true } = config || {}
    const routerContext = require.context('../', true, /index\.js$/)
    routerContext.keys().forEach(route => {
        // 如果是根目录的 index.js 、不处理
        if (route.startsWith('./index')) {
            return
        }
        const routerModule = routerContext(route)
        // 自动新增的路由
        const { default: addRoute, father: $father = father, isChildrenRouter: $isChildrenRouter = isChildrenRouter } = routerModule || {}
        try {
            addRoute.forEach(item => {
                $isChildrenRouter && (item.father = $father)
            })
            // 获取非子路由
            const noChildrenRouter = addRoute.filter(item => {
                return item.father === undefined
            })
            // 添加非子路由的
            routes = [...routes, ...noChildrenRouter]

            // 选择子路由的
            const childrenRouter = addRoute.filter(item => {
                return item.father !== undefined
            })
            // 添加子路由的
            routes.forEach(fItem => {
                childrenRouter.forEach(cItem => {
                    fItem.name === cItem.father && (fItem.children.push(cItem))
                })
            })
        } catch (error) {
            console.log('分层路由格式错误')
            // throw error('分层路由格式错误')
            // console.log('')
        }
    })
    return routes
}
