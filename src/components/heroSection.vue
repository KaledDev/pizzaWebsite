<script setup>
import { onMounted, ref } from 'vue'

const imagesVisible = ref(Array(10).fill(false))
const isVisible = ref(false)
const pizzaRotated = ref(false)

onMounted(() => {
  imagesVisible.value.forEach((_, index) => {
    setTimeout(() => {
      imagesVisible.value[index] = true
    }, 80 * (index + 1))
  })

  setTimeout(() => {
    isVisible.value = true
  }, 100)

  setTimeout(() => {
    isVisible.value = true
    pizzaRotated.value = true
  }, 100)

})
</script>

<template>
    <div class="relative w-full">

        <div class="flex justify-between items-center">
            <div class="w-1/4 -mt-56">
                <img 
                  src="../assets/asset 7.png" 
                  :class="['w-30 h-30 absolute -mt-20 ml-50 transition-all duration-700 transform', 
                    imagesVisible[0] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 1.png" 
                  :class="['w-30 h-30 absolute ml-14 transition-all duration-700 transform', 
                    imagesVisible[1] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 4.png" 
                  :class="['w-30 h-30 absolute mt-34 ml-24 transition-all duration-700 transform', 
                    imagesVisible[2] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 2.png" 
                  :class="['w-30 h-30 absolute mt-60 ml-60 transition-all duration-700 transform', 
                    imagesVisible[3] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 9.png" 
                  :class="['w-30 h-30 absolute mt-80 ml-24 transition-all duration-700 transform', 
                    imagesVisible[4] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
              </div>
      
            <div class="flex-1 text-center mt-28">
                <div :class="['transition-all duration-1000 transform', isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0']">
                <div class="flex flex-col gap-y-10">
                    <div>
                        <p class="Gabarito text-8xl font-extrabold">Your Pizza Party <br> Starts Here!</p>
                    </div>
                    <div>
                        <p class="Inter text-2xl">Gather your friends and family and enjoy the best pizza in town.<br> Freshly made and delivered hot!</p>
                    </div>
                    <div>
                        <button type="button" class="Inter bg-[#ff003c] text-white py-4 px-8 rounded-full focus:outline-none transition-all duration-300 transform hover:scale-103">
                            View Our Menu
                        </button>
                    </div>
                </div>
            </div>
            </div>
      
            <div class="w-1/4 -mt-56">
                <img 
                  src="../assets/asset 5.png" 
                  :class="['w-30 h-30 absolute -mt-20 ml-50 transition-all duration-700 transform', 
                    imagesVisible[5] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 8.png" 
                  :class="['w-30 h-30 absolute ml-14 transition-all duration-700 transform', 
                    imagesVisible[6] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 7.png" 
                  :class="['w-30 h-30 absolute mt-34 ml-24 transition-all duration-700 transform', 
                    imagesVisible[7] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 3.png" 
                  :class="['w-30 h-30 absolute mt-60 ml-60 transition-all duration-700 transform', 
                    imagesVisible[8] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
                <img 
                  src="../assets/asset 1.png" 
                  :class="['w-30 h-30 absolute mt-80 ml-24 transition-all duration-700 transform', 
                    imagesVisible[9] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0']" 
                  alt=""
                >
              </div>
        </div>
        <div>
          <img 
              src="../assets/asset 10.png" 
              :class="[
                  'mx-auto transition-all duration-1000 transform',
                  pizzaRotated ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0 -translate-x-full'
              ]" 
              alt=""
          >
      </div>
    </div>
</template>

<style scoped>
.transition-all {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
