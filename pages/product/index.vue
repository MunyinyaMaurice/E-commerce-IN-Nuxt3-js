<template>
    <div>
<h2>Product</h2>
<div>
   <div class="grid grid-cols-4 gap-5">
    <div v-for=" i in products">
    <NuxtLink :to="`/products/${i.id}`">{{ i.video_status }} </NuxtLink>
    </div>
   </div>
</div>
    </div>
</template>

<script setup>
definePageMeta({ 
    layout:'products'
})
//Fetch products
    const {data: products} = await useFetch('http://127.0.0.1:8000/api/auth/getFeaturedVideo/featured')
</script>



