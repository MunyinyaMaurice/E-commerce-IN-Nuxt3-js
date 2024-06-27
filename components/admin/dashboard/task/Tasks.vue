<template>
    <div class="container mx-auto p-4">

        <div class="flex justify-between mb-4">
    <div>
      <button
        v-if="refreshData"
        @click="refreshData"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >
        REFRESH
      </button>
    </div>
    <div>
        <!-- <NuxtLink to="/dashboard/hospital/createHospital"  class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >Create New Hospital</NuxtLink> -->
      <button
        @click="navigateToCreateTask"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >
        Create New Task
      </button>
    </div>
  </div>
      
      <h1 class="text-2xl text-center text-decoration-line: underline font-bold mb-4">TASK LIST</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border"> TASK ID </th>
              <th class="py-2 px-4 border">Title</th>
              <th class="py-2 px-4 border">Description</th>
              <th class="py-2 px-4 border">Start date</th>
              <th class="py-2 px-4 border">Start time</th>
              <th class="py-2 px-4 border">Finish time</th>
              <th class="py-2 px-4 border">Task status</th>
              <th class="py-2 px-4 border">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="task in tasks"
              :key="task.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 border">{{ task.id }}</td>
              <td class="py-2 px-4 border">{{ task.title }}</td>
              <td class="py-2 px-4 border">{{ task.description }}</td>
              <td class="py-2 px-4 border">{{ task.startDate }}</td>
              <td class="py-2 px-4 border">{{ task.startTime }}</td>
              <td class="py-2 px-4 border">{{ task.finishTime }}</td>
              <td class="py-2 px-4 border">{{ task.status }}</td>
  
              <td class="py-2 px-4 border">
                <div class="relative inline-block">
                  <button
                    @click="toggleDropdown(task.id)"
                    class="inline-flex items-center px-3 py-2 border rounded text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </button>
                  <div
                    v-show="dropdownVisible(task.id)"
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <button
                      @click="openUpdateForm(task.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Update
                    </button>
                    <button
                      @click="openUpdateForm(task.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Assign task
                    </button>
                    <button
                      @click="deleteTask(task.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useIFetch } from "~/composables/useIFetch";
  import { navigateTo } from '#app';
  //   import { useFetch } from '#app';
// onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });
  
  interface Task {
    id: string;
  title: string;
  description: string;
  startDate: string;
  startTime: string;
      finishTime: string;
      status: string;
    //   assignedTask: string[];
  }
  
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref("");
  const refreshData = ref<() => void | null>(null);
  const openDropdownId = ref<number | null>(null);
  
  const fetchTasks = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError,refresh } = await useIFetch<Task[]>("/tasks");

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      tasks.value = data.value || [];
      console.log("tasks:", tasks.value);
    }
    refreshData.value = refresh;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};


  const toggleDropdown = (taskId: number) => {
    openDropdownId.value = openDropdownId.value === taskId ? null : taskId;
  };
  
  const dropdownVisible = (taskId: number) => {
    return openDropdownId.value === taskId;
  };
  const navigateToCreateTask = () => {
  navigateTo('/dashboard/task/createTask'); 
};

const deleteTask = async (taskId: number) => {
  try {
    const { error } = await useIFetch(`/tasks/${taskId}`, {
      method: 'DELETE',
    });

    if (error.value) {
      console.error('Failed to delete Task:', error.value.message);
    } else {
      console.log('task deleted successfully');
      // Optionally, you can refetch the hospital list after a successful deletion
      await fetchTasks();
    }
  } catch (err) {
    console.error('Failed to delete task:', err);
  }
};
const openUpdateForm = (taskId: number) => {
    // Open the update form for the hospital with the given ID
//   navigateTo(`/admin/dashboard/hospital/UpdateHospital/${hospitalId}`);
navigateTo(`task/updateTask/${taskId}`);
    // You can navigate to the update form component or display a modal here
    console.log(`Opening update form for task with ID ${taskId}`);
  };
  const openAssignForm = (taskId: number) => {
    // Open the update form for the hospital with the given ID
//   navigateTo(`/admin/dashboard/hospital/UpdateHospital/${hospitalId}`);
navigateTo(`assignedTask/assignTask/${taskId}`);
    // You can navigate to the update form component or display a modal here
    console.log(`Opening assign form for task with ID ${taskId}`);
  };
  
  onMounted(fetchTasks);
  </script>
  