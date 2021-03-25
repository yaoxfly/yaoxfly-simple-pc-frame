import Request from '@/request/config'
const login = {
    // 登录
    getToken: param => Request.patch('/user/login', param, { paramType: 'data' })
    // 登录
    // getToken: param => Request.requests('/user/login', param, 'delete', { paramType: 'params' })
}
export default login
