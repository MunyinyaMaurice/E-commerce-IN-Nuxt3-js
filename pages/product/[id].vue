<template>
    <div>
<h2><p>product details for {{ id }}</p></h2><br>
<p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Dolorem facere accusantium velit eaque fugit ut,
      atque cum mollitia molestiae voluptates? 
      Eum consectetur obcaecati quia officiis, 
    laudantium molestias accusantium. Quam, ea.</p></p>
    </div>
</template>

<script setup>
const { id } = useRoute().params

definePageMeta({ 
    layout:'products'
})
</script>

<style lang="scss" scoped>

</style>