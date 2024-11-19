<template>
    <div>
      <h1 class="text-3xl font-bold">Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="card">
          <router-link :to="`/products/${product.id}`">
            <img :src="product.image" alt="product.title" class="w-full h-48 object-cover">
            <h2 class="text-xl font-bold mt-2">{{ product.title }}</h2>
            <p class="text-gray-700">{{ product.price | currency }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const products = ref([])
  
  onMounted(async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    products.value = await response.json()
  })
  </script>
  
  <style scoped>
  .card {
    @apply p-3 rounded-md bg-white shadow-md h-full;
  }
  </style>