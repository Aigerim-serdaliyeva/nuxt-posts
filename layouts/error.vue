<template>
  <div class="error-layout">
    <h1>Error 404</h1>
    <nuxt-link to="/">Главная</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
  .error-layout {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    padding-top: 4rem;
  }
  h1 {
    color: red;
    margin-bottom: 2rem;
  }
</style>
