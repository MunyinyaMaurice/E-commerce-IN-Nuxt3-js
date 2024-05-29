<template>
  <div class="container mx-auto p-4">
    <div v-if="refreshData" class="text-center">
      <button @click="refreshData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        REFRESH
      </button>
    </div>
    <h1 class="text-2xl font-bold mb-4">Hospitals</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border">ID</th>
            <th class="py-2 px-4 border">Name</th>
            <th class="py-2 px-4 border">Location</th>
            <th class="py-2 px-4 border">Email</th>
            <th class="py-2 px-4 border">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hospital in hospitals" :key="hospital.id" class="border-b hover:bg-gray-100">
            <td class="py-2 px-4 border">{{ hospital.id }}</td>
            <td class="py-2 px-4 border">{{ hospital.name }}</td>
            <td class="py-2 px-4 border">{{ hospital.location }}</td>
            <td class="py-2 px-4 border">{{ hospital.email }}</td>
            <td class="py-2 px-4 border">{{ hospital.telPhone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useIFetch } from "~/composables/useIFetch";

interface Hospital {
  id: number;
  name: string;
  location: string;
  email: string;
  telPhone: string;
}

const hospitals = ref<Hospital[]>([]);
const loading = ref(false);
const error = ref('');
const refreshData = ref<() => void | null>(null);

const fetchHospitals = async () => {
  loading.value = true;
  error.value = '';

  try {
    const { data, error: fetchError, refresh } = await useIFetch<Hospital[]>('hospitals', { lazy: false });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      hospitals.value = data.value || [];
      console.log("hospitals:", hospitals.value);
    }

    refreshData.value = refresh;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchHospitals);
</script>