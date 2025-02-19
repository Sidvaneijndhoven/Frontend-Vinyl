import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import Checker from '../components/Checker.vue';
import Unique from '../components/Unique.vue';
import Contact from '../components/Contact.vue';
import News from '../components/News.vue';

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
