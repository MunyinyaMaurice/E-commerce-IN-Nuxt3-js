<template>
    <div class="carousel relative mt-2 mb-5 shadow-lg bg-white rounded-lg overflow-hidden">
    <div class="carousel-inner relative w-full h-[70vh]">
      <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked>
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100 relative">
            <div class="w-[100%] h-auto flex items-center justify-center">
            <img src="~/assets/images/landing1.png" class="w-full h-auto object-contain">
          </div>
          <div class="text-overlay absolute bottom-20 left-20 first-letter:me-3">
            <p class="text-white text-5xl font-bold-lg dark:text-white"> Discover <br>
            your <span class="text-orange-500">Passion</span> <br>
            with us 
            </p>
          </div>
        </div>
      </div>
      <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true">
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100 relative">
          <div class="w-[100%] h-auto flex items-center justify-center">
            <img src="~/assets/images/volunteer7.jpg" class="w-full h-auto object-contain">
          </div>
          <div class="text-overlay absolute bottom-20 left-20 ">
            <p class="text-white text-5xl font-bold-lg dark:text-white"> Discover <br>
            your <span class="text-orange-500">Passion</span> <br>
            with us
            </p>
          </div>
        </div>
      </div>
      <input class="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true">
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100 relative">
          <div class="w-[100%] h-auto flex items-center justify-center">
            <img src="~/assets/images/volunteer6.jpg" class="w-full h-auto object-contain">
          </div>
          <div class="text-overlay absolute bottom-20 left-20 ">
            <p class="text-white text-5xl font-bold-lg dark:text-white"> Discover <br>
            your <span class="text-orange-500">Passion</span> <br>
            with us
            </p>
          </div>
          
        </div>
      </div>

      <ol class="carousel-indicators flex justify-center space-x-4 absolute bottom-4 left-0 right-0 z-10">
        <li>
          <label for="carousel-1" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
        <li>
          <label for="carousel-2" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
        <li>
          <label for="carousel-3" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const totalSlides = 3; // Total number of slides
let currentSlide = 1;
let interval;

const changeSlide = () => {
  currentSlide = (currentSlide % totalSlides) + 1; // Increment slide number and loop back to 1 if at the end
  document.getElementById(`carousel-${currentSlide}`).checked = true;
};

onMounted(() => {
  interval = setInterval(changeSlide, 4000); // Change slide every 4 seconds
});

onBeforeUnmount(() => {
  clearInterval(interval); // Clear interval when component is unmounted
});
</script>

<style lang="scss" scoped>
html, body {
  @apply m-0 p-0;
  background: url("http://digital.bnint.com/filelib/s9/photos/white_wood_4500x3000_lo_res.jpg");
}

.carousel-open:checked + .carousel-item {
  @apply static opacity-100;
}

.carousel-item {
  @apply absolute opacity-0 transition-opacity duration-100 ease-out;
}

.carousel-bullet:hover {
  @apply text-gray-400;
}

#carousel-1:checked ~ .carousel-inner .carousel-item:nth-child(1),
#carousel-2:checked ~ .carousel-inner .carousel-item:nth-child(2),
#carousel-3:checked ~ .carousel-inner .carousel-item:nth-child(3) {
  @apply opacity-100;
}

#carousel-1:checked ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  @apply text-blue-600;
}

/* Hide navigation controls */
.carousel-control {
  display: none;
}

.text-overlay {
  @apply text-xl text-white;
}
</style>




<!-- <template>
  <div class="carousel relative mt-6 shadow-lg rounded-lg overflow-hidden">
    <div class="carousel-inner relative w-full h-[70vh]">
      <input class="carousel-open hidden" type="radio" id="carousel-1" name="carousel" aria-hidden="true" checked>
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100">
          <div class="w-[90%] h-auto flex items-center justify-center">
            <img src="~/assets/images/landing1.png" class="w-full h-auto object-contain">
          </div>
        </div>
      </div>
      <input class="carousel-open hidden" type="radio" id="carousel-2" name="carousel" aria-hidden="true">
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100">
          <div class="w-[90%] h-auto flex items-center justify-center">
            <img src="~/assets/images/volunteer7.jpg" class="w-full h-auto object-contain">
          </div>
        </div>
      </div>
      <input class="carousel-open hidden" type="radio" id="carousel-3" name="carousel" aria-hidden="true">
      <div class="carousel-item absolute opacity-0 transition-opacity duration-100 ease-out h-full w-full">
        <div class="h-full w-full flex items-center justify-center bg-gray-100">
          <div class="w-[90%] h-auto flex items-center justify-center">
            <img src="~/assets/images/volunteer6.jpg" class="w-full h-auto object-contain">
          </div>
        </div>
      </div>
      <label for="carousel-3" class="carousel-control prev absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center left-4 top-1/2 transform -translate-y-1/2">‹</label>
      <label for="carousel-2" class="carousel-control next absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center right-4 top-1/2 transform -translate-y-1/2">›</label>
      <label for="carousel-1" class="carousel-control prev absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center left-4 top-1/2 transform -translate-y-1/2">‹</label>
      <label for="carousel-3" class="carousel-control next absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center right-4 top-1/2 transform -translate-y-1/2">›</label>
      <label for="carousel-2" class="carousel-control prev absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center left-4 top-1/2 transform -translate-y-1/2">‹</label>
      <label for="carousel-1" class="carousel-control next absolute text-white cursor-pointer bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center right-4 top-1/2 transform -translate-y-1/2">›</label>

      <ol class="carousel-indicators flex justify-center space-x-4 absolute bottom-4 left-0 right-0 z-10">
        <li>
          <label for="carousel-1" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
        <li>
          <label for="carousel-2" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
        <li>
          <label for="carousel-3" class="carousel-bullet text-4xl text-white cursor-pointer">•</label>
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup>
// Add any required JavaScript here
</script>

<style lang="scss" scoped>
html, body {
  @apply m-0 p-0;
  background: url("http://digital.bnint.com/filelib/s9/photos/white_wood_4500x3000_lo_res.jpg");
}

.carousel-open:checked + .carousel-item {
  @apply static opacity-100;
}

.carousel-item {
  @apply absolute opacity-0 transition-opacity duration-100 ease-out;
}

.carousel-bullet:hover {
  @apply text-gray-400;
}

#carousel-1:checked ~ .carousel-inner .carousel-item:nth-child(1),
#carousel-2:checked ~ .carousel-inner .carousel-item:nth-child(2),
#carousel-3:checked ~ .carousel-inner .carousel-item:nth-child(3) {
  @apply opacity-100;
}

#carousel-1:checked ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
#carousel-2:checked ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
#carousel-3:checked ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
  @apply text-blue-600;
}
</style>

 -->
