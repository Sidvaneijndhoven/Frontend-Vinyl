<template>
  <div class="min-h-screen bg-gray-100" id="main">
    <router-view v-if="$route.path === '/checker' || $route.path === '/Unique'"></router-view>
    <div class="render" v-else>
    <!-- Navbar -->
      <Nav></Nav>
    <!-- Hero Section -->
    <header class="flex flex-col md:flex-row items-center justify-between px-8 py-20 container mx-auto" style="background-color: orange;">
      <div class="max-w-lg text-center md:text-left">
        <h2 class="text-4xl font-bold text-gray-800">Welcome to Vinyal Addicts</h2>
        <router-link to="/checker">
          <button class="mt-6 px-6 py-3 text-white rounded-lg hover:bg-pink-500" style="background-color: #3A4750; cursor: pointer;" id="hero-button">Check you're first LP</button>
        </router-link>
      </div>
    </header>

    <!-- Features Section -->
    <section class="bg-white py-16" style="background-color: #3A4750; padding-left: 20px; padding-right: 20px;">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold " style="color: white;">What we offer:</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div class="p-6 rounded-lg shadow" style="background-color: orange;" id="section">
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
      <p>&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
    </footer>
    </div>
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
</script>




