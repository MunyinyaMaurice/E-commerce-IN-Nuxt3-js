  <template>
    <div class="flex justify-center items-center min-h-screen p-6 bg-gray-100">
    <div class="card max-w-4xl w-full">
    <!-- <div class="container mx-auto p-4"> -->
      <h1 class="text-2xl font-bold mb-4">Create Department</h1>
  
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <form @submit.prevent="createDepartment">
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
            <div v-for="(skill, index) in form.required_skills" :key="index" class="flex items-center mb-2">
              <input
                v-model="form.required_skills[index]"
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
  
          <div class="mb-4">
            <label for="hospital" class="block font-bold mb-2">Hospital</label>
            <select
              id="hospital"
              v-model="form.hospitalId"
              class="border border-gray-300 rounded-md px-3 py-2 w-full"
              required
            >
              <option value="" disabled>Select a hospital</option>
              <option v-for="hospital in hospitals" :key="hospital.id" :value="hospital.id">
                {{ hospital.name }}
              </option>
            </select>
          </div>
  
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">
  
  import { ref, onMounted } from "vue";
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
  
    interface Hospital {
      id: number;
      name: string;
    }
  
  const form = ref({
    name: '',
    required_skills: [],
    hospitalId: '',
  });
  
  const hospitals = ref<Hospital[]>([]);
    const loading = ref(false);
    const error = ref("");
    const refreshData = ref<() => void | null>(null);
    const openDropdownId = ref<number | null>(null);
    
    const fetchHospitals = async () => {
      loading.value = true;
      error.value = "";
    
      try {
        const {
          data,
          error: fetchError,
          refresh,
        } = await useIFetch<Hospital[]>("hospitals", { lazy: false });
    
        if (fetchError.value) {
          error.value = fetchError.value.message;
        } else {
          hospitals.value = data.value || [];
          console.log("hospitals:", hospitals.value);
        }
    
        refreshData.value = refresh;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };
  
  const addSkill = () => {
    form.value.required_skills.push('');
  };
  
  const removeSkill = (index) => {
    form.value.required_skills.splice(index, 1);
  };
  const createDepartment = async () => {
  loading.value = true;
  error.value = '';

  try {
    // const { error: createError } = await useIFetch(`/departments?hospitalId=${form.value.hospitalId}`, {
      const { error: createError } = await useIFetch(`/departments/${form.value.hospitalId}`, {
      method: 'POST',
      body: { ...form.value, required_skills: form.value.required_skills },
    });

    console.log("form Data :", form.value);
    console.log("form required_skills :", form.value.required_skills);

    if (createError.value) {
      error.value = createError.value.message;
    } else {
      resetForm();
    }
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
  const resetForm = () => {
    form.value = {
      name: '',
      required_skills: [],
      hospitalId: null,
    };
  };
  
  onMounted(fetchHospitals);
  </script>
  