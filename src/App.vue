<template>
  <BarraNavegacion />
  <main class="content">
    <router-view />
  </main>
</template>

<script setup>
import BarraNavegacion from './components/BarraNavegacion.vue'
</script>

<style>
.content {
  padding-top: 100px; /* espacio para la barra de navegación fija */
}
</style>
