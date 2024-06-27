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
      </div>
      <h1 class="text-2xl text-center underline font-bold mb-4">Applicants</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">First Name</th>
              <th class="py-2 px-4 border">Last Name</th>
              <th class="py-2 px-4 border">Email</th>
              <th class="py-2 px-4 border">Phone</th>
              <th class="py-2 px-4 border">National ID</th>
              <th class="py-2 px-4 border">Major Focus</th>
              <th class="py-2 px-4 border">Start Date</th>
              <th class="py-2 px-4 border">Finish Date</th>
              <!-- <th class="py-2 px-4 border">Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="applicant in applicants"
              :key="applicant.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 border">{{ applicant.id }}</td>
              <td class="py-2 px-4 border">{{ applicant.firstName }}</td>
              <td class="py-2 px-4 border">{{ applicant.lastName }}</td>
              <td class="py-2 px-4 border">{{ applicant.email }}</td>
              <td class="py-2 px-4 border">{{ applicant.telPhone }}</td>
              <td class="py-2 px-4 border">{{ applicant.nationalId }}</td>
              <td class="py-2 px-4 border">{{ applicant.majorFocus }}</td>
              <td class="py-2 px-4 border">{{ applicant.startDate }}</td>
              <td class="py-2 px-4 border">{{ applicant.finishDate }}</td>
              <!-- <td class="py-2 px-4 border"> -->
                <!-- <div class="relative inline-block">
                  <button
                    @click="toggleDropdown(applicant.id)"
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
                    v-show="dropdownVisible(applicant.id)"
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <button
                      @click="updateToVolunteer(applicant.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Update
                    </button>
                    <button
                      @click="cancelVolunteer(applicant.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                    >
                      Delete
                    </button>
                  </div>
                </div> -->
              <!-- </td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { useIFetch } from "~/composables/useIFetch";
//   onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });
  
  interface Applicant {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    telPhone: string;
    nationalId: number;
    majorFocus: string;
    startDate: string;
    finishDate: string;
  }
  
  const applicants = ref<Applicant[]>([]);
  const loading = ref(false);
  const error = ref("");
  const refreshData = ref<() => void | null>(null);
  const openDropdownId = ref<number | null>(null);
  
  const fetchApplicants = async () => {
    loading.value = true;
    error.value = "";
  
    try {
      const { data, error: fetchError, refresh } = await useIFetch<Applicant[]>("applicants/activeApplicants", { lazy: false });
  
      if (fetchError.value) {
        error.value = fetchError.value.message;
      } else {
        applicants.value = data.value || [];
        console.log("applicants:", applicants.value);
      }
  
      refreshData.value = refresh;
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };
  
//   const toggleDropdown = (applicantId: number) => {
//     openDropdownId.value = openDropdownId.value === applicantId ? null : applicantId;
//   };
  
//   const dropdownVisible = (applicantId: number) => {
//     return openDropdownId.value === applicantId;
//   };
  
//   const updateToVolunteer = async (applicantId: number) => {
//     try {
//       const { error } = await useIFetch(`/applicants/role/${applicantId}`, {
//         method: 'PUT',
//       });
  
//       if (error.value) {
//         console.error('Failed to update to volunteer:', error.value.message);
//       } else {
//         console.log('Volunteer is updated successfully');
//         await fetchApplicants();
//       }
//     } catch (err) {
//       console.error('Failed to update volunteer:', err);
//     }
//   };
  
//   const cancelVolunteer = async (applicantId: number) => {
//     try {
//       const { error } = await useIFetch(`/applicants/${applicantId}`, {
//         method: 'DELETE',
//       });
  
//       if (error.value) {
//         console.error('Failed to cancel volunteer:', error.value.message);
//       } else {
//         console.log('Volunteer is cancelled successfully');
//         await fetchApplicants();
//       }
//     } catch (err) {
//       console.error('Failed to delete volunteer:', err);
//     }
//   };
  
  onMounted(fetchApplicants);
  </script>
  
  <style lang="scss" scoped>
  /* Add any required styles here */
  </style>
  