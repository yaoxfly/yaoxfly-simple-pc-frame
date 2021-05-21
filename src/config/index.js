/** @description 多环境配置项
 * @author yx
 */
const config = {}
const keyMap = {
  // 开发环境
  development: () => {
    Object.assign(config, {
      server: '', // api地址
      mock: false // 是否开启mock
    })
  },

  // 测试环境
  test: () => {
    Object.assign(config, {
      server: '',
      mock: false // 是否开启mock
    })
  },

  // 正式环境
  production: () => {
    Object.assign(config, {
      server: '',
      mock: false // 是否开启mock
    })
  }
}
keyMap[process.env.VUE_APP_CURRENT_MODE] && keyMap[process.env.VUE_APP_CURRENT_MODE]()
export default config
