<template>
  <div>
    Post {{$route.params.id}}
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>
