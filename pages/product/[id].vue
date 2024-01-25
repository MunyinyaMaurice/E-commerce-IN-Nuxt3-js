<template>
    <div>
<h2><p>product details for {{ id }}</p></h2><br>
<p><p>
    
</p></p>
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