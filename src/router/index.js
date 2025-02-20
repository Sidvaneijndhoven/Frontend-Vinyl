// Import de paginas
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import Checker from '../components/Checker.vue';
import Unique from '../components/Unique.vue';
import Contact from '../components/Contact.vue';
import News from '../components/News.vue';
import About from '../components/About.vue';

// routes voor de navigatie
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/checker',
    name: 'Checker',
    component: Checker
  },
  {
    path: '/unique',
    name: 'Unique',
    component: Unique
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
