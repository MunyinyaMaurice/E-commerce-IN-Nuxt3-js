<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
        <form @submit.prevent="submitRegistration">
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="firstName">
              First Name
            </label>
            <input
              v-model="formData.firstName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="lastName">
              Last Name
            </label>
            <input
              v-model="formData.lastName"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Enter your last name"
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
              id="email"
              type="text"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="age">
              Age
            </label>
            <input
              v-model="formData.age"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Enter your age"
              required
            />
          </div>
          <div class="mb-4">
  <label class="block text-gray-700 font-bold mb-2" for="gender">Gender</label>
  <select
    v-model="formData.gender"
    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="gender"
    required
  >
    <option value="">Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>
</div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="telPhone">
               Phone-number
            </label>
            <input
              v-model="formData.telPhone"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="telPhone"
              type="text"
              placeholder="Enter your Tel-phone-number"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="password">
              Password
            </label>
            <input
              v-model="formData.password"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="****************"
              required
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="homeAddress">
                Home Address
            </label>
            <input
              v-model="formData.homeAddress"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter your location"
              required
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              :disabled="isLoading"
            >
              Register
            </button>
          </div>
        </form>
        <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useIFetch } from "~/composables/useIFetch";
  definePageMeta({
  layout: "empty",
});
  interface RegistrationData {
    firstName: string;
    lastName: string;
    age: number;
    gender: 'Male' | 'Female';
    status: string;
    telPhone: string;
    homeAddress: string;
    email: string;
    password: string;
  }
  
  const formData = ref<RegistrationData>({
    firstName: '',
    lastName: '',
    age: 0,
    gender: '',
    status: '',
    telPhone: '',
    homeAddress: '',
    email: '',
    password: '',
  });
  
  const error = ref('');
  
  const submitRegistration = async () => {
    try {
      const { error: fetchError } = await useIFetch('/auth/register', {
        method: 'POST',
        body: formData.value,
      });
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        navigateTo("/dashboard");
        console.log('Registration successful');
      }
    } catch (err) {
      error.value = (err as Error).message;
    }
  };
  </script>