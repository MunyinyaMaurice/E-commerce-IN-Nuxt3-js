<template>
    <div class="bg-white shadow-sm ">
    <div class="sticky top-0 z-50">
      <PageNavbar />
      </div>
      <div class="mx-2">
        <!-- <openPositionsCard /> -->
      
         <PageSlider />
       
        <!-- <PageStatement />    -->
        <div> 
            <!-- <PageOpenPosition /> -->
        </div>
        <div>
    <!-- <h2>Home</h2> -->
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
     Dolorem facere accusantium velit eaque fugit ut,
      atque cum mollitia molestiae voluptates? 
      Eum consectetur obcaecati quia officiis, 
    laudantium molestias accusantium. Quam, ea.</p>
    </div>
        <!-- <PageCard /> -->
        
        <!-- <AdminDashboardHospital /> -->
        <!-- </div> -->
        <div>
            <PageFooter />
        </div>
        </div>
        </div>
</template>

<!-- <script setup lang="ts">
const appConfig = useAppConfig()

</script> -->


<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useTheme } from "~/composables/state";
// import { useTheme } from "~/composables/state";
definePageMeta({
  layout: "landingPage",
});
const appConfig = useAppConfig()
useSeoMeta({
  charset: "UTF-8",
  robots: "index,follow",
  contentType: "text/html",
  viewport: "width=device-width, initial-scale=1",
  ogLocale: "en_US",
  ogLocaleAlternate: "en_US",
  title: "Hospital volunteering",
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Hospital volunteering` : "Hospital volunteering";
  },
  description: "",
  image: "https://via.placeholder.com/150",
  creator: "@maurice",
  author: "Munyinya Shema Maurice",
  applicationName: "National Hospital Volunteering Management System",
  ogSiteName: "NHVMS",
  ogTitle: "Hospital volunteering",
  ogDescription: "Hospital volunteering",
  keywords: "Hospital, volunteering",
});

const theme = useTheme();

onMounted(() => {
  initFlowbite();
});

  

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
