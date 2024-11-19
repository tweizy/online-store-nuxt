<template>
    <nav class="container mx-auto p-4 flex justify-between">
      <router-link to="/" class="font-bold btn">Home</router-link>
      <ul class="flex gap-4">
        <li><router-link to="/" class="btn">Home</router-link></li>
        <li><router-link to="/about" class="btn">About</router-link></li>
        <li><router-link to="/products" class="btn">Products</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
    .router-link-exact-active {
      color: #12b488;
    }
  </style>