<template>
  <div class="layout-admin__wrap">
    <el-container :style="{height: '100%'}">
      <el-aside width="250px">
        <Aside />
      </el-aside>
      <el-main>
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Aside from '../components/main/admin/Aside.vue'
export default {
  components: {
    Aside

  }
}
</script>

<style lang="scss" scoped>
  .layout-admin__wrap {
    width: 100%;
    height: 100vh;
  }
</style>
