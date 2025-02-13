import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'  // Adjust path to your Home component
import Checker from '../components/Checker.vue'  // Adjust path to your Checker component

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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
