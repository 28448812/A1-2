
<template>
  <div class="min-h-[1024px] bg-white">
    <nav class="h-16 border-b flex items-center px-8 justify-between">
      <div class="flex items-center gap-12">
        <h1 class="text-xl font-semibold text-gray-800">Nutrition Education Hub</h1>
        <div class="flex gap-8">
          <button class="!rounded-button text-gray-600 hover:text-blue-600">Nutrition Education</button>
          <button class="!rounded-button text-gray-600 hover:text-blue-600">Recipes</button>
          <button class="!rounded-button text-gray-600 hover:text-blue-600">Events</button>
          <button class="!rounded-button text-gray-600 hover:text-blue-600">About US</button>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative">
          <button class="!rounded-button flex items-center gap-2 text-gray-600" @click="toggleLanguage">
            <span>{{ currentLanguage }}</span>
            <i class="fas fa-chevron-down text-xs"></i>
          </button>
          <div v-if="showLanguage" class="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40">
            <button v-for="lang in languages" :key="lang" 
              @click="selectLanguage(lang)"
              class="!rounded-button w-full text-left px-4 py-2 hover:bg-gray-50">
              {{ lang }}
            </button>
          </div>
        </div>
        <button class="!rounded-button w-10 h-10 flex items-center justify-center">
          <i class="fas fa-user text-gray-600"></i>
        </button>
      </div>
    </nav>

    <div class="relative h-[500px] overflow-hidden">
      <img :src="heroImage" alt="Nutrition Education" class="w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent">
        <div class="max-w-[600px] p-16 pt-24">
          <h1 class="text-5xl font-bold text-gray-800 mb-6">Empowering Health Through Nutrition Education</h1>
          <p class="text-lg text-gray-600 mb-8">Discover comprehensive resources and expert guidance to promote better health outcomes through informed nutritional choices.</p>
          <button class="!rounded-button bg-blue-600 text-white px-8 py-3 hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </div>
    </div>

    <div class="max-w-[1200px] mx-auto px-8 py-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-12">Educational Resources</h2>
      <div class="grid grid-cols-5 gap-6">
        <div v-for="(category, index) in categories" :key="index" 
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
          <div class="h-48 overflow-hidden">
            <img :src="category.image" :alt="category.title" class="w-full h-full object-cover"/>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">{{ category.title }}</h3>
            <p class="text-sm text-gray-600 mb-4">{{ category.description }}</p>
            <button class="!rounded-button text-blue-600 hover:text-blue-700">
              Learn more <i class="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const heroImage = '1.jpg';

const currentLanguage = ref('English');
const showLanguage = ref(false);
const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

const toggleLanguage = () => {
  showLanguage.value = !showLanguage.value;
};

const selectLanguage = (lang: string) => {
  currentLanguage.value = lang;
  showLanguage.value = false;
};

const categories = [
  {
    title: 'Healthy Eating Basics',
    description: 'Learn fundamental principles of balanced nutrition and dietary guidelines.',
    image: '2.jpg'
  },
  {
    title: 'Nutrition & Mental Health',
    description: 'Explore the connection between diet and psychological well-being.',
    image: '3.jpg'
  },
  {
    title: 'Nutrition for Vulnerable Groups',
    description: 'Specialized dietary guidance for different population segments.',
    image: '4.jpg'
  },
  {
    title: 'Cultural and Community Nutrition',
    description: 'Understanding diverse dietary practices and community health.',
    image: '5.jpg'
  },
  {
    title: 'School Nutrition Programs',
    description: 'Resources for implementing healthy eating in educational settings.',
    image: '6.jpg'
  }
];
</script>

<style scoped>
.custom-gradient {
  background: linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0) 100%);
}
</style>

