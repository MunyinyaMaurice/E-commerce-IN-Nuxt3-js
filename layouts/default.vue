<template>
    <div>
      <header class="bg-white shadow-sm sticky top-0 z-50">
        <nav class="container mx-auto p-4 flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center space-x-2 font-bold">
            <img class="h-12" src="~/assets/images/coat.png" alt="NHVMS Logo" />
            <span class="text-2xl font-semibold text-gray-800">NHVMS</span>
          </NuxtLink>
          <ul class="flex items-center gap-4">
        
            <li>
              <NuxtLink 
                to="/apply" 
                class="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-sm px-4 py-2"
              >
                Become a Volunteer
              </NuxtLink>
            </li>
            <li>
              <NuxtLink 
                to="/login" 
                class="flex items-center px-4 py-2 text-sm font-medium text-teal-400 bg-white rounded-full border border-teal-400 hover:bg-teal-100 hover:text-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-400"
              >
                <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Sign In
              </NuxtLink>
            </li>
            
          </ul>
        </nav>
      </header>
      <div class="container mx-auto p-4">
        <slot />
      </div>
    </div>
  </template>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  
