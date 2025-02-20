<template>
    <div class="min-h-screen bg-gray-100 flex flex-col" id="main">
      <Nav></Nav>
      <section class="bg-white py-16" style="background-color: #3A4750; padding-left: 20px; padding-right: 20px;">
        <div class="container mx-auto text-center">
          <h2 class="text-3xl font-bold mb-8" style="color: white;">About Us</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-pink-500 p-6 rounded-lg shadow-md" id="about-us">
              <h3 class="text-xl font-semibold mb-4">Our Mission</h3>
              <p class="text-gray-700">At Vinyl Addicts, our mission is to provide the best quality vinyl records and accessories to our customers. We are passionate about music and strive to offer a wide selection of vinyl records from various genres and eras.</p>
            </div>
            <div class="bg-orange-500 p-6 rounded-lg shadow-md" id="about-us1">
              <h3 class="text-xl font-semibold mb-4">Our Story</h3>
              <p class="text-gray-700">Vinyl Addicts was founded in 2020 by a group of music enthusiasts who wanted to share their love for vinyl records with the world. Since then, we have grown into a thriving community of vinyl collectors and music lovers.</p>
            </div>
            <div class="bg-orange-500 p-6 rounded-lg shadow-md" id="about-us2">
              <h3 class="text-xl font-semibold mb-4">Our Team</h3>
              <p class="text-gray-700">Our team is made up of dedicated individuals who are passionate about music and vinyl records. We are committed to providing excellent customer service and helping our customers find the perfect vinyl records for their collection.</p>
            </div>
            <div class="bg-pink-500 p-6 rounded-lg shadow-md" id="about-us3">
              <h3 class="text-xl font-semibold mb-4">Contact Us</h3>
              <p class="text-gray-700">If you have any questions or need assistance, please feel free to contact us. We are here to help and would love to hear from you!</p>
            </div>
          </div>
  
          <!-- Afbeelding met fade-in effect -->
          <div class="responsive-img-container mt-4">
            <img ref="aboutImg" src="../assets/media/maxresdefault.jpg" class="w-1/2 h-auto mx-auto rounded-lg shadow-md opacity-0" style="width: 800px;" id="aboutImg">
          </div>
          <a href="https://www.youtube.com/@vinyladdict1980" target="_blank" class="inline-block mt-4 px-6 py-3 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition duration-300" id="aboutButton">Visit our YouTube Channel</a>
        </div>
      </section>
  
      <footer class="bg-gray-800 text-white text-center py-6 mt-16">
        <p id="footer">&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import Nav from './Nav.vue';
  import { ref, onMounted } from "vue";
  import { animate } from "motion";
  import { useIntersectionObserver } from "@vueuse/core";
  
  const aboutImg = ref(null);
  
  // Intersection Observer voor de afbeelding
  useIntersectionObserver(aboutImg, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animate(aboutImg.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1.5, easing: "ease-out" });
    }
  });
  
  onMounted(() => {
    setTimeout(() => {
      animate("#about-us", { y: [-300, 0], duration: 2, easing: "ease-in-out" });
    }, 1500);  
  
    setTimeout(() => {
      animate("#about-us1", { x: [600, 0], duration: 2, easing: "ease-in-out" });
    }, 2500);  
  
    setTimeout(() => {
      animate("#about-us2", { y: [-300, 0], duration: 2, easing: "ease-in-out" });
    }, 4500);  
  
    setTimeout(() => {
      animate("#about-us3", { x: [-600, 0], duration: 2, easing: "ease-in-out" });
    }, 3500);  
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  
  </style>
  