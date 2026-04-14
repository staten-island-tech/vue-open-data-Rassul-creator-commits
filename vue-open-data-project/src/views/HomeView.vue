<template>
  <div class="container">
    <h1>NYC Death Data</h1>

    <input v-model="searchYear" placeholder="Enter year..." />
    <button @click="filterData">Search</button>

    <canvas ref="chartRef"></canvas>

    <DeathCard
      v-for="(item, index) in filteredDeaths"
      :key="index"
      :death="item"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DeathCard from '../components/DeathCard.vue'
import Chart from 'chart.js/auto'

const deaths = ref([])
const searchYear = ref('')
const chartRef = ref(null)

async function getDeathRate() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    deaths.value = data

    createChart()
  } catch (error) {
    alert(error.message)
  }
}

const filteredDeaths = computed(() => {
  if (searchYear.value === '') {
    return deaths.value
  }
  return deaths.value.filter(d => d.year.includes(searchYear.value))
})

function filterData() {
  if (searchYear.value === '') {
    alert('Enter a year')
  }
}

function createChart() {
  if (!chartRef.value) return

  const ctx = chartRef.value.getContext('2d')

  const labels = deaths.value.slice(0, 5).map(d => d.leading_cause)
  const values = deaths.value.slice(0, 5).map(d => d.deaths)

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Deaths',
          data: values
        }
      ]
    }
  })
}

onMounted(() => {
  getDeathRate()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 30px auto;
}
</style>