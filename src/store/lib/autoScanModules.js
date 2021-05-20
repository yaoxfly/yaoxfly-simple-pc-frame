// 实现自动化加载modules
const modules = {}
const modulesContext = require.context('../modules', true, /\.js$/)
modulesContext.keys().forEach(item => {
    const modulesItem = modulesContext(item)
    // 未设置别名就用文件名
    const fileName = item
        .split('/')
        .reverse()
        .join('')
        .split('.')[0]
    const { default: module, alias: modulesName = fileName } = modulesItem || {}
    Object.assign(modules, { [modulesName]: module || modulesItem })
})
export default modules
