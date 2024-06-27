<template>
    <div>
        <AdminDashboardApplicantActiveapplicants />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { navigateTo } from '#app';
onMounted(() => {
  // Check if user is authenticated
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    // Redirect to login page if accessToken is missing
    navigateTo('/login');
  }
});
</script>

<style lang="scss" scoped>

</style>