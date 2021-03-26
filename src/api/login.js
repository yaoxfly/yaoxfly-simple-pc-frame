import Request from '@/request/config'
const login = {
    // 登录
    // getToken: param => Request.delete('/user/login', param, { paramType: 'data' }),
    // getImage: param => Request.get('/user/image', param, { paramType: 'params' })
    // 登录
    getToken: param => Request.requests('/user/login', param, 'patch', { paramType: 'data' })
}
export default login
