<template>
    <div>
      <h1>Death Statistics (By Sex)</h1>
  
      <canvas ref="pieChart"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  const deaths = ref([])
  const pieChart = ref(null)
  
  let chart = null

  async function getData() {
    try {
      const response = await fetch(
        'https://data.cityofnewyork.us/resource/jb7j-dtam.json'
      )
  
      if (!response.ok) {
        alert('Failed to load API data')
        return
      }
  
      deaths.value = await response.json()
  
      createChart()
    } catch (error) {
      alert('Error loading chart data')
      console.log(error)
    }
  }
  

  function createChart() {
    if (!pieChart.value) return
  
    const ctx = pieChart.value.getContext('2d')
  
    if (chart) {
      chart.destroy()
    }
  
    const males = deaths.value.filter(d => d.sex === 'M').length
    const females = deaths.value.filter(d => d.sex === 'F').length
  
    chart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Deaths by Sex',
            data: [males, females]
          }
        ]
      }
    })
  }

  onMounted(() => {
    getData()
  })
  </script>