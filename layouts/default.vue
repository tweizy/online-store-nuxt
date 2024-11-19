<template>
    <div>
      <header class="shadow-sm bg-white">
        <Navbar />
      </header>
  
      <!-- OUTPUT THE PAGE CONTENT HERE-->
      <div class="container mx-auto p-4">
        <NuxtPage />
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from '~/components/Navbar.vue'
  </script>
  
  <style scoped>
    .router-link-exact-active {
      color: #12b488;
    }
  </style>