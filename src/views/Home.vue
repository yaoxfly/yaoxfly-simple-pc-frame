<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <span>这是主页</span>
  </div>
</template>

<script>
// @ is an alias to /src
// import login from '@/api/login'
import test from '@/api/test'
export default {
  name: 'Home',
  components: {},
  mounted () {
    // login.getToken({
    //   aa: 12
    // }).then(res => {
    //   console.log(res)
    // })
    test.deleteBodyTest({
      auditDesc: '33'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
