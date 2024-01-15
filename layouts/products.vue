<template>
    <div>
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4 flex justify-between">
                <NuxtLink to="/" class="font-bold">Nuxt Dojo March</NuxtLink>
                
            </nav>
        </header>
        <!-- output the page content -->
        <div class="container mx-auto p-4">
            <slot />
              <footer class="container mx-auto p-4 flex justify-between border-t-2">
                <ul class="flex gap-4">
                    <li> <NuxtLink to="/">Home </NuxtLink></li>
                    <li> <NuxtLink to="/about">About</NuxtLink></li>
                    <li> <NuxtLink to="/product">Product</NuxtLink></li>
                    
                </ul>
              </footer>
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