<template>
  <div class="about">
    <eve-container padding="20px">
      <h1>This is an about page</h1>
      <el-button @click="detials">详情</el-button>
    </eve-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    detials () {
      this.$router.push('/details')
    }
  }
}
</script>
