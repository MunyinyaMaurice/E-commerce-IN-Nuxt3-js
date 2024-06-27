/**
 * Working well
 * with state management
 */

<!-- <template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between mb-4">
      <div>
        <button
          v-if="refreshData"
          @click="refreshData"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
        >
          REFRESH
        </button>
      </div>
      <div>
        <button
          @click="navigateToCreateHospital"
          class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
        >
          Create New Hospital
        </button>
      </div>
    </div>
      
    <h1 class="text-2xl text-center text-decoration-line: underline font-bold mb-4">Hospitals</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-else>
      <table class="w-full border-collapse">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4 border">ID</th>
            <th class="py-2 px-4 border">Name</th>
            <th class="py-2 px-4 border">Location</th>
            <th class="py-2 px-4 border">Email</th>
            <th class="py-2 px-4 border">Phone</th>
            <th class="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="hospital in hospitals"
            :key="hospital.id"
            class="border-b hover:bg-gray-100"
          >
            <td class="py-2 px-4 border">{{ hospital.id }}</td>
            <td class="py-2 px-4 border">{{ hospital.name }}</td>
            <td class="py-2 px-4 border">{{ hospital.location }}</td>
            <td class="py-2 px-4 border">{{ hospital.email }}</td>
            <td class="py-2 px-4 border">{{ hospital.telPhone }}</td>
            <td class="py-2 px-4 border">
              <div class="relative inline-block">
                <button
                  @click="toggleDropdown(hospital.id)"
                  class="inline-flex items-center px-3 py-2 border rounded text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                >
                  <svg
                    class="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                    />
                  </svg>
                </button>
                <div
                  v-show="dropdownVisible(hospital.id)"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <button
                    @click="openUpdateForm(hospital.id)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Update
                  </button>
                  <button
                    @click="deleteHospital(hospital.id)"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "~/composables/state";
import {useIFetch} from "~/composables/useIFetch";

interface Hospital {
  id: number;
  name: string;
  location: string;
  email: string;
  telPhone: string;
}

const hospitals = ref<Hospital[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);
const openDropdownId = ref<number | null>(null);

const router = useRouter();
const { accessToken } = useTheme();

const { fetchData } = useIFetch();

const fetchHospitals = async () => {
  if (!accessToken.value) {
    router.push("/login");
    return;
  }

  loading.value = true;
  error.value = null;

  try {
    const { data, error: fetchError } = await fetchData<Hospital[]>("hospitals");

    if (fetchError) {
      error.value = fetchError.message || "An error occurred while fetching hospitals";
    } else {
      hospitals.value = data || [];
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : "An unexpected error occurred";
  } finally {
    loading.value = false;
  }
};

const toggleDropdown = (hospitalId: number) => {
  openDropdownId.value = openDropdownId.value === hospitalId ? null : hospitalId;
};

const dropdownVisible = (hospitalId: number) => {
  return openDropdownId.value === hospitalId;
};

const openUpdateForm = (hospitalId: number) => {
  router.push(`/dashboard/hospital/UpdateHospital/${hospitalId}`);
};

const navigateToCreateHospital = () => {
  router.push("/dashboard/hospital/createHospital");
};

const deleteHospital = async (hospitalId: number) => {
  try {
    const { error: deleteError } = await useIFetch(`/hospitals/${hospitalId}`, {
      method: "DELETE",
    });

    if (deleteError) {
      console.error("Failed to delete hospital:", deleteError.message);
    } else {
      console.log("Hospital deleted successfully");
      await fetchHospitals();
    }
  } catch (err) {
    console.error("Failed to delete hospital:", err instanceof Error ? err.message : "An unexpected error occurred");
  }
};

onMounted(fetchHospitals);
</script> -->

/**
 * Working well
 * with not state management
 */
<template>
    <div class="container mx-auto p-4">

        <div class="flex justify-between mb-4">
    <div>
      <button
        v-if="refreshData"
        @click="refreshData"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >
        REFRESH
      </button>
    </div>
    <div>
       
      <button
        @click="navigateToCreateHospital"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >
        Create New Hospital
      </button>
    </div>
  </div>
      
      <h1 class="text-2xl text-center text-decoration-line: underline font-bold mb-4">Hospitals</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">Name</th>
              <th class="py-2 px-4 border">Location</th>
              <th class="py-2 px-4 border">Email</th>
              <th class="py-2 px-4 border">Phone</th>
              <th class="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="hospital in hospitals"
              :key="hospital.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 border">{{ hospital.id }}</td>
              <td class="py-2 px-4 border">{{ hospital.name }}</td>
              <td class="py-2 px-4 border">{{ hospital.location }}</td>
              <td class="py-2 px-4 border">{{ hospital.email }}</td>
              <td class="py-2 px-4 border">{{ hospital.telPhone }}</td>
  
              <td class="py-2 px-4 border">
                <div class="relative inline-block">
                  <button
                    @click="toggleDropdown(hospital.id)"
                    class="inline-flex items-center px-3 py-2 border rounded text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  >
                    <svg
                      class="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
                      />
                    </svg>
                  </button>
                  <div
                    v-show="dropdownVisible(hospital.id)"
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <button
                      @click="openUpdateForm(hospital.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Update
                    </button>
                    <button
                      @click="deleteHospital(hospital.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useIFetch } from "~/composables/useIFetch";
  // import { useTheme } from "~/composables/useTheme";
  import { navigateTo } from '#app';
  // const { accessToken } = useTheme();
  //   import { useFetch } from '#app';
// onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });
  
  interface Hospital {
    id: number;
    name: string;
    location: string;
    email: string;
    telPhone: string;
  }
  
  const hospitals = ref<Hospital[]>([]);
  const loading = ref(false);
  const error = ref("");
  const refreshData = ref<() => void | null>(null);
  const openDropdownId = ref<number | null>(null);
  
  const fetchHospitals = async () => {
  //    if (!accessToken.value) {
  //   router.push("/login");
  //   return;
  // }

    
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
  const toggleDropdown = (hospitalId: number) => {
    openDropdownId.value = openDropdownId.value === hospitalId ? null : hospitalId;
  };
  
  const dropdownVisible = (hospitalId: number) => {
    return openDropdownId.value === hospitalId;
  };
  
  const openUpdateForm = (hospitalId: number) => {
    // Open the update form for the hospital with the given ID
//   navigateTo(`/admin/dashboard/hospital/UpdateHospital/${hospitalId}`);
navigateTo(`hospital/UpdateHospital/${hospitalId}`);
    // You can navigate to the update form component or display a modal here
    console.log(`Opening update form for hospital with ID ${hospitalId}`);
  };
  const navigateToCreateHospital = () => {
  navigateTo('/dashboard/hospital/createHospital'); 
};

const deleteHospital = async (hospitalId: number) => {
  try {
    const { error } = await useIFetch(`/hospitals/${hospitalId}`, {
      method: 'DELETE',
    });

    if (error.value) {
      console.error('Failed to delete hospital:', error.value.message);
    } else {
      console.log('Hospital deleted successfully');
      // Optionally, you can refetch the hospital list after a successful deletion
      await fetchHospitals();
    }
  } catch (err) {
    console.error('Failed to delete hospital:', err);
  }
};
  
  onMounted(fetchHospitals);
  </script>
   