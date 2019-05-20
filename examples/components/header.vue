<style lang="scss" scoped>
  .header{
    width:100%;
    height:70px;
    border-bottom:1px solid #ddd;
    display: flex;
    align-items: center;
  }
  .logo{
    width:80px;
    height:80px;
    & img{
      width:100%;
      height:100%;
    }
  }
</style>

<template>
  <header class="header">
    <h1 class="logo">
      <router-link to="#">
        <img src="../assets/imgs/logo.png">
      </router-link>
    </h1>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>