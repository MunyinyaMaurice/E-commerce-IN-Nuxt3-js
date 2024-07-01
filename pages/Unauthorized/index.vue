<template>
  <div class="unauthorized-container">
    <h1>Unauthorized</h1>
    <p>You do not have permission to access this page.</p>
    <button>
      <NuxtLink to="/">Go to Home</NuxtLink>
    </button>

    
  </div>
</template>

<script>
export default {
  name: 'Unauthorized',
};
</script>

<style scoped>
.unauthorized-container {
  text-align: center;
  margin-top: 50px;
}
</style>
