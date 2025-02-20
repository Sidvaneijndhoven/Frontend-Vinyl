<template>
  <div class="min-h-screen bg-gray-100 font-retro main-page">
    <router-view v-if="['checker', 'unique', 'contact', 'news', 'about'].includes($route.path.replace('/', ''))"></router-view>
    <div class="render" v-else>
    <!-- Navbar -->
      <Nav></Nav>
    <!-- Hero Section -->
    <header class="w-full flex flex-col md:flex-row items-center justify-between px-8 py-20" style="background-color: orange;">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="max-w-lg text-center md:text-left">
          <h2 class="text-4xl font-bold text-gray-800">Welcome to Vinyal Addict</h2>
          <router-link to="/checker">
            <button class="mt-6 px-6 py-3 text-white rounded-lg hover:bg-pink-500" style="background-color: #3A4750; cursor: pointer;" id="hero-button">Check you're first LP💽</button>
          </router-link>
        </div>
        <img id="lp-front" src="./assets/media/lpPlate2.png" class="w-1/3 mt-6 md:mt-0 mx-auto md:mx-0 md:ml-8">
      </div>
    </header>

    <!-- News Slider Section -->
    <section class="bg-white py-16" style="background-color: #3A4750; padding-left: 20px; padding-right: 20px;">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold " style="color: white;">Latest News</h3>
        <div class="relative mt-8" ref="newsAni">
          <div class="overflow-hidden">
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div class="min-w-full">
                <img src="./assets/media/company-rating.png" class="w-1/2 h-auto mx-auto mb-4 rounded-lg" >
                <p class="text-white mt-2">&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
              </div>
              <div class="min-w-full">
                <img src="./assets/media/news.jpg" class="w-1/2 h-auto mx-auto mb-4 rounded-lg">
                <p class="text-white mt-2">New LPs Coming Soon!</p>
              </div>
              <div class="min-w-full">
                <img src="./assets/media/lpPlate2.png" class="w-1/4 h-auto mx-auto mb-4 rounded-lg">
                <p class="text-white mt-2">Buy this LP plate now for €20.000</p>
              </div>
            </div>
          </div>
          <div class="absolute inset-0 flex justify-between items-center">
            <button @click="prevSlide" class="text-white text-8xl">‹</button>
            <button @click="nextSlide" class="text-white text-8xl">›</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="bg-white py-16" style="background-color: #3A4750; padding-left: 20px; padding-right: 20px;" id="features-section">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold " style="color: white;">What we offer:</h3>
        <!-- Ref voor de inview animatie -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" ref="featureID">
          <div class="p-6 rounded-lg shadow section-item" style="background-color: orange;">
            <h4 class="text-xl font-bold text-black-600">Reliable</h4>
            <p class="text-white-600 mt-2" style="color: white;">Accurate Condition Assessment. Detect scratches, warping, and sound quality issues effortlessly.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #F64E8B;" id="section">
            <h4 class="text-xl font-bold text-black-600">Great prices</h4>
            <p class="text-white-600 mt-2" style="color: white;">Affordable & High-Quality. Professional-grade checking at a price that won't break the bank!</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #4A5568;" id="section">
            <h4 class="text-xl font-bold text-black-600"> 1 year Warranty</h4>
            <p class="text-white-600 mt-2" style="color: white;">You always have 1 year warrany with us!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6 mt-16">
      <p id="footer">&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
    </footer>
    </div>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import { onMounted, ref } from "vue";
import { animate } from "motion";
import { useIntersectionObserver } from "@vueuse/core";

// maakt een ref aan voor de animiatie 
const featureID = ref(null); 
const newsAni = ref(null);

// om de animatie te laten zien
useIntersectionObserver(featureID, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(featureID.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1.5, easing: "ease-out" });
  }
});

useIntersectionObserver(newsAni, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    animate(newsAni.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, easing: "ease-out" });
  }
});

// News slider
const currentSlide = ref(0);
const totalSlides = 3;

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}

onMounted(() => {
  setTimeout(() => {
    animate("#lp-front", { y: [-300, 0], duration: 2, easing: "ease-in-out" });
  }, 1500);

  setTimeout(() => {
    animate("#lp-front", { rotate: 360 }, { duration: 2, easing: "ease" });
  });

  // gaat om de 5 seconden naar de volgende slide
  setInterval(() => {
    nextSlide();
  }, 5000);
});
</script>





