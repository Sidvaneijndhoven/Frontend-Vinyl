<template>
  <div class="min-h-screen bg-gray-100" id="unique-page">
    <Nav></Nav>
    <!-- Unique LP Section -->
    <section class="bg-white py-16" style="padding-left: 20px; padding-right: 20px;">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold" style="color: white;">Unique LP's</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8 mt-8">
          <div class="p-6 rounded-lg shadow" style="background-color: orange;">
            <h4 class="text-xl font-bold text-black-600">LP 1</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 1.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #F64E8B;">
            <h4 class="text-xl font-bold text-black-600">LP 2</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 2.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #4A5568;">
            <h4 class="text-xl font-bold text-black-600">LP 3</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 3.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: orange;">
            <h4 class="text-xl font-bold text-black-600">LP 4</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 4.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #F64E8B;">
            <h4 class="text-xl font-bold text-black-600">LP 5</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 5.</p>
          </div>
          <div class="p-6 rounded-lg shadow" style="background-color: #4A5568;">
            <h4 class="text-xl font-bold text-black-600">LP 6</h4>
            <p class="text-white-600 mt-2" style="color: white;">Description of LP 6.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6 mt-16">
      <p>&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Nav from "./Nav.vue";
</script>

