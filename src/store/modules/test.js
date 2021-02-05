/*
 一、基本介绍
   module：可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理。
 二、使用
   this.$store.state.test.modules //test是文件名，也就是默认的module名,可以export const alias 设置别名
 */
const state = {
    modules: 'this is a test modules'
}
const mutations = {}
const actions = {}
const getters = {}
// 设置当前model的别名
// export const alias = 'test'
// 不要忘记把state, mutations等暴露出去。
export default {
    state,
    mutations,
    actions,
    getters
}
