<template>
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Create Hospital</h2>
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
            Create
          </button>
        </div>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useIFetch } from "~/composables/useIFetch";
  
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
  
  const submitForm = async () => {
    isLoading.value = true;
    error.value = '';
  
    try {
      const { error: fetchError } = await useIFetch('/hospitals', {
        method: 'POST',
        body: formData.value,
      });
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        // Hospital created successfully, perform any additional actions
        console.log('Hospital created successfully');
        // Reset the form data
        formData.value = {
          name: '',
          location: '',
          email: '',
          telPhone: '',
        };
      }
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };
  </script>