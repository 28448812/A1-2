<!-- CSS is included in the code: Use TailwindCSS. Install TailwindCSS to see the layout style effect. -->
<template>
    <div class="min-h-[1024px] bg-gray-50">
       <!-- Navigation bar - add scroll effects and shadow transitions -->
        <nav class="h-16 border-b bg-white/95 backdrop-blur-sm fixed w-full z-50 transition-all duration-300" :class="{ 'shadow-md': isScrolled }">
            <div class="max-w-[1400px] mx-auto flex items-center px-4 md:px-8 justify-between h-full">
                <div class="flex items-center gap-4 md:gap-12">
                    <h1 class="text-xl font-bold flex items-center gap-2">
                        <span>{{  homeInfo.nav?.logoTitle }}</span>
                    </h1>
                    <div class="hidden md:flex gap-6">
                      <button v-for="item in homeInfo.nav?.navList" class="text-gray-600 hover:text-green-600 transition-colors py-2 border-b-2 border-transparent hover:border-green-500">
                        {{ item }}
                      </button>
                    </div>
                    <!-- Mobile menu button -->
                    <button class="md:hidden text-gray-600" @click="toggleMobileMenu">
                        <i class="fas fa-bars text-xl"></i>
                    </button>
                </div>
                <div class="flex items-center gap-4">
                    <!-- <div class="relative">
                        <button class="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors" @click="toggleLanguage">
                            <span>{{ currentLanguage }}</span>
                            <i class="fas fa-chevron-down text-xs transition-transform duration-300" :class="{ 'rotate-180': showLanguage }"></i>
                        </button>
                        <div
                            v-if="showLanguage"
                            class="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-40 transform transition-all duration-300 origin-top-right scale-95 opacity-0"
                            :class="{ 'scale-100 opacity-100': showLanguage }"
                        >
                            <button v-for="lang in languages" :key="lang" @click="selectLanguage(lang)" class="w-full text-left px-4 py-2 hover:bg-green-50 transition-colors text-gray-700 hover:text-green-700">
                                {{ lang }}
                            </button>
                        </div>
                    </div> -->
                   

                    <Button v-if="!isLogin" :as="RouterLink" to="/auth/login" label="Login"></Button>
                     <SplitButton v-else icon="pi pi-user" :label="userName" :model="items" />
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="mobileMenuOpen" class="md:hidden bg-white border-t animate-fadeIn">
                <div class="flex flex-col gap-2 p-4">
                   <button v-for="item in homeInfo.nav?.navList" class="text-left py-3 px-4 hover:bg-green-50 rounded-lg transition-colors text-gray-700">
                     {{ item }}
                    </button>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="relative h-[600px] overflow-hidden pt-16">
            <div class="absolute inset-0 bg-cover bg-center" :style="{  transform: `translateY(${scrollY * 0.3}px)` }"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-green-800/50 to-transparent"></div>
            <div class="absolute inset-0 flex items-center">
                <div class="max-w-[600px] px-6 md:px-16 animate-slideInLeft">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{{ homeInfo.banner?.bannerTitle }}</h1>
                    <p class="text-lg md:text-xl text-gray-100 mb-8">{{ homeInfo.banner?.bannerDes }}</p>
                    <button class="bg-white text-green-700 px-8 py-3 rounded-lg font-medium hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">{{  homeInfo.banner?.bannerBtnName }}</button>
                </div>
            </div>
        </div>

        <!-- Educational Resources Section -->
        <div class="max-w-[1400px] mx-auto px-4 py-16">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{{  homeInfo.EducationalResources?.title }}</h2>
                <p class="text-gray-600 max-w-2xl mx-auto">{{  homeInfo.EducationalResources?.des  }}</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                <div v-for="(category, index) in homeInfo.EducationalResources?.categories" :key="index" class="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group">
                    <div class="h-48 overflow-hidden">
                        <img :src="category.image" :alt="category.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">{{ category.title }}</h3>
                        <p class="text-sm text-gray-600 mb-4">{{ category.description }}</p>
                        <button class="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors">Learn more <i class="fas fa-arrow-right ml-2 transform transition-transform group-hover:translate-x-1"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Trusted By Section -->
        <div class="bg-gray-100 py-12">
            <div class="max-w-[1400px] mx-auto px-4">
                <p class="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">Trusted By</p>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                    <div class="text-gray-400 text-2xl font-bold">HealthOrg</div>
                    <div class="text-gray-400 text-2xl font-bold">NutriLife</div>
                    <div class="text-gray-400 text-2xl font-bold">WellnessPlus</div>
                    <div class="text-gray-400 text-2xl font-bold">HealthyLiving</div>
                    <div class="text-gray-400 text-2xl font-bold">EduHealth</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import axios from "axios";
const router = useRouter();

import { ref, onMounted, onUnmounted, computed } from 'vue';
import { RouterLink } from 'vue-router';


const isLogin = computed(() => {
     const userInfo = JSON.parse(localStorage.getItem('user'));
     console.log(userInfo);
    return userInfo?.GivenName.length > 0;
});

const userName = computed(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    console.log(userInfo);
    return userInfo?.GivenName;
});
const homeInfo = ref({})

const items = [
    {
        label: 'Logout',
        command: () => {
            // router.push('/auth/login');
            localStorage.removeItem('user');
        }
    }
];

// Language selection related 
const currentLanguage = ref('English');
const showLanguage = ref(false);
const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

// Mobile menu
const mobileMenuOpen = ref(false);

// Scroll effects 
const isScrolled = ref(false);
const scrollY = ref(0);

// Language switching method
const toggleLanguage = () => {
    showLanguage.value = !showLanguage.value;
};

const selectLanguage = (lang: string) => {
    currentLanguage.value = lang;
    showLanguage.value = false;
};

// Mobile menu switch
const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

// Scroll event listener
const handleScroll = () => {
    scrollY.value = window.scrollY;
    isScrolled.value = window.scrollY > 10;
};

onMounted(async ()=>{
  const {data} = await axios.get('/json/home.json');
  homeInfo.value =data;
})

// Listen for scroll events
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});


</script>

<style scoped>

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.animate-slideInLeft {
    animation: slideInLeft 0.8s ease-out forwards;
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
}
</style>
