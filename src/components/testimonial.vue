<template>
  <div class="bg-[#1A1A1A] min-h-screen p-8">
    <div class="max-w-[1400px] mx-auto relative">
      <button @click="prevSlide" class="absolute left-4 top-1/2 z-10 bg-white/20 p-4 rounded-full -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="overflow-hidden">
        <div class="flex gap-4 transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 600}px)` }">
          <div v-for="(testimonial, index) in duplicatedTestimonials" 
               :key="`${testimonial.name}-${index}`" 
               class="min-w-[580px] transition-all duration-300"
               :class="{'opacity-100 shadow-2xl': getActiveIndex(index), 'opacity-50': !getActiveIndex(index)}">
            <div class="relative overflow-hidden rounded-3xl h-[500px]">
              <img :src="testimonial.image" class="w-full h-full object-cover" :alt="testimonial.name">
              <div class="absolute inset-0 bg-black/60 flex flex-col justify-between p-6">
                <p class="text-white italic text-center my-auto">
                  "{{ testimonial.quote }}"
                </p>
                <div class="text-white">
                  <h3 class="Inter text-xl font-bold mb-2">{{ testimonial.name }}</h3>
                  <p class="Inter text-xs opacity-80">{{ testimonial.profession }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button @click="nextSlide" class="absolute right-4 top-1/2 z-10 bg-white/20 p-4 rounded-full -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import one from '../assets/asset 30.png';
import two from '../assets/asset 31.png';
import three from '../assets/asset 32.png';
import four from '../assets/asset 33.png';
import five from '../assets/asset 34.png';

const currentSlide = ref(0);
const testimonials = [
  {
    image: one,
    quote: "The Meat Lover's Feast is everything a carnivore dreams of, loaded with perfectly cooked meats and balanced with just the right amount of sauce. This is pizza at its finest.",
    name: "Chef Marco",
    profession: "Food Blogger, Berlin Bites"
  },
  {
    image: two,
    quote: "Fresh ingredients make all the difference. Every bite tells a story of carefully selected produce and masterful preparation.",
    name: "Emma Gallagher",
    profession: "Senior Food Writer, London Eats Magazine"
  },
  {
    image: three,
    quote: "Traditional techniques meeting modern creativity - this is what makes their dishes truly exceptional.",
    name: "Lucas Van Den Berg",
    profession: "Restaurant Critic, The Amsterdam Culinary Journal"
  },
  {
    image: four,
    quote: "The attention to detail in plating and flavor composition shows true culinary artistry.",
    name: "Sophie Jensen",
    profession: "Head Of Culinary Arts, Gourmet Institute"
  },
  {
    image: five,
    quote: "Each dish showcases the perfect balance of flavors and textures. A truly memorable dining experience.",
    name: "David Park",
    profession: "Food Blogger, Berlin Bites"
  }
];

const duplicatedTestimonials = computed(() => [...testimonials, ...testimonials]);

const getActiveIndex = (index) => {
  const normalizedCurrent = currentSlide.value % testimonials.length;
  const normalizedIndex = index % testimonials.length;
  return normalizedCurrent === normalizedIndex;
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length;
};
</script>