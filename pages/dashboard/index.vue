<template>
  <div class="dashboard-layout flex">
    <Sidebar />
    <div class="content flex-grow p-4">
      <!-- Content for the dashboard index page goes here -->
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '~/components/Sidebar.vue'
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

definePageMeta({
  layout: "dashboardLayout",
});
</script>

<style scoped>
.dashboard-layout {
  height: 100vh; /* Ensure the layout takes full viewport height */
}
.content {
  overflow-y: auto; /* Allow scrolling if content overflows */
}
</style>



<!-- <template>
    <div class="flex h-screen">
  <div class="bg-gray-900 text-white w-64 flex flex-col justify-between">
    <div>
     
      <div class="p-4 flex items-center">
        <svg class="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="font-bold">NVMIS</span>
      </div>

      
      <nav class="mt-8">
        <a href="/dashboard" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
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

        <a href="/dashboard/hospital" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Hospital</span>
        </a>

        <a href="/dashboard/department" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Department</span>
        </a>


        <NuxtLink to="/dashboard/task"  class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          Task</NuxtLink>

        <a href="/dashboard/applicant" class="flex items-center px-4 py-2 hover:bg-gray-700 rounded">
          <svg class="h-6 w-6 mr-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Applicant</span>
        </a>
       
      </nav>
    </div>


    <div class="p-4">
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  </div>

 
  <div class="flex-1 p-6">
    
  </div>
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

</style> -->