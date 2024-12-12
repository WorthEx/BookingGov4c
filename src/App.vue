<script setup>
import {RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link crossorigin href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
  <div id="app" class="relative h-full">
    <Navigation/>
    <RouterView/>
  </div>
</template>

<style>
@import "bootstrap-icons/font/bootstrap-icons.min.css";
</style>