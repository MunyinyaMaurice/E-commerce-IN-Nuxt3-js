

   <template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full">
        <h2 class="text-2xl font-bold mb-6 text-center">Hospitals</h2>
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
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
  import { ref, onMounted } from "vue";
  import { useAuth } from "@/composables/useAuth";
  
  const hospitals = ref([]);
  const { fetchWithAuth } = useAuth();
  
  const fetchHospitals = async () => {
    try {
      console.log("Fetching hospitals...");
      const data = await fetchWithAuth("hospitals",{
            method: "GET",
          });
      console.log("Fetched hospitals data:", data); // Log the fetched data
      hospitals.value = data;
    } catch (err) {
      console.error("Error fetching hospitals:", err);
    }
  };
  
  onMounted(() => {
    fetchHospitals();
  });
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  