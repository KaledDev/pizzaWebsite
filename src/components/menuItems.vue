<template>
    <div class="mx-auto max-w-6xl p-8 mt-16">
      <!-- Menu Header -->
      <div class="mb-14">
        <h1 class="Gabarito mb-8 text-7xl font-extrabold">Our Menu</h1>
        <p class="Inter max-w-3xl text-lg">
          From savory pizzas to refreshing drinks, we take pride in serving dishes that are made with care.
          Every meal is thoughtfully prepared to give you a culinary experience worth remembering.
        </p>

        <img src="/menu/asset 0.png" alt="Leaf" class="absolute top-[84px] left-[650px] h-32 w-32 blur-sm animate-leaf">
        <img src="/menu/asset 1.png" alt="Tomato" class="absolute right-[420px] top-35 h-36 w-36 blur-sm animate-tomato">
      </div>
  
      <div class="mb-18 flex flex-wrap gap-4">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          :class="[
            ' cursor-pointer inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-10 py-2 transition-colors duration-200',
            { '!bg-[#fafafa]': currentTab === tab.id }
          ]"
          @click="currentTab = tab.id"
        >
          <img 
            v-if="tab.id !== 'full' && tab.icon" 
            :src="tab.icon" 
            :alt="tab.name" 
            class="h-5 w-5"
          >
          {{ tab.name }}
          <span 
            v-if="currentTab === tab.id" 
            class="ml-2 h-2 w-2 rounded-full bg-red-600"
          ></span>
        </button>
      </div>
  
      <div class="menu-content">
        <template v-for="section in menuSections" :key="section.id">
          <div v-if="currentTab === 'full' || currentTab === section.id" class="mb-12">
            <h2 class="Gabarito mb-4 text-4xl font-extrabold">{{ section.title }}</h2>
            <p class="mb-8 text-lg">{{ section.description }}</p>
            <div class="space-y-6">
                <div 
                  v-for="item in section.items" 
                  :key="item.id"
                  class="flex gap-8 rounded-lg bg-white p-6"
                >
                  <!-- Item Image -->
                  <div class="h-60 w-60 flex-shrink-0">
                    <img 
                      :src="item.image" 
                      :alt="item.name"
                      class="h-full w-full rounded-lg object-cover"
                    >
                  </div>
    
                  <!-- Item Details -->
                  <div class="flex flex-1 flex-col">
                    <h3 class="Gabarito mb-4 text-2xl font-bold">{{ item.name }}</h3>
                    
                    <!-- Item Info -->
                    <div class="mb-4 space-y-4">
                      <div>
                        <h4 class="text-xs">Ingredients:  {{ item.ingredients.join(', ') }} </h4>
                      </div>
    
                      <div class="grid grid-cols-[auto_1fr] gap-4">
                        <!-- Titre "Nutritional Info" -->
                        <h4 class="text-xs">Nutritional Info:</h4>
                      
                        <!-- Liste des informations nutritionnelles -->
                        <ul class="text-xs list-disc pl-5">
                          <li v-for="(value, key) in item.nutritionalInfo" :key="key" class="mb-2">
                            {{ key }}: {{ value }}
                          </li>
                        </ul>
                      </div>
                    </div>
    
                    <!-- Order Section -->
                    <div class="mt-auto flex items-center justify-between">
                      <button class="rounded-full bg-red-500 px-6 py-2 text-white hover:bg-red-600">
                        Order Now
                      </button>
                      <span class="Inter text-2xl font-medium">{{ item.price }}</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </template>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Tabs data
  const tabs = [
    { id: 'full', name: 'Full Menu'},
    { id: 'pizza', name: 'Pizza', icon: '/menu/asset 15.png' },
    { id: 'pasta', name: 'Pasta', icon: '/menu/asset 19.png' },
    { id: 'sides', name: 'Sides', icon: '/menu/asset 27.png' },
    { id: 'desserts', name: 'Desserts', icon: '/menu/asset 30.png' },
    { id: 'drinks', name: 'Drinks', icon: '/menu/asset 6.png' }
  ]
  
  // Current selected tab
  const currentTab = ref('full')
  
  // Menu sections data
  const menuSections = [
    {
      id: 'pizza',
      title: 'Pizza',
      description: 'From the classic simplicity of a traditional Margherita to the rich indulgence of gourmet truffle oil creations, we artfully blend the best of old-world charm with modern culinary innovation. Each pizza is hand-tossed with care, topped with fresh, high-quality ingredients, and baked to golden perfection.',
      items: [
        {
          id: 1,
          name: 'Cheese Avalanche',
          image: '/menu/asset 7.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 2,
          name: 'Buffalo Bliss',
          image: '/menu/asset 8.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 3,
          name: 'Mediterranean Marvel',
          image: '/menu/asset 9.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 4,
          name: 'Hawaiian Heatwave',
          image: '/menu/asset 10.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 5,
          name: 'Meat Lover\'s Feast',
          image: '/menu/asset 11.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 6,
          name: 'Garden Delight',
          image: '/menu/asset 12.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 7,
          name: 'Pepperoni Popper',
          image: '/menu/asset 13.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 8,
          name: 'Truffle Temptation',
          image: '/menu/asset 14.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 9,
          name: 'BBQ Blaze',
          image: '/menu/asset 15.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 10,
          name: 'Garlic Supreme',
          image: '/menu/asset 16.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 11,
          name: 'Margarita Muse',
          image: '/menu/asset 17.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
        {
          id: 12,
          name: 'Firecracker Inferno',
          image: '/menu/asset 18.png',
          nutritionalInfo: {
            calories: '340',
            fat: '18g',
            carbohydrates: '29g',
            protein: '16g'
          },
          ingredients: ['Mozzarella', 'cheddar', 'Parmesan', 'gouda', 'ricotta', 'marinara sauce', 'oregano'],
          price: '$14.99'
        },
      ]
    },
    {
      id: 'pasta',
      title: 'Pasta',
      description: 'From the rustic kitchens of Italy to your table, our pasta is crafted with time-honored techniques and fresh, high-quality ingredients. Whether it\'s a creamy Alfredo or a bold Arrabbiata, each dish embodies the essence of traditional Italian cuisine with a touch of contemporary flair.',
      items: [
        {
          id: 1,
          name: 'Veggie Primavera',
          image: '/menu/asset 19.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 2,
          name: 'Classic Alfredo',
          image: '/menu/asset 20.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 3,
          name: 'Classic Alfredo',
          image: '/menu/asset 20.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 4,
          name: 'Classic Alfredo',
          image: '/menu/asset 21.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 5,
          name: 'Classic Alfredo',
          image: '/menu/asset 22.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 6,
          name: 'Classic Alfredo',
          image: '/menu/asset 23.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        }
      ]
    },
    {
      id: 'sides',
      title: 'Sides',
      description: 'Our sides are the perfect blend of simple, satisfying flavors and creative culinary twists. From crispy truffle fries to golden mozzarella sticks, each bite complements your meal while standing out on its own.',
      items: [
        {
          id: 1,
          name: 'Classic Alfredo',
          image: '/menu/asset 25.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 2,
          name: 'Classic Alfredo',
          image: '/menu/asset 4.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 3,
          name: 'Classic Alfredo',
          image: '/menu/asset 26.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 4,
          name: 'Classic Alfredo',
          image: '/menu/asset 27.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 5,
          name: 'Classic Alfredo',
          image: '/menu/asset 22.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 6,
          name: 'Classic Alfredo',
          image: '/menu/asset 28.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
      ]
    },
    {
      id: 'desserts',
      title: 'Desserts',
      description: 'Inspired by classic Italian sweets and modern indulgences, our desserts are the perfect finale to your dining experience. Whether it\'s the velvety layers of tiramisu or the decadent richness of molten chocolate cake, each treat is carefully crafted to balance sweetness and sophistication.',
      items: [
        {
          id: 1,
          name: 'Classic Alfredo',
          image: '/menu/asset 5.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 2,
          name: 'Classic Alfredo',
          image: '/menu/asset 31.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 3,
          name: 'Classic Alfredo',
          image: '/menu/asset 32.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 4,
          name: 'Classic Alfredo',
          image: '/menu/asset 33.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 5,
          name: 'Classic Alfredo',
          image: '/menu/asset 34.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 6,
          name: 'Classic Alfredo',
          image: '/menu/asset 35.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
      ]
    },
    {
      id: 'drinks',
      title: 'Drinks',
      description: 'Our drink menu offers a refreshing mix of timeless classics and bold, modern flavors. From freshly squeezed lemonades to expertly brewed iced coffee, each sip is designed to complement your meal or provide a stand-alone moment of refreshment.',
      items: [
        {
          id: 1,
          name: 'Classic Alfredo',
          image: '/menu/asset 36.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 2,
          name: 'Classic Alfredo',
          image: '/menu/asset 37.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 3,
          name: 'Classic Alfredo',
          image: '/menu/asset 38.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 4,
          name: 'Classic Alfredo',
          image: '/menu/asset 39.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 5,
          name: 'Classic Alfredo',
          image: '/menu/asset 40.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 6,
          name: 'Classic Alfredo',
          image: '/menu/asset 41.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 7,
          name: 'Classic Alfredo',
          image: '/menu/asset 42.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 8,
          name: 'Classic Alfredo',
          image: '/menu/asset 43.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 9,
          name: 'Classic Alfredo',
          image: '/menu/asset 44.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 10,
          name: 'Classic Alfredo',
          image: '/menu/asset 45.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 11,
          name: 'Classic Alfredo',
          image: '/menu/asset 46.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 12,
          name: 'Classic Alfredo',
          image: '/menu/asset 47.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 13,
          name: 'Classic Alfredo',
          image: '/menu/asset 48.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 14,
          name: 'Classic Alfredo',
          image: '/menu/asset 49.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 15,
          name: 'Classic Alfredo',
          image: '/menu/asset 50.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 16,
          name: 'Classic Alfredo',
          image: '/menu/asset 51.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 17,
          name: 'Classic Alfredo',
          image: '/menu/asset 52.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
        {
          id: 18,
          name: 'Classic Alfredo',
          image: '/menu/asset 53.png',
          nutritionalInfo: {
            calories: '450',
            fat: '22g',
            carbohydrates: '48g',
            protein: '18g'
          },
          ingredients: ['Fettuccine', 'heavy cream', 'Parmesan', 'butter', 'garlic', 'black pepper'],
          price: '$16.99'
        },
      ]
    }
  ]
  </script>
  
<style scoped>
@keyframes leafAnimation {
  0% {
    transform: translateY(100%) scale(0.8);
    opacity: 0;
    filter: blur(8px);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
    filter: blur(0);
  }
}

.animate-leaf {
  animation: leafAnimation 1.5s ease-out 0.5s forwards;
}


@keyframes tomatoAnimation {
  0% {
    transform: translateX(100%) scale(0.8);
    opacity: 0;
    filter: blur(8px);
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: blur(0);
  }
}

.animate-tomato {
  animation: tomatoAnimation 1.5s ease-out 0.5s forwards;
}  
</style>