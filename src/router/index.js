import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue' 
import Checker from '../components/Checker.vue'  
import Unique from '../components/Unique.vue'  
import Contact from '../components/Contact.vue'

const routes = [
  {
    path: '/home',
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
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
