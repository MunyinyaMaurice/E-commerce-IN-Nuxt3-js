<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div class="max-w-lg w-full">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in">
          <div class="bg-blue-800 text-white text-center py-4">
            <h1 class="text-2xl font-bold">Congratulations!</h1>
          </div>
          <div class="p-6">
            <p class="text-gray-700 text-lg mb-4">
              You have successfully submitted your application and you are qualified for the program.
            </p>
            <p class="text-gray-700 text-lg">
              Please check your email for more details.
            </p>
            <div class="flex justify-center mt-6">
              <button @click="goHome" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                OK
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goHome = () => {
    router.push('/')
  }
  
//   const printMessage = () => {
//     window.print()
//   }
  </script>
  
  <style scoped>
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  </style>
  