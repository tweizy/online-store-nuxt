<template>
    <div>
      <h1 class="text-3xl font-bold">{{ product.title }}</h1>
      <img :src="product.image" alt="product.title" class="w-full h-64 object-cover mt-4">
      <p class="text-gray-700 mt-4">{{ product.description }}</p>
      <p class="text-xl font-bold mt-4">{{ product.price | currency }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const product = ref({})
  
  onMounted(async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${route.params.id}`)
    product.value = await response.json()
  })
  </script>