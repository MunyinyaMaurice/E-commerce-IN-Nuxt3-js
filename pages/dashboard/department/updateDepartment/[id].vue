<template>
    <!-- <div class="container mx-auto p-4"> -->
      <div class="flex justify-center items-center min-h-screen p-6 bg-gray-100">
    <div class="card max-w-4xl w-full">
      <h1 class="text-2xl font-bold mb-4">Update Department</h1>
  
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <form @submit.prevent="updateDepartment">
          <div class="mb-4">
            <label for="name" class="block font-bold mb-2">Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            />
          </div>
  
          <div class="mb-4">
            <label for="requiredSkills" class="block font-bold mb-2">Required Skills</label>
            <div v-for="(skill, index) in form.departmentRequirements" :key="index" class="flex items-center mb-2">
              <input
                v-model="form.departmentRequirements[index]"
                type="text"
                class="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
              <button
                type="button"
                @click="removeSkill(index)"
                class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
            <button
              type="button"
              @click="addSkill"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Skill
            </button>
          </div>
  
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useIFetch } from "~/composables/useIFetch";
  import { navigateTo } from '#app';
    onMounted(() => {
  // Check if user is authenticated
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    // Redirect to login page if accessToken is missing
    navigateTo('/login');
  }
    });


    interface form {
    name: string;
    departmentRequirements: string[],
}
  
  const form = ref<form>({
    name: '',
    departmentRequirements: [],
  });

  const loading = ref(false);
  const error = ref('');
//   const route = useRoute();
  const { id } = useRoute().params
const uri = '/departments/' + id
  
  const fetchDepartment = async () => {
    loading.value = true;
    error.value = '';
  
    try {
    //   const { data, error: fetchError } = await useIFetch(`/departments/${route.params.id}`);
      const { data, error: fetchError } = await useIFetch<form>(uri, {key: id});
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        console.log("Data to update ", form.value = data.value);
        form.value = data.value;
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  const addSkill = () => {
    form.value.departmentRequirements.push('');
  };
  
  const removeSkill = (index) => {
    form.value.departmentRequirements.splice(index, 1);
  };
  
  const updateDepartment = async () => {
    loading.value = true;
    error.value = '';
  
    try {
      const { error: updateError } = await useFetch(`/departments/${form.value.id}`, {
        method: 'PUT',
        body: form.value,
      });
  
      if (updateError.value) {
        error.value = updateError.value.message;
      } else {
        // Optionally, you can navigate or show a success message here
      }
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(fetchDepartment);
  </script>