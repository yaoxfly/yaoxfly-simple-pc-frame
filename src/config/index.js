/** @description 公共配置
 * @author yx
 */

// 公共配置
const config = {
  mock: false // 是否开启mock
}

// 不同环境下的公共配置
const keyMap = {
  // 开发环境
  development: () => {
    Object.assign(config, {
      server: '' // api地址
    })
  },

  // 测试环境
  test: () => {
    Object.assign(config, {
      server: '' // api地址
    })
  },

  // 正式环境
  production: () => {
    Object.assign(config, {
      server: '' // api地址

    })
  }
}
keyMap[process.env.VUE_APP_CURRENT_MODE] && keyMap[process.env.VUE_APP_CURRENT_MODE]()
export default config
