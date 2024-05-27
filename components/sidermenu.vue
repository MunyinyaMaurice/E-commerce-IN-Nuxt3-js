<template>
    <div class="flex h-screen">
  <!-- Sidebar -->
  <div class="bg-gray-800 text-white w-64 flex flex-col justify-between">
    <div>
      <!-- Logo -->
      <div class="p-4 flex items-center">
        <svg class="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="font-bold">My App</span>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-8">
        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          </svg>
          <span>Dashboard</span>
        </a>
        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Users</span>
        </a>
        <!-- Add more links as needed -->
      </nav>
    </div>

    <!-- Logout Button -->
    <div class="p-4">
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="flex-1 p-6">
    <!-- Your main content goes here -->
  </div>
</div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>