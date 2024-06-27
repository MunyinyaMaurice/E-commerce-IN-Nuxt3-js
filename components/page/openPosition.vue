<template>
    <div class="container mx-auto bg-gray-50 mb-5">
      <h1 class="text-2xl font-bold mb-4 underline-offset-8 text-center">OPEN POSITIONS</h1>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="position in positions"
          :key="position.id"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg w-full h-48" src="~/assets/images/hiring.jpeg" alt="" />
          </a>
          <div class="p-5">
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Hospital: {{ position.hospitalsName }} <br />
              Department: {{ position.departmentsName }} <br />
              Volunteers needed: {{ position.numbOfVols }}
            </p>
            <NuxtLink :to="`/openpositiondetails/${position.id}`">
              <p class="btn my-4">View Details</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useFetch } from "#app";
import { navigateTo, useRuntimeConfig } from "#app";

interface Position {
  id: number;
  description: string;
  numbOfVols: string;
  startDate: string;
  finishDate: string;
  departmentsName: string;
  requiredSkills: string;
  hospitalsName: string;
}

const positions = ref<Position[]>([]);
const loading = ref(false);
const error = ref("");
const refreshData = ref<() => void | null>(null);
const config = useRuntimeConfig();
const baseURL = config.public.apiBaseOpen;

const fetchOpenPosition = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError, refresh } = await useFetch<Position[]>(`${baseURL}positions`, { lazy: false });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      positions.value = data.value || [];
      console.log("positions:", positions.value);
    }

    refreshData.value = refresh;
  } catch (err: any) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

onMounted(fetchOpenPosition);
</script>
<style lang="scss" scoped>
/* Add any required styles here */
img {
  width: 100%;
  object-fit: cover;
}
</style>

<!-- <template>
  <div class="flex justify-center items-center min-h-screen p-6 bg-gray-100">
    <div class="card max-w-4xl w-full">
      <div class="card-header text-center bg-blue-800 rounded-lg text-white py-4">
        JOIN VOLUNTEERING PROGRAM
      </div>
      <div class="card-body p-6 bg-white shadow-md">
        <form @submit.prevent="saveApplication">
          <div>
            <label for="nationalId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">National ID:</label>
            <input 
              v-model="enteredNationalId"
              type="text" 
              id="nationalId" 
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Enter your national ID"
              required
              @input="fetchUserInfo"
            />
          </div>
          <div v-if="userInfo" class="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block mb-2 font-bold" for="firstName">First Name:</label>
              <input
                v-model="formData.firstName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    
                type="text"
                id="firstName"
                readonly
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="lastName">Last Name:</label>
              <input
                v-model="formData.lastName"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"     
                type="text"
                id="lastName"
                readonly
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="degreeId">Degree ID:</label>
              <input
                v-model="formData.degreeId"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="text"
                id="degreeId"
                readonly
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="majorFocus">Major Focus:</label>
              <input
                v-model="formData.majorFocus"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"    
                type="text"
                id="majorFocus"
                readonly
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="email">Email:</label>
              <input
                v-model="formData.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                   
                type="text"
                id="email"
              />
            </div>
            <div>
              <label class="block mb-2 font-bold" for="telPhone">Phone Number:</label>
              <input
                v-model="formData.telPhone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"                   type="text"
                id="telPhone"
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
import { useRoute, useRouter } from 'vue-router';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  telPhone: string;
  nationalId: string;
  degreeId: string;
  majorFocus: string;
  positionId?: number;
}

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  telPhone: '',
  nationalId: '',
  degreeId: '',
  majorFocus: '',
});

const error = ref('');
const isLoading = ref(false);

const enteredNationalId = ref('');
const userInfo = ref(null);

const route = useRoute();
const router = useRouter();
const positionId = ref<number | null>(null);

onMounted(() => {
  if (route.query.positionId) {
    positionId.value = parseInt(route.query.positionId as string, 10);
  }
  console.log('Retrieved positionId:', positionId.value);
});

const fetchUserInfo = async () => {
  if (enteredNationalId.value) {
    try {
      const response = await fetch(`http://localhost:23991/api/qualifications/${enteredNationalId.value}`);
      const data = await response.json();
      userInfo.value = data;
      formData.value = {
        ...formData.value,
        firstName: data.firstName,
        lastName: data.lastName,
        degreeId: data.degreeId,
        majorFocus: data.majorFocus,
        nationalId: enteredNationalId.value,
      };
    } catch (err) {
      console.error(err);
      userInfo.value = null;
    }
  } else {
    userInfo.value = null;
  }
};

const saveApplication = async () => {
  isLoading.value = true;
  error.value = '';

  if (!positionId.value) {
    error.value = 'Position ID is missing';
    isLoading.value = false;
    return;
  }

  formData.value.positionId = positionId.value;
  console.log('Form data before submission:', formData.value);

  try {
    const response = await fetch(`http://localhost:23999/api/applicants/${positionId.value}?positionId=${positionId.value}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData.value),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    } else {
      router.push({ path: '/success'});
      console.log('Application saved successfully');
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        telPhone: '',
        nationalId: '',
        degreeId: '',
        majorFocus: '',
        positionId: undefined,
      };
    }
  } catch (err: any) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};
</script> -->


