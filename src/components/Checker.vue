<template>
  <div class="min-h-screen bg-gray-100" id="main">
      <Nav></Nav>
    <!-- Form Section -->
    <section class="bg-white py-16">
      <div class="container mx-auto">
        <h3 class="text-3xl font-bold text-gray-800 text-center mb-8">LP Checker Form</h3>
        <h2 class="text-3xl font-bold text-gray-800 text-center mb-8" style="font-size: 20px;">Fill in this form for a price range!</h2>
        <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto bg-gray-50 p-6 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-semibold">Name</label>
            <input type="text" id="name" name="name" v-model="form.name" placeholder="Enter your name" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>
          <div class="mb-4">
            <label for="year" class="block text-gray-700 font-semibold">Year</label>
            <input type="number" id="year" name="year" v-model="form.year" placeholder="Enter the year" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"/>
          </div>
          <div class="mb-4">
            <label for="limitedEdition" class="block text-gray-700 font-semibold">Limited Edition</label>
            <input type="checkbox" id="limitedEdition" name="limitedEdition" v-model="form.limitedEdition" class="mt-2"/>
          </div>
          <div class="mb-4">
            <label for="lpCondition" class="block text-gray-700 font-semibold">LP Condition</label>
            <select id="lpCondition" name="lpCondition" v-model="form.lpCondition" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>  
          <div class="mb-4">
            <label for="coverCondition" class="block text-gray-700 font-semibold">Album Cover Condition</label>
            <select id="coverCondition" name="coverCondition" v-model="form.coverCondition" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
              <option value="bad">Bad</option>
              <option value="used">Used</option>
              <option value="asGoodAsNew">As Good As New</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="comments" class="block text-gray-700 font-semibold">Describe your LP</label>
            <textarea id="comments" name="comments" v-model="form.comments" rows="4" placeholder="Describe your LP in detail" class="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="px-6 py-3 text-white rounded-lg bg-pink-500 hover:bg-pink-600">Submit</button>
          </div>
        </form>
        <!-- Als form is submitted word het resultaat displayed -->
        <div v-if="submitted" class="mt-8 text-center">
          <h3 class="text-2xl font-bold text-gray-800">Checker Submitted:</h3>
          <p>Name: {{ form.name }}</p>
          <p>Year: {{ form.year }}</p>
          <p>Limited Edition: {{ form.limitedEdition ? 'Yes' : 'No' }}</p>
          <p>LP Condition: {{ form.lpCondition }}</p>
          <p>Cover Condition: {{ form.coverCondition }}</p>
          <p>Comments: {{ form.comments }}</p>
        </div>
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
import { ref } from 'vue';

// vars voor de data
const form = ref({
  name: '',
  year: '',
  limitedEdition: false,
  lpCondition: 'good',
  coverCondition: 'bad',
  comments: ''
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}

</script>