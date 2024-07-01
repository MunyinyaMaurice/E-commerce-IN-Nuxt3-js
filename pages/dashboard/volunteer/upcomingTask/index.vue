<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl text-center underline font-bold mb-4">Assigned Tasks to {{ task.volunteerName }}</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border">Title</th>
            <th class="py-2 px-4 border">Description</th>
            <th class="py-2 px-4 border">Volunteer Name</th>
            <th class="py-2 px-4 border">Coordinator Name</th>
            <th class="py-2 px-4 border">Start Date</th>
            <th class="py-2 px-4 border">Start Time</th>
            <th class="py-2 px-4 border">Finish Time</th>
            <th class="py-2 px-4 border">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="task in tasks"
            :key="task.id"
            class="border-b hover:bg-gray-100"
          >
            <td class="py-2 px-4 border">{{ task.title }}</td>
            <td class="py-2 px-4 border">{{ task.description }}</td>
            <td class="py-2 px-4 border">{{ task.volunteerName }}</td>
            <td class="py-2 px-4 border">{{ task.coordinatorName }}</td>
            <td class="py-2 px-4 border">{{ task.startDate }}</td>
            <td class="py-2 px-4 border">{{ task.startTime }}</td>
            <td class="py-2 px-4 border">{{ task.finishTime }}</td>
            <td class="py-2 px-4 border">{{ task.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useIFetch } from '~/composables/useIFetch';

interface Task {
  id: number;
  title: string;
  description: string;
  volunteerName: string;
  coordinatorName: string;
  startDate: string;
  startTime: string;
  finishTime: string;
  status: string;
}

const tasks = ref<Task[]>([]);
const loading = ref(false);
const error = ref('');

const router = useRouter();

const fetchVolunteerTasks = async () => {
  loading.value = true;
  error.value = '';

  try {
    const { data, error: fetchError } = await useIFetch<Task[]>('assignedTasks/volunteer');

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      tasks.value = data.value || [];
    }
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  // Check if user is authenticated
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    // Redirect to login page if accessToken is missing
    router.push('/login');
  } else {
    fetchVolunteerTasks();
  }
});
</script>

<style scoped>
/* Add any required styles here */
</style>
