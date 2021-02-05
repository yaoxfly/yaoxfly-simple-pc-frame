/*
 一、基本介绍
    mutations 同步修改 state的值，仅仅是提供一个方法，接收参数，修改state值的文件。就是一个存储修改state方法的仓库。
 二、使用
   1. 使用助手函数
    import { mapMutations } from'vuex'
      methods: {
        // 将this.setTest映射成this.$store.commit('TEST')
        ...mapMutations({
            'setTest': 'TEST'
        })
      }
  2. 直接使用
      this.$store.commit('TEST',param)
 */

const mutations = {
    TEST (state, payload) {
        state.test = payload
    }
}
export default mutations
