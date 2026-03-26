<template>
  <div class="container">
    <DeathCard v-for="(mon, index) in death" :key="mon.name" :Death="mon" :id="index + 1" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

import DeathCard from './components/DeathCard.vue'
const death = ref([])
async function getDeathRate() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')

    const data = await response.json()
    death.value = data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getDeathRate()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
