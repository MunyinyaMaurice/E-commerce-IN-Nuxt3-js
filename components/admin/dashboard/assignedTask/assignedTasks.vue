<template>
    <div class="container mx-auto p-4">
    
      <h1 class="text-2xl text-center underline font-bold mb-4">Assigned Tasks</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">Department Name</th>
              <th class="py-2 px-4 border">Title</th>
              <th class="py-2 px-4 border">Description</th>
              <th class="py-2 px-4 border">Start Date</th>
              <th class="py-2 px-4 border">Start Time</th>
              <th class="py-2 px-4 border">Finish Time</th>
              <th class="py-2 px-4 border">First Name</th>
              <th class="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in tasks"
              :key="task.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 border">{{ task.id }}</td>
              <td class="py-2 px-4 border">{{ task.departmentName }}</td>
              <td class="py-2 px-4 border">{{ task.title }}</td>
              <td class="py-2 px-4 border">{{ task.description }}</td>
              <td class="py-2 px-4 border">{{ task.startDate }}</td>
              <td class="py-2 px-4 border">{{ task.startTime }}</td>
              <td class="py-2 px-4 border">{{ task.finishTime }}</td>
              <td class="py-2 px-4 border">{{ task.firstName }}</td>
              <td class="py-2 px-4 border">{{ task.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useIFetch } from '~/composables/useIFetch';
//   onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });
  
  interface Task {
    id: number;
    departmentName: string;
    title: string;
    description: string;
    startDate: string;
    startTime: string;
    finishTime: string;
    firstName: string;
    status: string;
  }
  
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref('');
  
  const fetchTasks = async () => {
    loading.value = true;
    error.value = '';
  
    try {
      const { data, error: fetchError } = await useIFetch<Task[]>('assignedTasks/assigned');
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        tasks.value = data.value || [];
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(fetchTasks);
  </script>
  
  <style scoped>
  /* Add any required styles here */
  </style>
  