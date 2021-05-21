import Request from '@/request/config'
const test = {
    getTest: param => Request.get('/demo/getTest', param)
}
export default test
