
<template>
  <div>
    <AdminDashboardHospitalHospitals />
    <!-- <AdminDashboardHospitalHospitals v-if="isAuthenticated" /> -->
  </div>
</template>
 <script setup lang="ts">
// <script lang="ts">
// definePageMeta({
//   layout: "dashboardlayout",
// });

import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
onMounted(() => {
  // Check if user is authenticated
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    // Redirect to login page if accessToken is missing
    navigateTo('/login');
  }
});
</script>