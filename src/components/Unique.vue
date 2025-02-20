<template>
  <div class="min-h-screen flex flex-col bg-gray-100" id="unique-page">
    <Nav></Nav>
    <!-- Unique LP Section -->
    <section class="bg-white py-16 flex-grow" style="padding-left: 20px; padding-right: 20px;">
      <div class="container mx-auto text-center">
        <h3 class="text-3xl font-bold" style="color: black;">Unique LP's</h3>
        <p class="text-white-600 mt-2" style="color: black;">Hover for Descriptions</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <!-- LPs -->
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: orange;">
            <img id="lpImg1" src="../assets/media/lpPlate.png" alt="LP 1" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">Pink Horizon "Echoes of the Past"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">A dreamy mix of psychedelic rock and vintage vibes, packed with haunting vocals and soaring guitar solos.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: Pink Horizon</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 1975</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: Good</p>
          </div>
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: #F64E8B;">
            <img id="lpImg2" src="../assets/media/lpPlate2.png" alt="LP 2" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">Midnight Waves "Neon Reverie"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">A synthwave journey through neon-lit nights, blending retro beats with cinematic soundscapes.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: Midnight Waves</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 1983</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: Excellent</p>
          </div>
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: #4A5568;">
            <img id="lpImg3" src="../assets/media/lpPlate5.png" alt="LP 3" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">The Rustwood Trio "Dust & Whiskey"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">A raw folk-country album filled with heartfelt storytelling, twangy guitars, and soulful harmonies.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: The Rustwood Trio</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 1990</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: Used</p>
          </div>
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: orange;">
            <img id="lpImg4" src="../assets/media/lpPlate4.png" alt="LP 4" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">Aurora Bloom "Celestial Tides"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Ethereal vocals and orchestral melodies create a cosmic, emotional listening experience.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: Aurora Bloom</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 2005</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: As Good As New</p>
          </div>
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: #F64E8B;">
            <img id="lpImg5" src="../assets/media/lpPlate6.png" alt="LP 5" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">Voltage Riot "Static Revolution"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">A high-energy punk rock explosion with rebellious lyrics and aggressive riffs.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: Voltage Riot</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 2010</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: Good</p>
          </div>
          <div id="LPs" class="p-6 rounded-lg shadow" style="background-color: #4A5568;">
            <img id="lpImg6" src="../assets/media/lpPlate7.png" alt="LP 6" class="w-1/2 h-auto mb-4 mx-auto rounded-lg">
            <h4 class="text-xl font-bold text-black-600">Deep Groove Collective "Funkadelic Vibes"</h4>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Funky basslines and groovy beats that bring the perfect mix of rhythm and soul.</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Artist: Deep Groove Collective</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Year: 2015</p>
            <p id="desc" class="text-white-600 mt-2" style="color: white;">Condition: Excellent</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white text-center py-6 mt-16">
      <p id="footer">&copy; 2025 . Vinyl Addicts All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Nav from "./Nav.vue";

</script>

