/** @description mock基类,公共方法等
 * @author yx
 */
import Mock from 'mockjs'
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
