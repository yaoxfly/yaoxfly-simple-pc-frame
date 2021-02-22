import Request from './src/request.js'
// 注册组件
Request.install = Vue => {
  // 注入组件
  Vue.mixin({
    created () {
      const options = this.$options // vue的option 方法
      // 如果存在
      if (options.EveRequest) {
        // 混入vue实例的名字 定好就不可更改 在vue实例中添加  在new Vue()中添加 也要 vue.use()
        this.$EveRequest = options.EveRequest // 为这个值赋值为this.$EveRequest
      } else if (options.parent && options.parent.$EveRequest) {
        this.$EveRequest = options.parent.$EveRequest
      }
    }
  })
}
export default Request
