<template>
<!-- Navbar -->
    <nav class="bg-pink-500 shadow-md">
        <div class="container mx-auto flex justify-between items-center p-4">
            <div class="flex items-center">
                <router-link to="/home">
                    <img src="../assets/media/vinyl_logo.png" alt="Hero Image" class="w-full md:w-1/2 mt-6 md:mt-0" id="logo" style="width: 100px; height: auto; margin-right: 10px; border-radius: 15px; border: 4px solid grey;">
                </router-link>
                <h1 class="text-2xl font-bold text-black-600">Vinyal Addicts</h1>
            </div>
            <ul :class="{'hidden': !isMenuOpen, 'block': isMenuOpen, 'md:flex': true}" class="text-gray-900 text-lg md:space-x-6">
                <router-link to="/home">
                <li><a class="hover:text-yellow-500 text-xl">Home</a></li>
                </router-link>
                <router-link to="/about">
                    <li><a class="hover:text-yellow-500 text-xl">About Us</a></li>
                </router-link>
                <router-link to="/unique">
                    <li><a class="hover:text-yellow-500 text-xl">Unique LP's</a></li>
                </router-link>
                <router-link to="/news">
                    <li><a class="hover:text-yellow-500 text-xl">News</a></li>
                </router-link>
                <router-link to="/checker">
                    <li><a class="hover:text-yellow-500 text-xl">Unique LP Checker</a></li>
                </router-link>
                <router-link to="/contact">
                    <li><a class="hover:text-yellow-500 text-xl">Contact</a></li>
                </router-link> 
            </ul>
            <button @click="toggleMenu" class="md:hidden text-gray-700">☰</button>
        </div>
    </nav>

</template>
<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>