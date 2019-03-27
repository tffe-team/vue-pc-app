<template>
  <div id="home" class="m-home">
    <div class="content">
      <h2 class="title">欢迎</h2>
      <p class="subtitle">使用后台系统</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    backHome () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped lang="scss">
.m-home {
  width: 846px;
  padding-top: 100px;
  margin: 0 auto;
  .content {
    padding-top: 85px;
    vertical-align: top;
    background: url('../assets/home.png') right top no-repeat;
    height: 340px;
    .title {
      font-size: 50px;
      color: #545a5a;
    }
    .subtitle {
      font-size: 31px;
      color: #999;
      margin-top: 5px;
    }
    .back {
      margin-top: 10px;
    }
  }
  .ft {
    font-size: 12px;
    color: #999;
    text-align: center;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 20px;
  }
}
</style>
