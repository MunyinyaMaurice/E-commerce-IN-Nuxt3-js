<!-- <template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form @submit.prevent="handleLogin">
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
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables/useAuth";

const router = useRouter();
const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const { data, error } = await useAuth("auth/authenticate", {
      method: "POST",
      body: { email: email.value, password: password.value },
      headers: { "Content-Type": "application/json" },
    });

    if (error.value) {
      throw new Error(error.value.data.message || "API Error");
    }

    const { accessToken, refreshToken } = data.value;
    localStorage.setItem("accessToken", accessToken);
    // localStorage.setItem("refreshToken", refreshToken);

    router.push("/dashboard");
  } catch (err) {
    console.error("Error during login:", err);
    errorMessage.value = err.message === "Page not found" ? "Invalid login endpoint. Please contact support." : "Failed to login. Please check your credentials.";
  } finally {
    isLoading.value = false;
  }
};
</script> -->

<!-- <script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router";
import { useFetch } from "#imports";

const router = useRouter();
const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";
  
  try {
    const { data, error } = await useFetch("auth/authenticate", {
      method: "POST",
      body: { email: email.value, password: password.value },
      headers: { "Content-Type": "application/json" },
    });

    if (error.value) {
      throw new Error(error.value.data.message);
    }

    const { accessToken, refreshToken } = data.value;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/dashboard");
  } catch (err) {
    console.error("Error during login:", err);
    errorMessage.value = "Failed to login. Please check your credentials.";
  } finally {
    isLoading.value = false;
  }
};
</script>
 -->




<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign In</h2>
      <form @submit.prevent="handleLogin">
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
      <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router"; // Import useRouter from vue-router
import { useRuntimeConfig } from "#app"; // Import useRuntimeConfig from Nuxt.js runtime context

const router = useRouter();
const config = useRuntimeConfig();
const apiBaseUrl = config.public.apiBase;

const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

  try {
    const body = JSON.stringify({ email: email.value, password: password.value });
    const response = await $fetch(`${apiBaseUrl}auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const { accessToken, refreshToken } = response;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/dashboard");
  } catch (err) {
    console.error("Error during login:", err);
    errorMessage.value = "Failed to login. Please check your credentials.";
  } finally {
    isLoading.value = false;
  }
};
</script>
<!-- 
<script setup>
import { ref } from "vue";
import { useAuth } from "@/composables/useAuth";
import { useRouter } from "vue-router";

const router = useRouter();
// const { login } = useAuth();
// definePageMeta({
// layout: "empty",
//   // middleware: "admin-guard",
// });
const email = ref("");
const password = ref("");
const isLoading = ref(false);
const errorMessage = ref("");

const handleLogin = async () => {
  isLoading.value = true;
  errorMessage.value = "";

// methods: {
//    async login () {
    try {
      const { data, error } = await useFetch("auth/authenticate", {
      
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (error.value) {
        throw new Error(error.value.data.message);
      }

      const { accessToken, refreshToken } = data.value;
      localStorage.setItem("accessToken","refreshToken", JSON.stringify(data.value));
      // localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("refreshToken", refreshToken);

      router.push("/dashboard");
    } catch (err) {
    console.error("Error during login:", err);
    errorMessage.value = "Failed to login. Please check your credentials.";
  } finally {
    isLoading.value = false;
  }
  };
  
  const refreshToken = async (refreshToken) => {
    try {
      const { data, error } = await useFetch(`${apiBaseUrl}auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken }),
      });

      // if (error.value) {
        if (error.value) {
        console.error("Fetch error details:", error.value);
        if (error.value.statusCode === 401) {
          const response = await refreshToken(refreshToken);
          if (response.accessToken) {
            localStorage.setItem("accessToken", response.accessToken);
            return fetchWithAuth(url, options);
          } else {
            throw new Error("Unauthorized");
          }
        } else {
          throw error.value;
        }
      }
      //   throw new Error(error.value.data.message);
      // }

      return data.value;
    } catch (err) {
      console.error("Refresh token error:", err);
      throw err;
    }
  };
  // };
</script> -->
