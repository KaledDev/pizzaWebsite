<template>
    <div>
      <div class="flex items-center justify-evenly py-10">
        <div>
          <img src="../assets/asset 10.png" alt="Rotating Pizza" class="slow-rotate">
        </div>
        <div class="flex flex-col gap-y-6">
          <div>
            <p class="Gabarito font-extrabold text-5xl">Delicious Deals,<br> Just for You</p>
          </div>
          <div>
            <p class="Inter text-xl">
              Sign up for our newsletter and receive <br>exclusive offers on new pizzas!
            </p>
          </div>
          <div>
            <input type="email" placeholder="youremail@email.com" class="w-120 py-2 px-4 border border-gray-300 bg-gray-100 rounded-4xl">
          </div>
          <div>
            <button class="bg-[#ff003c] text-white w-120 px-4 py-3 rounded-4xl shadow-md">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  @keyframes slow-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .slow-rotate {
    animation: slow-spin 85s linear infinite;
    will-change: transform;
    transform-origin: center;
    display: block;
  }
  </style>
  