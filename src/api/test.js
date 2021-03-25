import Request from '@/request/config'
const test = {
    getTest: param => Request.get('/demo/getTest', param),
    // getBodyTest: param => Request.get('/demo/getBodyTest', param, { paramType: 'data' })
    postParamTest: param => Request.post('/demo/postParamTest', param, { paramType: 'params' }),
    postBodyTest: param => Request.post('/demo/postBodyTest', param),
    putTest: param => Request.put('/demo/putTest', param, { paramType: 'params' }),
    putBodyTest: param => Request.put('/demo/putBodyTest', param),
    deleteTest: param => Request.delete('/demo/deleteTest', param),
    deleteBodyTest: param => Request.delete('/demo/deleteBodyTest', param, { paramType: 'data' })
    // 登录
    // getToken: param => Request.patch('/user/login', param, { paramType: 'data' })
    // 登录
    // getToken: param => Request.requests('/user/login', param, 'delete', { paramType: 'params' })
}
export default test
