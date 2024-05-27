<template>
    <div>
      <VueSlickCarousel v-bind="settings">
        <!-- Carousel slides go here -->
        <div class="h-80 bg-red-600 text-white text-center text-4xl font-semibold p-36">Red</div>
        <div class="h-80 bg-yellow-400 text-white text-center text-4xl font-semibold p-36">Yellow</div>
        <div class="h-80 bg-green-400 text-white text-center text-4xl font-semibold p-36">Green</div>
        <div class="h-80 bg-blue-600 text-white text-center text-4xl font-semibold p-36">Blue</div>
      </VueSlickCarousel>
    </div>
  </template>
  
  <script setup>
  import VueSlickCarousel from 'vue-slick-carousel';
  import 'vue-slick-carousel/dist/vue-slick-carousel.css';
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
  
  const name = 'Slider';
  const components = { VueSlickCarousel };
  
  const data = () => ({
    settings: {
      dots: true,
      infinite: true,
      rows: 1,
      initialSlide: 2,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      swipeToSlide: true,
      arrows: true,
    },
  });
  </script>
  
  <style lang="scss" scoped>
    /* Add any scoped styles here if needed */
  </style>
  