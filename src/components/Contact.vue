<template>
  <div class="min-h-screen bg-gray-100 flex flex-col" id="main">
    <Nav></Nav>

    <!-- Contact Form Section -->
    <section class="flex-1 bg-white py-16 px-4 md:px-0" id="contact"> 
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">Contact Us Here</h3>
        <!-- Form verzenden -->
        <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold">Name</label>
            <!-- V-model om een form gemakkelijk werkend te maken -->
            <input type="text" id="name" name="name" v-model="form.name" placeholder="Enter your name" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-semibold">Email</label>
            <input type="email" id="email" name="email" v-model="form.email" placeholder="Enter your email" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 font-semibold">Phone Number</label>
            <input type="tel" id="phone" name="phone" v-model="form.phone" placeholder="Enter your phone number" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-semibold">Question/Comment</label>
            <textarea id="message" name="message" v-model="form.message" rows="4" placeholder="Write your question or comment here" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
          </div>
          <div class="mb-4">
            <label for="newsletter" class="block text-gray-700 font-semibold">Subscribe to Newsletter</label>
            <input type="checkbox" id="newsletter" name="newsletter" v-model="form.newsletter" class="mt-2"/>
          </div>
          <div class="text-center">
            <button @click="showSuccess" type="submit" class="px-6 py-3 text-white rounded-lg bg-pink-500 hover:bg-pink-600" id="button">Send Message</button>
          </div>
        </form>
        <h3 class="text-3xl font-bold text-gray-800 text-center mb-8" style="margin-top: 50px;">Find Us Here</h3>
        <p class="text-white text-sm" style="text-align: center;"> Adres: <br>Old Spitalfields Market, Brushfield St, London E1 6AA, Verenigd Koninkrijk</p>
        <div class="mt-8 flex justify-center">
          <iframe ref="ContactIframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6437943525243!2d-0.0779757238716918!3d51.51975070980172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d4a5813272b%3A0x5cece164622283ec!2sVinyl%20Addicts!5e0!3m2!1snl!2snl!4v1739799896193!5m2!1snl!2snl" width="600" height="450" style="border: 5px solid orange; border-radius: 15px; width: 100%; max-width: 600px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <!-- Als de form -->
        <div v-if="submitted" class="mt-8 text-center">
          <h3 class="text-2xl font-bold text-gray-800">Hi! {{ form.name }} you will hear from us soon!</h3>
          <p>Name: {{ form.name }}</p>
          <p>Email: {{ form.email }}</p>
          <p>Phone: {{ form.phone }}</p>
          <p>Message: {{ form.message }}</p>
          <p>Subscribe to Newsletter: {{ form.newsletter ? 'Yes' : 'No' }}</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6">
      <p id="footer">&copy; 2025 Vinyl Addicts. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Nav from "./Nav.vue";
import { ref } from 'vue';
import { useIntersectionObserver } from "@vueuse/core";
import { animate } from "motion";
import { useToast } from "vue-toastification";

// toast succes melding 
const toast = useToast();

const showSuccess = () => {
  toast.success("Contact form submitted! You will hear from us soon! 🔜");
};

const showError = () => {
  toast.error("Something went wrong! ❌");
};


const ContactIframe = ref(null);

useIntersectionObserver(ContactIframe, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animate(ContactIframe.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1.5, easing: "ease-out" });
    }
  });

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
  newsletter: false
});

const submitted = ref(false);
function handleSubmit() {
  submitted.value = true;
}
</script>
