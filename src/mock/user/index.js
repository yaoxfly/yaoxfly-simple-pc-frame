/* mock范例 */
import { Mock, Random, returnData } from '../base.js'
const MockData = {
    // 字符串
    login: Random.string(16),
    // 图片
    image: Random.image('200x100', '#4A7BF7', 'Hello'),
    // 列表数据
    list: Mock.mock({
        'user|5-10': [{
            name: '@cname', // 中文名称
            'age|1-100': 100, // 100以内随机整数
            birthday: '@date("yyyy-MM-dd")', // 日期
            city: '@city(true)' // 中国城市
        }]
    })
}
const login = req => {
    console.log(req)
    return returnData({
        token: MockData.login
    })
}
// get请求路径必须用正则,其他可用可不用
Mock.mock(/\/demo\/getTest/, 'get', login) // 拦截 请求的/demo/getTest接口
