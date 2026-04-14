<template>
  <div class="container">
    <h1>NYC Death Data</h1>

    <input v-model="searchYear" placeholder="Enter year..." />

    <canvas ref="causeChart"></canvas>

    <canvas ref="raceChart"></canvas>

    <DeathCard
      v-for="(item, index) in filteredDeaths"
      :key="index"
      :death="item"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import DeathCard from '../components/DeathCard.vue'
import Chart from 'chart.js/auto'

const deaths = ref([])
const searchYear = ref('')

const causeChart = ref(null)
const raceChart = ref(null)

let chart1 = null
let chart2 = null

async function loadData() {
  try {
    const res = await fetch(
      'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
    )

    deaths.value = await res.json()

    drawCharts()
  } catch (err) {
    alert('Failed to load data')
    console.log(err)
  }
}

const filteredDeaths = computed(() => {
  if (!searchYear.value) return deaths.value

  return deaths.value.filter(d =>
    d.year && d.year.toString().includes(searchYear.value)
  )
})

function drawCharts() {
  const data = filteredDeaths.value

  if (!data.length) return

  if (causeChart.value) {
    const ctx = causeChart.value.getContext('2d')

    if (chart1) chart1.destroy()

    const top = data.slice(0, 5)

    chart1 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: top.map(d => d.leading_cause),
        datasets: [
          {
            label: 'Deaths by Cause',
            data: top.map(d => Number(d.deaths))
          }
        ]
      }
    })
  }

  if (raceChart.value) {
    const ctx = raceChart.value.getContext('2d')

    if (chart2) chart2.destroy()

    const groups = {}

    data.forEach(d => {
      const race = d.race_ethnicity || 'Unknown'

      if (!groups[race]) {
        groups[race] = 0
      }

      groups[race] += Number(d.deaths)
    })

    chart2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: Object.keys(groups).slice(0, 5),
        datasets: [
          {
            label: 'Deaths by Race',
            data: Object.values(groups).slice(0, 5)
          }
        ]
      }
    })
  }
}

watch(searchYear, () => {
  drawCharts()
})

onMounted(() => {
  loadData()
})
</script>

<style scoped>
.container {
  width: 80vw;
  margin: 20px auto;
}
</style>