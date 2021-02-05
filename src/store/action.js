/*
  一、基本介绍
    异步修改state的值
  二、使用
    1.使用助手函数
        import { mapActions } from'vuex'
        methods: {
        //将this.setTest映射成 this.$store.dispatch('TEST')
        ...mapActions({'setTest':TEST})
    }
    2.直接使用
        this.$store.dispatch('TEST')
*/
const action = {
    TEST ({ commit }, payload) {
        commit('TEST', payload)
    }
}
export default action
