
import { Mock, Random, returnData } from '../base.js'
const MockData = {
    login: Random.string(16)
}

const login = (req, res) => {
    console.log(req)
    return returnData({
        token: MockData.login
    })
}

// get请求路径必须用正则,其他可用可不用
Mock.mock(/\/user\/login/, 'post', login)
Mock.mock(/\/user\/login/, 'get', login)
Mock.mock(/\/user\/login/, 'delete', login)
Mock.mock(/\/user\/login/, 'put', login)
Mock.mock(/\/user\/login/, 'patch', login)
