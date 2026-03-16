<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
</template>
<script setup>
import { createRouter } from 'vue'

const router = createRouter({
  routes: [
    { path: '/', component: HomeView },
    { path: '/PokemonData/:id', component: PokemonData },
  ],
})
</script>

// fetch (https://data.cityofnewyork.us/api/v3/views/jb7j-dtam/query.json)
<style scoped></style>
