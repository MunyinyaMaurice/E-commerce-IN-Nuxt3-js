<template>
         <div class="px-4 py-6">
          <!-- <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-white-200 dark:border-white-600"> -->
            <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-6 rtl:space-x-reverse">
              <img src="https://bookly.africa/uploads/0000/18/2022/09/13/bookly-logo-2.png" class="h-12" alt="Flowbite Logo">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> </span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-teal-400 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="items-center justify-end hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button type="button" class="text-white bg-orange-500 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm px-4 py-2 text-center white:bg-orange-600 dark:hover:bg-orange-200 dark:focus:ring-orange-500">Become a vendor</button>
              </li>
              <li>
          <button type="button" class="flex items-center px-4 py-2 text-sm font-medium text-teal-400 focus:outline-none bg-white rounded-full border border-teal-400 hover:bg-teal-100 hover:text-teal-400 focus:z-10 focus:ring-4 focus:ring-teal-400 dark:focus:ring-teal-400 dark:bg-teal-400 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <svg class="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Sign in
          </button>
        </li>
        
              <li>
                <button type="button" class="text-white bg-teal-400 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm px-4 py-2 text-center white:bg-teal-400 hover:bg-teal-500 dark:focus:ring-teal-400">Sign up</button>
              </li>
              <li>
                <label for="dropdown"></label>
                <select id="dropdown">
                  <option value="option1">
                    <img class="rounded-full" src="~/assets/images/visit1.jpeg" alt="image description"/>
                  </option>
                  <option value="option2">
                    <img class="rounded-full" src="~/assets/images/visit2.jpeg" alt="image description"/>
                  </option>
                  <option value="option3">Option 3</option>
                </select>
              </li>
              
            </ul>
          </div>
          </div>
          </div>
        </nav>
        
            </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>