<template>
    <div class="font-bold text-gray-500 m-4 truncate">
        <Head>
            <Title>
                NUXT DOJO | {{ product.title }}
            </Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
<productDetails :product="product" />
    </div> 
</template>

<script setup>
const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

// fetch the product 
const { data: product } = await useFetch(uri, {key: id})
if (!product.value) {
    throw createError({statusCode: 404,statusMessage: 'Product not found', fatal: true})
}

definePageMeta({ 
    layout:'products'
})
</script>

<style lang="scss" scoped>

</style> 