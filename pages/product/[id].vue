<template>
    <div class="font-bold text-gray-500 m-4 truncate">
<img :src="product.image" alert="product thumb" class="thumb">
<p>{{ product.title }}</p>
<p>{{ product.price }}</p>
<p>{{ product.id }}</p>
<br>
<p><p>
    
</p></p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product 
const { data: product } = await useFetch(uri, {key: id})
definePageMeta({ 
    layout:'products'
})
</script>

<style lang="scss" scoped>

</style>