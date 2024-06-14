
<!-- 
   <template>
    <div class="container mx-auto p-6">
      <form @submit.prevent="saveApplication">
        <h1 class="text-2xl font-bold mb-4">User Information</h1>
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="nationalId">National ID:</label>
          <input
            v-model="enteredNationalId"
            class="border border-gray-400 p-2 w-full"
            type="text"
            id="nationalId"
            placeholder="Enter your national ID"
            @input="fetchUserInfo"
          />
        </div>
        <div v-if="userInfo">
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="firstName">First Name:</label>
            <input
              v-model="formData.firstName"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="firstName"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="lastName">Last Name:</label>
            <input
              v-model="formData.lastName"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="lastName"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="degreeId">Degree ID:</label>
            <input
              v-model="formData.degreeId"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="degreeId"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="majorFocus">Major Focus:</label>
            <input
              v-model="formData.majorFocus"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="majorFocus"
              readonly
            />
          </div>
  
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="email">Email:</label>
            <input
              v-model="formData.email"
              class="border border-gray-400 p-2 w-full"
              type="text"
              id="email"
            />
          </div>
  
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="telPhone">Phone Number:</label>
            <input
              v-model="formData.telPhone"
              class="border border-gray-400 p-2 w-full"
              type="text"
              id="telPhone"
            />
          </div>
        </div>
        <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded" :disabled="isLoading">
          {{ isLoading ? 'Saving...' : 'Save' }}
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useFetch } from '#app';
  
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    telPhone: string;
    nationalId: string;
    degreeId: string;
    majorFocus: string;
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
  
  const fetchUserInfo = () => {
    if (enteredNationalId.value) {
      useFetch(`http://localhost:23991/api/qualifications/${enteredNationalId.value}`, {
        onResponse({ response }) {
          const data = response._data;
          userInfo.value = data;
          formData.value = {
            ...formData.value,
            firstName: data.firstName,
            lastName: data.lastName,
            degreeId: data.degreeId,
            majorFocus: data.majorFocus,
            nationalId: enteredNationalId.value,
          };
        },
        onError() {
          userInfo.value = null;
        },
      });
    } else {
      userInfo.value = null;
    }
  };
  
  const saveApplication = async () => {
    isLoading.value = true;
    error.value = '';
  
    try {
      const { error: fetchError } = await useFetch('http://localhost:23991/api/qualifications', {
        method: 'POST',
        body: formData.value,
      });
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        // Application saved successfully, perform any additional actions
        console.log('Application saved successfully');
        // Reset the form data
        formData.value = {
          firstName: '',
          lastName: '',
          email: '',
          telPhone: '',
          nationalId: '',
          degreeId: '',
          majorFocus: '',
        };
      }
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };
  </script>
   -->
   <template>
    <div class="container content-center mx-auto p-6">
      <form @submit.prevent="saveApplication">
        <h1 class="text-2xl font-bold mb-4">User Information</h1>
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="nationalId">National ID:</label>
          <input
            v-model="enteredNationalId"
            class="border border-gray-400 p-2 w-full"
            type="text"
            id="nationalId"
            placeholder="Enter your national ID"
            @input="fetchUserInfo"
          />
        </div>
        <div v-if="userInfo">
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="firstName">First Name:</label>
            <input
              v-model="formData.firstName"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="firstName"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="lastName">Last Name:</label>
            <input
              v-model="formData.lastName"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="lastName"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="degreeId">Degree ID:</label>
            <input
              v-model="formData.degreeId"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="degreeId"
              readonly
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="majorFocus">Major Focus:</label>
            <input
              v-model="formData.majorFocus"
              class="border border-gray-400 p-2 w-full bg-gray-200"
              type="text"
              id="majorFocus"
              readonly
            />
          </div>
  
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="email">Email:</label>
            <input
              v-model="formData.email"
              class="border border-gray-400 p-2 w-full"
              type="text"
              id="email"
            />
          </div>
  
          <div class="mb-4">
            <label class="block mb-2 font-bold" for="telPhone">Phone Number:</label>
            <input
              v-model="formData.telPhone"
              class="border border-gray-400 p-2 w-full"
              type="text"
              id="telPhone"
            />
          </div>
        </div>
        <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded" :disabled="isLoading">
          {{ isLoading ? 'Saving...' : 'Save' }}
        </button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useFetch } from '#app';
  
  interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    telPhone: string;
    nationalId: string;
    degreeId: string;
    majorFocus: string;
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
  
  const fetchUserInfo = async () => {
    if (enteredNationalId.value) {
      try {
        const { data, error } = await useFetch(`http://localhost:23991/api/qualifications/${enteredNationalId.value}`);
        if (error.value) {
          throw new Error(error.value);
        }
        const user = data.value;
        userInfo.value = user;
        formData.value = {
          ...formData.value,
          firstName: user.firstName,
          lastName: user.lastName,
          degreeId: user.degreeId,
          majorFocus: user.majorFocus,
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
  
    try {
      const { error: fetchError } = await useFetch('http://localhost:23999/api/applicants', {
        method: 'POST',
        body: formData.value,
      });
  
      if (fetchError.value) {
        throw new Error(fetchError.value.message);
      } else {
        // Application saved successfully, perform any additional actions
        console.log('Application saved successfully');
        // Reset the form data
        formData.value = {
          firstName: '',
          lastName: '',
          email: '',
          telPhone: '',
          nationalId: '',
          degreeId: '',
          majorFocus: '',
        };
      }
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };
  </script>
  