<template>
  <div>
    <p>{{ death }}</p>
  </div>
  <div> 
    <div class="card">
    <p>Year: {{ death.year }}</p>
    <p>Leading Cause: {{ death.leading_cause }}</p>
    <p>Sex: {{ death.sex }}</p>
    <p>Race: {{ death.race_ethnicity }}</p>
    <p>Deaths: {{ death.deaths }}</p>
    <p>Rate: {{ death.death_rate }}</p>
  </div>
  </div>

</template>

<script setup>
  
  defineProps({
  death: Object
  })

</script>

<style scoped>
  .card {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
</style>
