<script setup>
import { ref } from 'vue'
import newYorkImage from '../assets/asset 25.png'
import londonImage from '../assets/asset 26.png'
import amsterdamImage from '../assets/asset 27.png'
import berlinImage from '../assets/asset 28.png'
import bucharestImage from '../assets/asset 29.png'

const activeSection = ref(null)

const toggleSection = (index) => {
  activeSection.value = activeSection.value === index ? null : index
}

const cities = [
  { 
    name: 'New York', 
    bgColor: '#FF003B',
    bgImage: newYorkImage,
    radius: '10-mile radius',
    location: 'Manhattan',
    codes: '10001, 10002, 10003, 10011, 10019, and nearby',
    type: 'Zip Codes Covered',
    pickup: 'Pickup is available at our Manhattan location. Place your order online or call ahead for fast pickup service.',
    deliveryFee: '$2.99',
    minOrder: '$15'
  },
  { 
    name: 'London', 
    bgColor: '#FFCC00',
    bgImage: londonImage,
    radius: '10 km radius',
    location: 'Soho',
    codes: 'W1, SW1, WC1, NW1, and nearby',
    type: 'Postcodes Covered',
    pickup: 'Swing by our Soho location for pickup. Order online in advance to skip the wait.',
    deliveryFee: '£3.50',
    minOrder: '£12'
  },
  { 
    name: 'Amsterdam', 
    bgColor: '#0A9900',
    bgImage: amsterdamImage,
    radius: '7 km radius',
    location: 'Amsterdam-Centrum',
    codes: '1011-1019, 1050, and nearby',
    type: 'Postcodes Covered',
    pickup: 'Convenient pickup at our Amsterdam-Centrum store. Pre-order online for quick collection.',
    deliveryFee: '€2.50',
    minOrder: '€15'
  },
  { 
    name: 'Berlin', 
    bgColor: '#333333',
    bgImage: berlinImage,
    radius: '10 km radius',
    location: 'Mitte',
    codes: '10115, 10435, 10997, and nearby',
    type: 'Postcodes Covered',
    pickup: 'Pickup is available at our Mitte location. Skip the queue by placing your order online for collection.',
    deliveryFee: '€2.99',
    minOrder: '€12'
  },
  { 
    name: 'Bucharest', 
    bgColor: '#FF9100',
    bgImage: bucharestImage,
    radius: '10 km radius',
    location: 'Piata Romana',
    codes: '010011-010999, 030011-030999, and nearby',
    type: 'Postcodes Covered',
    pickup: 'Pickup at our Piata Romana location. Place your order ahead for a seamless pickup experience.',
    deliveryFee: '12 RON',
    minOrder: '50 RON'
  },
];

const deliveryMethods = {
  methods: [
    {
      title: 'Online Ordering',
      description: 'Place your order directly on our website for quick and easy delivery.'
    },
    {
      title: 'Phone Orders',
      description: 'Call our store to place your delivery order.'
    },
    {
      title: 'Partner Apps',
      description: 'Available on Uber Eats, DoorDash (New York, London, Berlin), and Glovo (Bucharest, Amsterdam).'
    }
  ],
  estimate: 'We aim to deliver within 30-45 minutes in all cities. Times may vary based on traffic, weather, and peak hours.',
  contactless: 'Contactless delivery is available upon request for all orders. Simply select the option during checkout for a no-contact drop-off.'
};
</script>

<template>
  <div class="w-full relative mt-12 pb-12 bg-[#FAFAFA]">
    <!-- Header & Cards -->
    <div class="flex flex-col items-center gap-y-10">
      <div>
        <p class="Gabarito text-6xl font-extrabold mt-12">Find Your Nearest Pizza Spot</p>
      </div>
      <div>
        <p class="Inter text-xl">Locate our stores, check delivery zones, and pick the best option for you!</p>
      </div>
      <div class="flex flex-wrap justify-center gap-6 max-w-7xl px-4 mb-14">
        <div
          v-for="city in cities"
          :key="city.name"
          class="relative w-50 h-50 rounded-3xl overflow-hidden cursor-pointer group"
          :style="{ backgroundColor: city.bgColor }"
        >
          <!-- Background Image with Overlay -->
          <div 
            class="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            :style="{ backgroundImage: `url(${city.bgImage})` }"
          >
            <div 
              class="absolute inset-0" 
              :style="{ backgroundColor: city.bgColor, opacity: 0.4 }"
            ></div>
          </div>

          <div class="absolute inset-0 flex items-center justify-center">
            <h3 class="Gabarito text-white text-3xl font-bold z-10">{{ city.name }}</h3>
          </div>

          <div 
            class="absolute bottom-0 mb-6 left-0 w-full flex justify-center transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
          >
            <button class="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-full shadow-md">
              View Map
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> 
                <path d="M7 17L17 7"></path> 
                <path d="M7 7h10v10"></path> 
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-6xl mx-auto mt-20 px-4 space-y-6">
      <div class="rounded-3xl bg-white py-8">
        <button 
          @click="toggleSection(1)"
          class="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer"
        >
          <span class="Inter text-xl font-medium">1. Delivery Zones</span>
          <svg 
            :class="{'rotate-180': activeSection === 1}"
            class="w-6 h-6 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div v-show="activeSection === 1" class="px-6 py-4">
          <div v-for="city in cities" :key="city.name" class="mb-6">
            <h3 class="font-bold mb-2 Inter">{{ city.name }}:</h3>
            <ul class="space-y-2 Inter text-lg">
              <li>• We deliver within a {{ city.radius }} of our central location in {{ city.location }}.</li>
              <li>• {{ city.type }}: {{ city.codes }}</li>
            </ul>
          </div>
        </div>
    </transition>
      </div>
  
      <div class="rounded-3xl bg-white py-8">
        <button 
          @click="toggleSection(2)"
          class="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer"
        >
          <span class="Inter text-xl font-medium">2. Delivery Methods</span>
          <svg 
            :class="{'rotate-180': activeSection === 2}"
            class="w-6 h-6 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div v-show="activeSection === 2" class="px-6 py-4">
          <div class="space-y-6">
            <div>
              <h3 class="mb-3 font-bold Inter">Delivery Methods:</h3>
              <ul class="space-y-2 Inter">
                <li v-for="method in deliveryMethods.methods" :key="method.title">
                    • <span class="font-semibold">{{ method.title }}:</span> {{ method.description }}
                </li>
              </ul>
            </div>
    
            <div>
              <h3 class="font-bold mb-3 Inter">Delivery Fees & Minimum Order:</h3>
              <ul class="space-y-2 Inter">
                <li><span class="font-bold">• New York:</span> {{ cities[0].deliveryFee }} delivery fee | {{ cities[0].minOrder }} minimum order</li>
                <li><span class="font-bold">• London:</span> {{ cities[1].deliveryFee }} delivery fee | {{ cities[1].minOrder }} minimum order</li>
                <li><span class="font-bold">• Amsterdam:</span> {{ cities[2].deliveryFee }} delivery fee | {{ cities[2].minOrder }} minimum order</li>
                <li><span class="font-bold">• Berlin:</span> {{ cities[3].deliveryFee }} delivery fee | {{ cities[3].minOrder }} minimum order</li>
                <li><span class="font-bold">• Bucharest:</span> {{ cities[4].deliveryFee }} delivery fee | {{ cities[4].minOrder }} minimum order</li>
              </ul>
            </div>
    
            <div>
              <h3 class="Inter font-bold mb-3">Delivery Time Estimate:</h3>
              <p>• {{ deliveryMethods.estimate }}</p>
            </div>

            <div>
              <h3 class="Inter font-bold mb-3">Contactless Delivery:</h3>
              <p>• {{ deliveryMethods.contactless }}</p>
            </div>
          </div>
        </div>
    </transition>
      </div>
      
      <div class="rounded-3xl bg-white py-8">
        <button 
          @click="toggleSection(3)"
          class="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer"
        >
          <span class="Inter text-xl font-medium">3. Pickup Info</span>
          <svg 
            :class="{'rotate-180': activeSection === 3}"
            class="w-6 h-6 transition-transform duration-200"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <transition
        enter-active-class="transition ease-out duration-300"
        enter-from-class="opacity-0 transform -translate-y-2"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition ease-in duration-300"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-2"
      >
        <div v-show="activeSection === 3" class="px-6 py-4">
          <div class="space-y-6">
            <div v-for="city in cities" :key="city.name">
              <h3 class="Inter font-bold mb-2">{{ city.name }}:</h3>
              <p>• {{ city.pickup }}</p>
            </div>
          </div>
        </div>
    </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>


</style>
