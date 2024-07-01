<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
     <div class="sticky top-0 z-50">
      <Sidebar />
     </div>
    

    <!-- Main content -->
    <div class="flex-1 bg-gray-100 p-4 overflow-auto">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
</script>

<style scoped>
/* Add your styles here */
</style>
