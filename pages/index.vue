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

<script setup lang="ts">
const appConfig = useAppConfig()
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
