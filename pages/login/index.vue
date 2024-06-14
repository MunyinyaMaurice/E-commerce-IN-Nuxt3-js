
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            :disabled="isLoading"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
// import { useIFetch } from '~/plugins/useIFetch';
import { useIFetch } from "~/composables/useIFetch";

definePageMeta({
  layout: "empty",
});

interface AuthResponse {
  refreshToken: string;
  accessToken: string;
}


const email = ref('');
const password = ref('');
const error = ref('');

const submitLogin = async () => {
  try {
    const { data, error: fetchError } = await useIFetch<AuthResponse>('/auth/authenticate', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    });

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else if (data.value) {
      const { refreshToken, accessToken } = data.value;
      useCookie('refreshToken').value = refreshToken;
      useCookie('accessToken').value = accessToken;
      console.log("accessToken  :",accessToken)
      // navigateTo('/dashboard');
      navigateTo('/dashboard/department/createDepartment');

    } else {
      error.value = 'No data received from the server';
    }
  } catch (err) {
    error.value = (err as Error).message;
  }
};
</script>