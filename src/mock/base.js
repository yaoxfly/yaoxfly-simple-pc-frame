import Mock from 'mockjs' // 引入mock包
Mock.setup({
    timeout: 800
})
const Random = Mock.Random
const returnData = data => {
    return {
        code: 0,
        msg: 'success',
        success: true,
        data: data
    }
}
export { Mock, Random, returnData }
