<template>
  <div class="container mx-auto p-6">
    <div v-if="loading" class="text-center">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="text-red-500 text-center">
      <p>{{ error }}</p>
    </div>
    <div v-else class="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 class="text-3xl font-bold mb-6">{{ position?.description }}</h1>
      <div class="mb-4">
        <p class="text-lg"><strong>Number of Volunteers:</strong> {{ position?.numbOfVols }}</p>
      </div>
      <div class="mb-4">
        <p class="text-lg"><strong>Start Date:</strong> {{ position?.startDate }}</p>
      </div>
      <div class="mb-4">
        <p class="text-lg"><strong>Finish Date:</strong> {{ position?.finishDate }}</p>
      </div>
      <div class="mb-4">
        <p class="text-lg"><strong>Department:</strong> {{ position?.departmentsName }}</p>
      </div>
      <div class="mb-4">
        <p class="text-lg"><strong>Required Skills:</strong> {{ position?.requiredSkills }}</p>
      </div>
      <div class="mb-4">
        <p class="text-lg"><strong>Hospital:</strong> {{ position?.hospitalsName }}</p>
      </div>
      <button 
        @click="joinPosition" 
        class="bg-blue-500 text-white mt-6 py-3 px-6 rounded-lg hover:bg-blue-700"
      >
        Join Positions
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetch, useRoute, useRouter, useRuntimeConfig } from "#app";

interface Position {
  id: number;
  description: string;
  numbOfVols: number;
  startDate: string;
  finishDate: string;
  departmentsName: string;
  requiredSkills: string;
  hospitalsName: string;
}

const route = useRoute();
const router = useRouter();
const position = ref<Position | null>(null);
const loading = ref(false);
const error = ref("");
const config = useRuntimeConfig();
const baseURL = config.public.apiBaseOpen;

const fetchPosition = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError } = await useFetch<Position[]>(`${baseURL}positions/${route.params.id}`);

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      console.log("Fetched data:", data.value); // Log the fetched data
      position.value = data.value[0] || null; // Access the first item in the array
    }
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const joinPosition = () => {
  if (position.value) {
    router.push({ path: '/apply', query: { positionId: position.value.id.toString() } });
  }
};

onMounted(fetchPosition);
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem;
}

.spinner-border {
  border: 0.4rem solid transparent;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.text-center {
  text-align: center;
}

.text-red-500 {
  color: #f56565;
}

.max-w-2xl {
  max-width: 42rem;
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.p-8 {
  padding: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-bold {
  font-weight: 700;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.bg-blue-500 {
  background-color: #4299e1;
}

.text-white {
  color: #ffffff;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.hover\:bg-blue-700:hover {
  background-color: #2b6cb0;
}
</style>


<!-- <template>
  <div class="container mx-auto p-6">
    <div v-if="loading" class="text-center">
      <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <div v-else-if="error" class="text-red-500 text-center">
      <p>{{ error }}</p>
    </div>
    <div v-else class="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 class="text-2xl font-bold mb-4">{{ position?.description }}</h1>
      <p><strong>Number of Volunteers:</strong> {{ position?.numbOfVols }}</p>
      <p><strong>Start Date:</strong> {{ position?.startDate }}</p>
      <p><strong>Finish Date:</strong> {{ position?.finishDate }}</p>
      <p><strong>Department:</strong> {{ position?.departmentsName }}</p>
      <p><strong>Required Skills:</strong> {{ position?.requiredSkills }}</p>
      <p><strong>Hospital:</strong> {{ position?.hospitalsName }}</p>
      <button 
        @click="joinPosition" 
        class="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-700"
      >
        Join Position
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetch, useRoute, useRuntimeConfig } from "#app";

interface Position {
  id: number;
  description: string;
  numbOfVols: number;
  startDate: string;
  finishDate: string;
  departmentsName: string;
  requiredSkills: string;
  hospitalsName: string;
}

const route = useRoute();
const position = ref<Position | null>(null);
const loading = ref(false);
const error = ref("");
const config = useRuntimeConfig();
const baseURL = config.public.apiBaseOpen;

const fetchPosition = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError } = await useFetch<Position[]>(`${baseURL}positions/${route.params.id}`);

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      console.log("Fetched data:", data.value); // Log the fetched data
      position.value = data.value[0] || null; // Access the first item in the array
    }
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const joinPosition = () => {
  // Implement the join functionality
  alert("Joined!");
};

onMounted(fetchPosition);
</script>

<style lang="scss" scoped>
/* Add any required styles here */
</style>

 -->
