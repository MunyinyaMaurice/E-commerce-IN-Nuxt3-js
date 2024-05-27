<template>
    <div>
<h2>Volunteer</h2>
<div>
   <div class="grid grid-cols-4 gap-5">
    <div v-for=" i in product">
    <ProductCard :product="i" />
    </div>
   </div>
</div>
    </div>
</template>

<script setup> 
// definePageMeta({ 
//     layout:'product'
// })
//Fetch products
    const {data: vulunteer} = await useFetch('')
    // {
    //     method:"post"
    // }

    useHead({
        title: 'Nuxt Dojo |product page',
        meta:[
            {
                name:'description', content: 'Nuxt 3 Product'
            }
        ]
    })
</script>



