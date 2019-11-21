<template>
  <el-card
    shadow="hover"
    :body-style="{padding: 0}"
    class="post"
  >
    <header slot="header" class="post__header">
      <h3>Post title</h3>
      <small>
        <i class="el-icon-time"></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>
    <div class="post__body">
      <img src="@/assets/berlin.jpg" alt="" class="post__img">
    </div>
    <footer class="post__footer">
      <el-button round @click="openPost" type="primary">Открыть</el-button>
      <span>
        <i class="el-icon-message"></i>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    margin-bottom: 2rem;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__img {
      width: 100%;
      height: auto;
    }
    &__body {
      text-align: center;
    }
    &__footer {
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
