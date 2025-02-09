<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

const rotationAngle = ref(0)

const handleScroll = () => {
  rotationAngle.value = (window.scrollY % 360) / 15
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="flex flex-col text-center gap-y-8">
    <div>
      <p class="Gabarito text-5xl font-bold">Hot Pizza, Hotter Deals</p>
    </div>
    <div>
      <p class="Inter xl">From family-sized deals to solo slices, find the perfect offer for your pizza cravings.</p>
    </div>
  </div>

  <div class="flex flex-wrap gap-6 p-6 justify-center">
    <!-- Spicy Duo Deal Card -->
    <div class="w-[588px] h-[491px] rounded-3xl bg-[#FF003C]  text-white relative">
      <h2 class="Gabarito px-3 text-3xl font-bold mt-4 mb-8 ml-6">Spicy Duo Deal</h2>
      <ul class="px-6 mb-4 space-y-2 mt-6 ml-8">
        <li class="Inter text-xl">• 1 Medium Firecracker Inferno</li>
        <li class="Inter text-xl">• 1 Medium Buffalo Bliss</li>
      </ul>
      <div class="px-3 flex items-center justify-between mb-2">
        <button class="Inter bg-white text-black px-4 py-2 rounded-full ml-10 font-medium hover:bg-gray-100 text-sm">
          Order Now
        </button>
        <div class="text-right">
          <span class="Inter text-xl font-bold -ml-8">$21.99</span>
          <span class="Inter ml-2 text-xl">- Save $4</span>
        </div>
      </div>
      <div class="flex items-center overflow-hidden h-80 rounded-3xl">
        <img 
          src="../assets/asset 14.png" 
          alt="Spicy pizzas" 
          class="w-96 object-cover mt-52 -ml-6 transition-transform duration-300"
          :style="{ transform: `rotate(${rotationAngle}deg)` }"
        />
        <img 
          src="../assets/asset 15.png" 
          alt="Spicy pizzas" 
          class="w-96 object-cover mt-52 -ml-16 transition-transform duration-300"
          :style="{ transform: `rotate(${-rotationAngle}deg)` }"
        />
      </div>
    </div>


    <div class="w-[588px] h-[491px] rounded-3xl bg-[#FFCC00]  text-black relative">
      <h2 class="Gabarito px-3 text-3xl font-bold mt-4 mb-8 ml-6">Spicy Duo Deal</h2>
      <ul class="px-6 mb-4 space-y-2 mt-6 ml-8">
        <li class="Inter text-xl">• 1 Medium Cheese Avalanche</li>
        <li class="Inter text-xl">• 1 Medium Truffle Temptation</li>
      </ul>
      <div class="px-3 flex items-center justify-between mb-2">
        <button class="Inter bg-white text-black px-4 py-2 rounded-full ml-10 font-medium text-sm">
          Order Now
        </button>
        <div class="text-right">
          <span class="Inter text-xl font-bold -ml-8">$2.99</span>
          <span class="Inter ml-2 text-xl">- Save $5</span>
        </div>
      </div>
      <div class="flex items-center overflow-hidden h-80 rounded-3xl">
        <img 
          src="../assets/asset 16.png" 
          alt="Cheese pizzas" 
          class="w-96 object-cover mt-52 -ml-6 transition-transform duration-300"
          :style="{ transform: `rotate(${rotationAngle}deg)` }"
        />
        <img 
          src="../assets/asset 17.png" 
          alt="Cheese pizzas" 
          class="w-96 object-cover mt-52 -ml-16 transition-transform duration-300"
          :style="{ transform: `rotate(${-rotationAngle}deg)` }"
        />
      </div>
    </div>

    <div class="w-[1200px] h-[550px] mt-12 rounded-3xl bg-[#1A1A1A]  text-white relative overflow-hidden">
        <h2 class="Gabarito px-3 text-3xl font-bold mt-4 mb-8 ml-6">Meat Feast Combo</h2>
        <ul class="px-6 mb-4 space-y-2 mt-6 ml-8">
          <li class="Inter text-xl">• 1 Medium Meat Lover's Feast</li>
          <li class="Inter text-xl">• 1 Medium BBQ Blaze</li>
        </ul>
        <div class="px-3 flex items-center justify-between mb-2">
          <button class="Inter bg-white text-black px-4 py-2 rounded-full ml-10 font-medium text-sm">
            Order Now
          </button>
          <div class="text-right">
            <span class="Inter text-xl font-bold -ml-8">$23.99</span>
            <span class="Inter ml-2 text-xl">- Save $6</span>
          </div>
        </div>
        <div class="flex items-center  h-90 rounded-3xl">
          <img 
            src="../assets/asset 18.png" 
            alt="Cheese pizzas" 
            class="w-[700px] object-cover mt-64 -ml-6 transition-transform duration-300"
            :style="{ transform: `rotate(${rotationAngle}deg)` }"
          />
          <img 
            src="../assets/asset 19.png" 
            alt="Cheese pizzas" 
            class="w-[700px] object-cover mt-64 -ml-16 transition-transform duration-300"
            :style="{ transform: `rotate(${-rotationAngle}deg)` }"
          />
        </div>
      </div>


      <div class="w-[588px] h-[491px] rounded-3xl bg-[#0A9900]  text-white relative">
        <h2 class="Gabarito px-3 text-3xl font-bold mt-4 mb-8 ml-6">Veggie Delight Duo</h2>
        <ul class="px-6 mb-4 space-y-2 mt-6 ml-8">
          <li class="Inter text-xl">• 1 Medium Mediterranean Marvel</li>
          <li class="Inter text-xl">• 1 Medium Garlic Supreme</li>
        </ul>
        <div class="px-3 flex items-center justify-between mb-2">
          <button class="Inter bg-white text-black px-4 py-2 rounded-full ml-10 font-medium text-sm">
            Order Now
          </button>
          <div class="text-right">
            <span class="Inter text-xl font-bold -ml-8">$21.99</span>
            <span class="Inter ml-2 text-xl">- Save $4</span>
          </div>
        </div>
        <div class="flex items-center overflow-hidden h-80 rounded-3xl">
          <img 
            src="../assets/asset 14.png" 
            alt="Spicy pizzas" 
            class="w-96 object-cover mt-52 -ml-6 transition-transform duration-300"
            :style="{ transform: `rotate(${rotationAngle}deg)` }"
          />
          <img 
            src="../assets/asset 15.png" 
            alt="Spicy pizzas" 
            class="w-96 object-cover mt-52 -ml-16 transition-transform duration-300"
            :style="{ transform: `rotate(${-rotationAngle}deg)` }"
          />
        </div>
      </div>
  
  
      <div class="w-[588px] h-[491px] rounded-3xl bg-[#FF9100] text-white relative">
        <h2 class="Gabarito px-3 text-3xl font-bold mt-4 mb-8 ml-6">Sweet & Savory Combo</h2>
        <ul class="px-6 mb-4 space-y-2 mt-6 ml-8">
          <li class="Inter text-xl">• 1 Medium Hawaiian Heatwave</li>
          <li class="Inter text-xl">• 1 Medium Pepperoni Popper</li>
        </ul>
        <div class="px-3 flex items-center justify-between mb-2">
          <button class="Inter bg-white text-black px-4 py-2 rounded-full ml-10 font-medium text-sm">
            Order Now
          </button>
          <div class="text-right">
            <span class="Inter text-xl font-bold -ml-8">$22.99</span>
            <span class="Inter ml-2 text-xl">- Save $5</span>
          </div>
        </div>
        <div class="flex items-center overflow-hidden h-80 rounded-3xl">
          <img 
            src="../assets/asset 16.png" 
            alt="Cheese pizzas" 
            class="w-96 object-cover mt-52 -ml-6 transition-transform duration-300"
            :style="{ transform: `rotate(${rotationAngle}deg)` }"
          />
          <img 
            src="../assets/asset 17.png" 
            alt="Cheese pizzas" 
            class="w-96 object-cover mt-52 -ml-16 transition-transform duration-300"
            :style="{ transform: `rotate(${-rotationAngle}deg)` }"
          />
        </div>
      </div>

  </div>
</template>

<style scoped>
</style>