<template>
    <div>
        <!-- <header>
            <nav>
                <NuxtLink to="/">Nuxt Dojo</NuxtLink>
                <ul>
                    <li> <NuxtLink to="/">Home </NuxtLink></li>
                    <li> <NuxtLink to="/about">About</NuxtLink></li>
                    <li> <NuxtLink to="/product">Product</NuxtLink></li>
                    
                </ul>
            </nav>
        </header> -->
<h2>Home</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Dolorem facere accusantium velit eaque fugit ut,
      atque cum mollitia molestiae voluptates? 
      Eum consectetur obcaecati quia officiis, 
    laudantium molestias accusantium. Quam, ea.</p>
    </div>
    <div>
        <!-- <card /> -->
        <AdminDashboardHospital />
        </div>
</template>

  <script setup>
// import { onMounted } from 'vue';
// // import App from './App.vue';
// import { createRouter, createWebHistory } from 'vue-router';
// import Hospital from '../components/admin/dashboard/Hospital.vue';

// const routes = [
//   { path: '/admin/dashboard/hospital', component: Hospital },
//   // Add more routes as needed
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// createApp(App).use(router).mount('#app');
</script>


<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36;
}
p{
    margin: 20px 0;
}
</style>
