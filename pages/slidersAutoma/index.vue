<template>
    <div class="carousel" @mouseover="stopAutoplay" @mouseout="startAutoplay">
      <input type="checkbox" id="autoplay-checkbox" hidden>
  
      <div class="carousel-inner">
        <input
  v-for="index in 3"
  :key="index"
  :id="'carousel-' + index"
  class="carousel-open"
  type="radio"
  :name="'carousel-' + index"
  aria-hidden="true"
  :checked="index === currentSlide ? 'checked' : null"
  hidden
>

        <div
          v-for="index in 3"
          :key="index"
          class="carousel-item"
          :class="{ 'opacity-100': index === currentSlide }"
        >
        <img :src="imageUrls[index - 1]" :alt="'Image ' + index">
        </div>
      </div>
  
      <!-- Your existing controls and indicators here -->
    </div>
  </template>
  
  <script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(1);
const autoplayInterval = ref(null);

const changeSlide = () => {
  currentSlide.value = (currentSlide.value % 3) + 1;
};

// Create an array to hold image URLs
const imageUrls = ref([]);

// Manually push image URLs
onMounted(() => {
    // imageUrls.value.push('http://fakeimg.pl/2000x800/0079D8/fff/?text=Without');
    // imageUrls.value.push('http://fakeimg.pl/2000x800/0079D8/fff/?text=Without');
//   imageUrls.value.push(require(`~/assets/images/visit3.jpg`));
//   imageUrls.value.push(require(`~/assets/images/visit4.jpg`));
//   imageUrls.value.push(require(`~/assets/images/visit5.jpg`));
  
imageUrls.value.push('@/assets/images/visit3.jpg');
imageUrls.value.push('@/assets/images/visit4.jpg');
imageUrls.value.push('@/assets/images/visit5.jpg');


  autoplayInterval.value = setInterval(changeSlide, 2000);
});

onUnmounted(() => {
  clearInterval(autoplayInterval.value);
});

const stopAutoplay = () => {
  clearInterval(autoplayInterval.value);
};

const startAutoplay = () => {
  autoplayInterval.value = setInterval(changeSlide, 2000);
};
</script>
  
  <!-- Your existing styles go here -->
  <style scoped>
  html, body {
    margin: 0px;
    padding: 0px;
    background: url("http://digital.bnint.com/filelib/s9/photos/white_wood_4500x3000_lo_res.jpg");
}

.carousel {
    position: relative;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
    margin-top: 26px;
}

.carousel-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
}

.carousel-open:checked + .carousel-item {
    position: static;
    opacity: 100;
}

.carousel-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.carousel-item img {
    display: block;
    height: auto;
    max-width: 100%;
}

.carousel-control {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.carousel-control.prev {
    left: 2%;
}

.carousel-control.next {
    right: 2%;
}

.carousel-control:hover {
    background: rgba(0, 0, 0, 0.8);
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1,
#carousel-2:checked ~ .control-2,
#carousel-3:checked ~ .control-3 {
    display: block;
}

.carousel-indicators {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.carousel-indicators li {
    display: inline-block;
    margin: 0 5px;
}

.carousel-bullet {
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: 35px;
}

.carousel-bullet:hover {
    color: #aaaaaa;
}

#carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
    color: #428bca;
}

#title {
    width: 100%;
    position: absolute;
    padding: 0px;
    margin: 0px auto;
    text-align: center;
    font-size: 27px;
    color: rgba(255, 255, 255, 1);
    font-family: 'Open Sans', sans-serif;
    z-index: 9999;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.33), -1px 0px 2px rgba(255, 255, 255, 0);
}
  </style>
  