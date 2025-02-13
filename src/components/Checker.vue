<template>
    <div class="min-h-screen bg-gray-100" id="main">
        <Nav></Nav>
      <!-- Form Section -->
      <section class="bg-white py-16">
        <div class="container mx-auto">
          <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">LP Checker Form</h3>
          <form class="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"/>
            </div>
            <div class="mb-4">
              <label for="lpCondition" class="block text-gray-700 font-semibold">LP Condition</label>
              <select id="lpCondition" name="lpCondition" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="comments" class="block text-gray-700 font-semibold">Comments</label>
              <textarea id="comments" name="comments" rows="4" placeholder="Share any additional comments" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="px-6 py-3 text-white rounded-lg bg-pink-500 hover:bg-pink-600">Submit</button>
            </div>
          </form>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white text-center py-6 mt-16">
        <p>&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import Nav from "../components/Nav.vue";
  </script>
  