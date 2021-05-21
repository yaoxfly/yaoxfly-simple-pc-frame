<template>
  <div class="not-found">
    <div>
      <img src="@/assets/image/error/404.gif" alt="" />
    </div>
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #999;
}
.not-found i {
  font-size: 64px;
  color: #999;
}
</style>
