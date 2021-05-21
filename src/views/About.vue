<template>
  <div class="about">
    <eve-container padding="20px">
      <h1>This is an about page</h1>
      <el-button @click="detials" v-loading="loading">详情</el-button>
    </eve-container>
  </div>
</template>

<script>
import test from '@/api/test'
export default {
  data () {
    return {
      loading: true

    }
  },
  created () {

  },
  mounted () {
    this.getTest()
  },
  methods: {
    // request请求组件范例
    getTest () {
      test.getTest()
        .then(res => {
          console.log(res, '请求状态200,即接口请求成功时执行')
        }).catch(res => {
          console.log(res, '请求状态非200,500,401等,即接口请求失败时执行')
        }).finally(res => {
          this.loading = false
          console.log('finally：接口请求无论成功还是失败都会执行的方法')
        })
    },
    detials () {
      this.$router.push('/details')
    }
  }
}
</script>
