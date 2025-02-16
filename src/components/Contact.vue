<template>
    <div class="min-h-screen bg-gray-100 flex flex-col" id="main">
      <Nav></Nav>
  
      <!-- Contact Form Section -->
      <section class="flex-1 bg-white py-16 px-4 md:px-0" id="contact"> 
        <div class="container mx-auto">
          <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us</h3>
          <form class="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-semibold">Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-gray-700 font-semibold">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-gray-700 font-semibold">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Write your message here" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="px-6 py-3 text-white rounded-lg bg-pink-500 hover:bg-pink-600" id="button">Send Message</button>
            </div>
          </form>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Vinyl Addicts. All Rights Reserved.</p>
      </footer>
    </div>
  </template>
  
  <script setup>
  import Nav from "./Nav.vue";
  </script>
  