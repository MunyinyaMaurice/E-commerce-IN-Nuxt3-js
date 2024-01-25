<template>
    <div>
<h2>Product</h2>
<div>
   <div class="grid grid-cols-4 gap-5">
    <div v-for=" i in products">
    <NuxtLink :to="`/product/${i.id}`">{{ i.title }} </NuxtLink>
    </div>
   </div>
</div>
    </div>
</template>

<script setup> 
definePageMeta({ 
    layout:'product'
})
//Fetch products
    const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>



