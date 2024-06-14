<template>
    <div class="container mx-auto p-6">
      <h1 class="text-2xl font-bold mb-4">User Information</h1>
      <div class="mb-4">
        <label class="block mb-2 font-bold" for="nationalId">National ID:</label>
        <input
          v-model="nationalId"
          class="border border-gray-400 p-2 w-full"
          type="text"
          id="nationalId"
          placeholder="Enter your national ID"
        />
      </div>
      <div v-if="userInfo">
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="firstName">First Name:</label>
          <input
            v-model="userInfo.firstName"
            class="border border-gray-400 p-2 w-full bg-gray-200"
            type="text"
            id="firstName"
            readonly
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="lastName">Last Name:</label>
          <input
            v-model="userInfo.lastName"
            class="border border-gray-400 p-2 w-full bg-gray-200"
            type="text"
            id="lastName"
            readonly
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="degreeId">Degree ID:</label>
          <input
            v-model="userInfo.degreeId"
            class="border border-gray-400 p-2 w-full bg-gray-200"
            type="text"
            id="degreeId"
            readonly
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold" for="majorFocus">Major Focus:</label>
          <input
            v-model="userInfo.major_focus"
            class="border border-gray-400 p-2 w-full bg-gray-200"
            type="text"
            id="majorFocus"
            readonly
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const nationalId = ref('');
  const userInfo = ref(null);

const { id } = useRoute().params
const uri = 'http://localhost:23991/api/qualifications/' + id

// fetch the product 
const { data } = await useFetch(uri, {key: id})
if (!data.value) {
    throw createError({statusCode: 404,statusMessage: 'National ID not found', fatal: true})
}
  
//   const userData = [
//     {
//       nationalId: 1234567890123458,
//       firstName: 'John',
//       lastName: 'Doe',
//       degreeId: 1,
//       major_focus: 'Computer Science',
//     },
//   ];
// const {data} = await useFetch('')
  
  watch(nationalId, (newValue) => {
    const foundUser = data.find((user) => user.nationalId === parseInt(newValue));
    userInfo.value = foundUser || null;
  });
  </script>