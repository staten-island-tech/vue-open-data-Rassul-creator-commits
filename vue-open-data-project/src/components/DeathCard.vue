<template>
  <div>
    <p>{{ death }}</p>
  </div>
  <div> 
    <div class="card">
    <p><strong>Year:</strong> {{ death.year }}</p>
    <p><strong>Leading Cause:</strong> {{ death.leading_cause }}</p>
    <p><strong>Sex:</strong> {{ death.sex }}</p>
    <p><strong>Race:</strong> {{ death.race_ethnicity }}</p>
    <p><strong>Deaths:</strong> {{ death.deaths }}</p>
    <p><strong>Rate:</strong> {{ death.death_rate }}</p>
  </div>
  </div>

</template>

<script setup>
  
  defineProps({
  death: Object
  })





</script>

<style lang="scss" scoped>

</style>
