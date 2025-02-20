<template>
  <div class="min-h-screen bg-gray-100 flex flex-col" id="main" style="background-color: #FFA500;">
    <Nav></Nav>
    <!-- For loop voor de news items -->
    <h2 class="text-3xl font-bold text-center mb-8" style="margin-top: 50px;">Latest News</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style="margin: 0px 15px 0px 15px ">
      <div v-for="(news, index) in newsItems" :key="index" class="bg-white p-4 rounded-lg shadow-md" id="news-items">
        <img @click="showError()" :src="news.image" alt="News Image" class="w-full h-32 object-cover rounded-lg mb-2">
        <h3 class="text-lg font-semibold mb-1">{{ news.title }}</h3>
        <p class="text-gray-700 text-sm">{{ news.description }}</p>
        <p class="text-gray-700 text-sm">{{ news.date }}</p>
      </div>
    </div>
    <footer class="bg-gray-800 text-white text-center py-6 mt-8">
        <p id="footer">&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Nav from '../components/Nav.vue';
import { ref } from 'vue';
import { onMounted } from "vue";
import { animate } from "motion";
import { useToast } from "vue-toastification";

const toast = useToast();

const showError = () => {
  toast.error("👷‍♂️Were sorry but this is still under construction🚧");
};

// Import images
import news1 from '../assets/media/lpPlate.png';
import news2 from '../assets/media/news.jpg';
import news3 from '../assets/media/news2.jpg';
import news4 from '../assets/media/company-rating.png';
import news5 from '../assets/media/lpPlate2.png';
import news6 from '../assets/media/lpPlate4.png';

// Data voor de news items
const newsItems = ref([
  {
    image: news1,
    title: 'Listen the newest tracks!',
    description: 'Echoes of Tomorrow, Neon Reverie, Fragments & Frequencies',
    date: '19-2-2025'
  },
  {
    image: news2,
    title: 'Relax with the newest LPs!',
    description: 'Serene Waves, Tranquil Echoes, Golden Horizon',
    date: '12-2-2025'
  },
  {
    image: news3,
    title: 'Opening Soon!',
    description: 'We are opening a new store in the city center!',
    date: '5-2-2025'
  },
  {
    image: news4,
    title: 'Best Company of the Year!',
    description: 'We are proud to announce that we have been awarded Best Company of the Year!',
    date: '29-1-2025'
  },
  {
    image: news5,
    title: 'New lps now available!',
    description: 'New LPs have been added to our collection. Check them out now!',
    date: '22-1-2025'
  },
  {
    image: news6,
    title: 'Luna Solace 🌙✨',
    description: 'Luna Solace will be dropping new lps soon. Stay tuned!',
    date: '15-1-2025'
  }
]);

// Animatie voor de news items
onMounted(() => {
  setTimeout(() => {
    animate("#news-items", { x: [-600, 0], duration: 2, ease: "ease-in-out" });
  }, 1500);  

  setTimeout(() => {
    animate("#news-items > :nth-child(1)", { y: [300, 0], duration: 2, ease: "ease-in-out" });
  }, 2000);  

});
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.news-page {
  background-color: white;
}
</style>

