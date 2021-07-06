<template>
  <header class="header">
    <div class="inner">
    <h1 class="logo"><img src="../assets/images/logo.png" alt="ロゴ"></h1>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #fff;
  color: #fff;
}
.logo img {
  width: 100px;
}
</style>