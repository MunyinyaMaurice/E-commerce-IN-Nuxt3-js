<template>
  <div class="flex justify-center items-center min-h-screen p-6 bg-gray-100">
    <div class="card max-w-4xl w-full">
      <div class="card-header text-center bg-blue-800 rounded-lg text-white py-4">
        CREATE NEW TASK
      </div>
      <div class="card-body p-6 bg-white shadow-md">
        <form @submit.prevent="assignTask">
          <div class="mb-4">
            <label for="volunteer" class="block font-bold mb-2">Volunteers</label>
            <select
              id="volunteer"
              v-model="formData.volunteerId"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="" disabled>Select a volunteer</option>
              <option v-for="volunteer in volunteers" :key="volunteer.id" :value="volunteer.id">
                {{ volunteer.firstName }} {{ volunteer.lastName }}
              </option>
            </select>
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
// <script lang="ts">
// definePageMeta({
//   layout: "dashboardlayout",
// });

import { ref, onMounted } from 'vue';
import { useIFetch } from '~/composables/useIFetch';
import { useRoute } from 'vue-router';
onMounted(() => {
  // Check if user is authenticated
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    // Redirect to login page if accessToken is missing
    navigateTo('/login');
  }
});

interface FormData {
  taskId: number;
  volunteerId: number;
}

const formData = ref<FormData>({
  taskId: 0,
  volunteerId: 0,
});

interface Volunteer {
  id: number;
  firstName: string;
  lastName: string;
}

const isLoading = ref(false);
const error = ref('');

const volunteers = ref<Volunteer[]>([]);
const route = useRoute();
const id = route.params.id as number;
const uri = `assignedTasks/${id}`;

const fetchVolunteers = async () => {
  isLoading.value = true;
  error.value = '';

  try {
    const { data, error: fetchError } = await useIFetch<Volunteer[]>('applicants/activeApplicants', { lazy: false });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      volunteers.value = data.value || [];
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

const assignTask = async () => {
  isLoading.value = true;
  error.value = '';

  try {
    const { error: fetchError } = await useIFetch(uri, {
      method: 'POST',
      body: formData.value,
    });

    if (fetchError.value) {
      throw new Error(fetchError.value.message);
    } else {
      console.log('Task assigned successfully');
      formData.value = {
        taskId: 0,
        volunteerId: 0,
      };
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchVolunteers);
</script>

<style scoped>
/* Add any required styles here */
</style>
