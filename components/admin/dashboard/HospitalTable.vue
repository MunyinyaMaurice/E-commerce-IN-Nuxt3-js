<template>
     <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Hospitals</h2>
      <table>
        <thead>
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">ID</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Name</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Location</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Email</th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="hospital in hospitals" :key="hospital.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{{ hospital.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ hospital.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ hospital.location }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ hospital.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ hospital.telPhone }}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuth } from "@/composables/useAuth";
  
  const { fetchWithAuth } = useAuth();
  
  const hospitals = ref([]);
  
  const fetchHospitals = async () => {
    try {
      const data = await fetchWithAuth("hospitals");
      hospitals.value = data;
    } catch (err) {
      console.error("Error fetching hospitals:", err);
    }
  };
  
  fetchHospitals();
  </script>