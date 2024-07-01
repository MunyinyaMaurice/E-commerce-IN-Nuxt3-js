<!-- <template>
    <UpdateHospital :hospitalId="$route.params.hospitalId" />
  </template>
  
  <script setup>
  import UpdateHospital from '~/components/admin/dashboard/hospital/UpdateHospital.vue';
  </script> -->

  <template>
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Update Hospital</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            v-model="formData.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter hospital name"
            required
          />
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="formData.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter hospital Email"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="telPhone">
            Tel-Phone
          </label>
          <input
            v-model="formData.telPhone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter hospital tel-Phone-number"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="location">
            Location
          </label>
          <input
            v-model="formData.location"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Enter hospital location"
            required
          />
        </div>

        <div class="flex items-center justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="isLoading"
          >
            Update
          </button>
        </div>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
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
  name: string;
  location: string;
  email: string;
  telPhone: string;
}

const formData = ref<FormData>({
  name: '',
  location: '',
  email: '',
  telPhone: '',
});

const error = ref('');
const isLoading = ref(false);
const route = useRoute();
// const hospitalId = route.params.hospitalId;

const { id } = useRoute().params
const uri = '/hospitals/' + id

// fetch the product 
// const { data: product } = await useFetch(uri, {key: id})

const fetchHospitalData = async () => {
  try {
    const { data, error: fetchError } = await useIFetch<FormData>(uri, {key: id});

    if (fetchError.value) {
    //   error.value = fetchError.value.message;
    throw createError({statusCode: 404,statusMessage: 'Hospital not found', fatal: true})
    } else {
      formData.value = data.value || formData.value;
      console.log("formData.value",formData.value)
    }
  } catch (err) {
    error.value = (err as Error).message;
  }
};

onMounted(() => {
  fetchHospitalData();
});

const submitForm = async () => {
  isLoading.value = true;
  error.value = '';

  // const openUpdateForm = (hospitalId: number) => {
    // Open the update form for the hospital with the given ID
  // navigateTo(`/admin/dashboard/hospital/UpdateHospital/${hospitalId}`);
// navigateTo(`hospital/UpdateHospital/${hospitalId}`);

  try {
    // const { error: fetchError } = await $fetch(`/hospitals/${id}`, {
      const { error: fetchError } = await useIFetch(`/hospitals/${id}`, {
      method: 'PUT',
      body: formData.value,
    });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      console.log('Hospital updated successfully');
      console.log('formData.value :',formData.value)
    }
  } catch (err) {
    error.value = (err as Error).message;
  } finally {
    isLoading.value = false;
  }
};
</script>
