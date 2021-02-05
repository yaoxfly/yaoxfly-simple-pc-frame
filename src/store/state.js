/*
  一、基本介绍
   state文件里面存放一个state对象, 具体的元素就是我们的变量了, 需要什么数据, 和组件的data函数中一样写法,
   这里只是起到存储作用。
  二 、使用
   1.使用助手函数
        import { mapState } from'vuex'
        computed: {
        ...mapState({
        'getTest': 'test'
        })
      }
  2. 直接使用
       this.$store.state.test
*/
const state = {
    test: 'test'
}
export default state
