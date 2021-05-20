<template>
  <div class="not-found">
    <div>
      <img src="@/assets/image/error/404.png" alt="" />
    </div>
    <h3>您访问的页面不存在</h3>
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

  }
}
</script>

<style  >
.not-found {
  position: fixed;
  top: -150px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
}
.not-found i {
  font-size: 64px;
  color: #999;
}
</style>
