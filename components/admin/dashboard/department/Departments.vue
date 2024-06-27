<template>
  <div>
department
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
<!-- 
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
        @click="navigateToCreateDepartment"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded h-10 md:h-10 lg:h-10"
      >
        Create New Department
      </button>
    </div>
  </div>
      
      <h1 class="text-2xl text-center text-decoration-line: underline font-bold mb-4">Departments</h1>
      <div v-if="loading" class="text-center">Loading...</div>
      <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
      <div v-else>
        <table class="w-full border-collapse">
          <thead>
            <tr class="bg-gray-200">
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">Name</th>
              <th class="py-2 px-4 border">Required Skills</th>
              <th class="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="department in departments"
              :key="department.id"
              class="border-b hover:bg-gray-100"
            >
              <td class="py-2 px-4 border">{{ department.id }}</td>
              <td class="py-2 px-4 border">{{ department.name }}</td>
              <td class="py-2 px-4 border">
  <button
    @click="toggleRequiredSkills(department.id)"
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
  <div v-show="showRequiredSkills(department.id)" class="mt-2">
    <ul>
      <li v-for="skill in department.departmentRequirements" :key="skill">{{ skill }}</li>
    </ul>
  </div>
</td> 
  
              <td class="py-2 px-4 border">
                <div class="relative inline-block">
                  <button
                    @click="toggleDropdown(department.id)"
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
                    v-show="dropdownVisible(department.id)"
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <button
                      @click="openUpdateForm(department.id)"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Update
                    </button>
                    <button
                      @click="deleteDepartment(department.id)"
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
  import { navigateTo } from '#app';
  //   import { useFetch } from '#app';
// onMounted(() => {
//   // Check if user is authenticated
//   const accessToken = localStorage.getItem('accessToken');

//   if (!accessToken) {
//     // Redirect to login page if accessToken is missing
//     navigateTo('/login');
//   }
// });
  
  interface Department {
    id: number;
    name: string;
    departmentRequirements:string[];
  }
  
  const departments = ref<Department[]>([]);
  const loading = ref(false);
  const error = ref("");
  const refreshData = ref<() => void | null>(null);
  const openDropdownId = ref<number | null>(null);
  
  const fetchDepartments = async () => {
  loading.value = true;
  error.value = "";

  try {
    const { data, error: fetchError,refresh } = await useIFetch<Department[]>("/departments");

    if (fetchError.value) {
      error.value = fetchError.value.message;
    } else {
      departments.value = data.value || [];
      console.log("departments:", departments.value);
    }
    refreshData.value = refresh;
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};
const showRequiredSkillsMap = ref<{ [key: number]: boolean }>({});

const showRequiredSkills = (departmentId: number) => {
  return showRequiredSkillsMap.value[departmentId] || false;
};

const toggleRequiredSkills = (departmentId: number) => {
  showRequiredSkillsMap.value[departmentId] = !showRequiredSkills(departmentId);
};

  const toggleDropdown = (departmentId: number) => {
    openDropdownId.value = openDropdownId.value === departmentId ? null : departmentId;
  };
  
  const dropdownVisible = (departmentId: number) => {
    return openDropdownId.value === departmentId;
  };
  
//   const openUpdateForm = (departmentId: number) => {
// navigateTo(`department/UpdateDepartment/${departmentId}`);
//     // You can navigate to the update form component or display a modal here
//     console.log(`Opening update form for department with ID ${departmentId}`);
//   };
  const navigateToCreateDepartment = () => {
  navigateTo('/dashboard/department/createDepartment'); 
};

const deleteDepartment = async (departmentId: number) => {
  try {
    const { error } = await useIFetch(`/departments/${departmentId}`, {
      method: 'DELETE',
    });

    if (error.value) {
      console.error('Failed to delete department:', error.value.message);
    } else {
      console.log('department deleted successfully');
      // Optionally, you can refetch the hospital list after a successful deletion
      await fetchDepartments();
    }
  } catch (err) {
    console.error('Failed to delete department:', err);
  }
};
const openUpdateForm = (departmentId: number) => {
    // Open the update form for the hospital with the given ID
//   navigateTo(`/admin/dashboard/hospital/UpdateHospital/${hospitalId}`);
navigateTo(`department/updateDepartment/${departmentId}`);
    // You can navigate to the update form component or display a modal here
    console.log(`Opening update form for department with ID ${departmentId}`);
  };
  
  onMounted(fetchDepartments);
  </script>
   -->