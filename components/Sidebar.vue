<template>
  <div class="bg-gray-200 text-blue-500 w-64 flex flex-col justify-between h-full mx-2 rounded-lg">
    <div>
      <ul>
        <li v-if="isLoggedIn">
            <span class="flex items-center mt-1 px-4 py-2 text-sm font-medium text-teal-400 bg-white rounded-none border border-gray-400 hover:bg-teal-100 hover:text-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400"
            >
              <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ userName }} ({{ userRole }})</span>
          </li>
      </ul>
      
      <!-- Logo -->
      <div class="p-4 flex items-center">
        <svg class="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="font-bold">NVMIS</span>
      </div>

      <!-- Navigation Links -->
      <nav class="mt-8">
        <NuxtLink to="/dashboard" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span>Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/users" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Users</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/hospital" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Hospital</span>
        </NuxtLink>
         <NuxtLink to="/dashboard/department" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Department</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/task" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Task</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/applicant" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Applicant</span>
       </NuxtLink>
       <NuxtLink to="/dashboard/activeapplicant" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Active Volunteer</span>
       </NuxtLink>
       <NuxtLink to="/dashboard/assignedTask" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Assigned Task</span>
       </NuxtLink>
       <NuxtLink to="/dashboard/volunteer/assignedTo" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Assigned Task To</span>
       </NuxtLink>

       <NuxtLink to="/dashboard/task/assignedBy" class="flex items-center px-4 py-2 hover:bg-white rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Task Assigned By</span>
       </NuxtLink>
       
      </nav>
    </div>

    <!-- Logout Button -->
    <!-- <div class="p-4">
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div> -->

<div class="p-4">
  <ul>
<li v-if="isLoggedIn">
            <button 
              @click="logout"
              class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2"
            >
              Logout
            </button>
          </li>
          </ul>
          </div>

  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useIFetch } from '~/composables/useIFetch';
import { navigateTo } from '#app';

// State
const isLoggedIn = ref(false);
const userRole = ref("");
const userName = ref("");

// Methods
const checkLoginStatus = async () => {
  try {
    const { data } = await useIFetch('users/current_user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    
    // Log the full response for debugging
    console.log('Response data:', data.value);
    
    // Assuming `data.value` is an object with user information
    if (data.value && data.value.role && data.value.firstName) {
      isLoggedIn.value = true;
      userRole.value = data.value.role;
      userName.value = data.value.firstName;
    } else {
      isLoggedIn.value = false;
      userRole.value = "";
      userName.value = "";
    }
  } catch (error) {
    console.error('Error checking login status:', error);
    isLoggedIn.value = false;
    userRole.value = "";
    userName.value = "";
  }
};

const logout = async () => {
  try {
    await useIFetch('auth/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    localStorage.removeItem('accessToken');
    isLoggedIn.value = false;
    userRole.value = "";
    userName.value = "";
    navigateTo('/login');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};

// Lifecycle Hooks
onMounted(() => {
  checkLoginStatus();
});
</script>

<style scoped>
/* Additional styles if needed */
</style>

<style scoped>
/* Add your styles here */
</style>





<!-- <template>
  <div class="bg-gray-400 text-white w-64 flex flex-col justify-between h-full mx-2 rounded-lg">
    <div>
      
      <div class="p-4 flex items-center">
        <svg class="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="font-bold">NVMIS</span>
      </div>

      
      <nav class="mt-8">
        <NuxtLink to="/dashboard" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
          </svg>
          <span>Dashboard</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/users" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <span>Users</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/hospital" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Hospital</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/department" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Department</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/task" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Task</span>
        </NuxtLink>
        <NuxtLink to="/dashboard/applicant" class="flex items-center px-4 py-2 hover:bg-sky-600 rounded">
          <svg class="h-6 w-6 mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
            <path stroke="none" d="M0 0h24v24H0z"/>  
            <path d="M3 21v-13l9-4l9 4v13" />  
            <path d="M13 13h4v8h-10v-6h6" />  
            <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" /></svg>
          <span>Applicant</span>
        </NuxtLink>
      </nav>
    </div>

    
    <div class="p-4">
      <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Add your styles here */
</style> -->
