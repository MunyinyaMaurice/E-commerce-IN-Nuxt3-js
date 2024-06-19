
<!-- <template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="position in positions"
          :key="position.id"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg" src="~/assets/images/hiring.jpeg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ position.description }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Department: {{ position.departmentsName }} <br />
              Hospital: {{ position.hospitalsName }} <br />
              Volunteers needed: {{ position.numbOfVols }} <br />
              Start Date: {{ position.startDate }} <br />
              Finish Date: {{ position.finishDate }} <br />
              Required Skills: {{ position.requiredSkills }}
            </p>
            <NuxtLink :to="`/openPosition/${position.id}`"> <p class="btn my-4"> View Details</p></NuxtLink>
            
          </div>
        </div>
      </div>
    </div>
  </template> -->

  <template>
    <div>
      <div v-if="loading">Loading...</div>
      <div v-if="error">{{ error }}</div>
      <div v-if="!loading && !error" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="position in positions"
          :key="position.id"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img class="rounded-t-lg w-full" src="~/assets/images/hiring.jpeg" alt="" />
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

  
<!--   
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
  </style>
   -->