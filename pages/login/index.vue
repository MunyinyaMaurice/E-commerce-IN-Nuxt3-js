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

<script>
import { ref } from 'vue';
import { useIFetch } from '~/composables/useIFetch';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { fetchCurrentUser } from '~/services/authService';


definePageMeta({
  layout: "empty",
});

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);
    const error = ref(null);
    const router = useRouter();
    const userStore = useUserStore();

    const submitLogin = async () => {
      isLoading.value = true;
      error.value = null;

      try {
        const { data, error: fetchError } = await useIFetch('auth/authenticate', {
          method: 'POST',
          body: {
            email: email.value,
            password: password.value,
          },
        });

        if (fetchError.value) {
          error.value = 'Login failed. Please check your credentials.';
        } else if (data.value) {
          localStorage.setItem('accessToken', data.value.accessToken);
          localStorage.setItem('refreshToken', data.value.refreshToken);

          // Fetch the current user data
          const user = await fetchCurrentUser();
          userStore.setUser(user);

          // Redirect based on user role
          const role = userStore.role;
          if (role === 'SUPER_ADMIN') {
            router.push({ path: '/dashboard/hospital' });
          } else if (role === 'ADMIN') {
            router.push({ path: '/dashboard/department' });
          } else if (role === 'COORDINATOR') {
            router.push({ path: '/dashboard/task' });
          } else if (role === 'VOLUNTEER') {
            router.push({ path: '/dashboard' });
          } else {
            router.push({ path: '/login' }); // Fallback to login if role is undefined
          }
        }
      } catch (err) {
        error.value = 'An error occurred during login. Please try again.';
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      isLoading,
      error,
      submitLogin,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>




/**
 * working well 
 *with state management
 */
 
 <!-- <template>
  <div class="login-container">
    <form @submit.prevent="submitLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="isLoading">
        Login
      </button>
      <div v-if="error" class="error">{{ error }}</div>
    </form>
  </div>
</template>


<script>
import { ref } from 'vue';
import { useIFetch } from '~/composables/useIFetch';
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/user';
import { fetchCurrentUser } from '~/services/authService';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const isLoading = ref(false);
    const error = ref(null);
    const router = useRouter();
    const userStore = useUserStore();

    const submitLogin = async () => {
      isLoading.value = true;
      error.value = null;

      try {
        const { data, error: fetchError } = await useIFetch('auth/authenticate', {
          method: 'POST',
          body: {
            email: email.value,
            password: password.value,
          },
        });

        if (fetchError.value) {
          error.value = 'Login failed. Please check your credentials.';
        } else if (data.value) {
          localStorage.setItem('accessToken', data.value.accessToken);
          localStorage.setItem('refreshToken', data.value.refreshToken);

          // Fetch the current user data
          const user = await fetchCurrentUser();
          userStore.setUser(user);

          // Redirect based on user role
          const role = userStore.role;
          if (role === 'SUPER_ADMIN') {
            router.push({ path: '/dashboard/hospital' });
          } else if (role === 'ADMIN') {
            router.push({ path: '/dashboard/department' });
          } else if (role === 'COORDINATOR') {
            router.push({ path: '/dashboard/task' });
          } else if (role === 'VOLUNTEER') {
            router.push({ path: '/dashboard' });
          } else {
            router.push({ path: '/login' }); // Fallback to login if role is undefined
          }
        }
      } catch (err) {
        error.value = 'An error occurred during login. Please try again.';
      } finally {
        isLoading.value = false;
      }
    };

    return {
      email,
      password,
      isLoading,
      error,
      submitLogin,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style> -->


/**
 * working well 
 *but no use of state management
 */ 
