<template>
  <div class="flex justify-center items-center min-h-screen p-6 bg-gray-100">
    <div class="card max-w-4xl w-full">
      <div class="card-header text-center bg-blue-800 rounded-lg text-white py-4">
        CREATE NEW TASK
      </div>
      <div class="card-body p-6 bg-white shadow-md">
        <form @submit.prevent="saveTask">
          <div class="mb-4">
            <label for="department" class="block font-bold mb-2">Department</label>
            <select
              id="department"
              v-model="formData.departmentId"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="" disabled>Select a department</option>
              <option v-for="department in departments" :key="department.id" :value="department.id">
                {{ department.name }}
              </option>
            </select>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block mb-2 font-bold" for="title">Title:</label>
              <input
                v-model="formData.title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="title"
                required
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="description">Description:</label>
              <input
                v-model="formData.description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="description"
                required
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="startTime">Start Time:</label>
              <input
                v-model="formData.startTime"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="time"
                id="startTime"
                required
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="finishTime">Finish Time:</label>
              <input
                v-model="formData.finishTime"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="time"
                id="finishTime"
                required
              />
            </div>
             <div>
              <label class="block mb-2 font-bold " for="startDate">Start Date:</label>
              <input
                v-model="formData.startDate"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="date"
                id="startDate"
                required
              />
            </div>
          </div>
          <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
          <div class="mt-4">
            <button type="submit" class="block w-full bg-blue-800 text-white py-3 px-4 rounded-lg" :disabled="isLoading">
              {{ isLoading ? 'Saving...' : 'Save' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIFetch } from "~/composables/useIFetch";
import { navigateTo } from '#app';
// onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });

interface FormData {
  departmentId: string;
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  finishTime: string;
}

const formData = ref<FormData>({
  departmentId: '',
  title: '',
  description: '',
  startDate: '',
  startTime: '',
  finishTime: '',
});

interface Department {
  id: number;
  name: string;
}

const isLoading = ref(false);
const error = ref('');

const departments = ref<Department[]>([]);

const fetchDepartments = async () => {
  isLoading.value = true;
  error.value = '';

  try {
    const { data, error: fetchError } = await useIFetch<Department[]>('departments', { lazy: false });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      departments.value = data.value || [];
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

const saveTask = async () => {
  isLoading.value = true;
  error.value = '';

  try {
    const { error: fetchError } = await useIFetch('tasks', {
      method: 'POST',
      body: formData.value,
    });

    if (fetchError.value) {
      throw new Error(fetchError.value.message);
    } else {
      console.log('Task saved successfully');
      formData.value = {
        departmentId: '',
        title: '',
        description: '',
        startDate: '',
        startTime: '',
        finishTime: '',
      };
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchDepartments);
</script>

<style scoped>
/* Add any required styles here */
</style>
