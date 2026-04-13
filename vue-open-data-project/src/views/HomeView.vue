<template>
    <div class="container">
      <div v-for =""></div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
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
    getDeathRate();
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