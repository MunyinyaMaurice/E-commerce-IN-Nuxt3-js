<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Volunteering</NuxtLink>
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home </NuxtLink></li>
                    <li> <NuxtLink to="/about">About</NuxtLink></li>
                    <!-- <li> <NuxtLink to="/product" class="btn">Volunteer</NuxtLink></li> -->
                    <li> <NuxtLink to="/login" class="btn">Signin</NuxtLink></li>
                    <li> <NuxtLink to="/register" class="btn">Signup</NuxtLink></li>
                    
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
              
        </div>
    </div>
</template>
<style lang="scss" scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36;
}
p{
    margin: 20px 0;
}
</style>