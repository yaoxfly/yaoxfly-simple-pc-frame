/**
  * @description 缓存工具
*/
const cache = {
    /**
     * @description 设置缓存
     * @author  yx
     * @param  {String} name  缓存名
     * @param  {String} data  存储的数据
     */
    setCache (name, data) {
        if ((typeof data === 'string') && data.constructor === String) {
            localStorage.setItem(name, data)
        } else {
            localStorage.setItem(name, JSON.stringify(data))
        }
    },
    /**
     * @description 获取缓存
     * @author  yx
     * @param  {String} name  缓存名
     */
    getCache (name) {
        try {
            const jsonObj = JSON.parse(localStorage.getItem(name))
            if (typeof jsonObj === 'object') {
                return jsonObj
            }
        } catch (e) {
            return localStorage.getItem(name)
        }
    },

    /**
     * @description 清空所有缓存
     * @author  yx
     */
    clearCache () {
        localStorage.clear()
    }
}
export default cache
