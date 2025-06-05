<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, type Ref } from 'vue'

const data: Ref<Array<object>> = ref([])

onMounted(async () => {
  data.value = (await axios.get('http://localhost:3000/api/plants/stats')).data
})
</script>

<template>
  <main>
    <h1>Dashboard</h1>
    <h3>Statistics</h3>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Plant</th>
          <th scope="col">Species</th>
          <th scope="col">Last watered date</th>
          <th scope="col">Watering count</th>
          <th scope="col">Average water amount</th>
          <th scope="col">Total water amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in data">
          <td scope="row">{{ row['plant_id'] }}</td>
          <td scope="row">{{ row['plant_name'] }}</td>
          <td scope="row">{{ row['species'] }}</td>
          <td scope="row">{{ row['watering_count'] }}</td>
          <td scope="row">{{ row['last_watered_date'] }}</td>
          <td scope="row">{{ row['average_amount_ml'] }}</td>
          <td scope="row">{{ row['total_watered_ml'] }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
