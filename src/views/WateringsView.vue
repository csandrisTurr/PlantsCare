<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, type Ref } from 'vue'

const plants: Ref<Array<object>> = ref([])
const waterings: Ref<Array<object>> = ref([])

onMounted(async () => {
  plants.value = (await axios.get('http://localhost:3000/api/plants')).data
  // data.value = (await axios.get('http://localhost:3000/api/waterings')).data
})
</script>

<template>
  <main>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Watering date</th>
          <th scope="col">Water amount</th>
          <th scope="col">Notes</th>
          <th scope="col">Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in waterings">
          <td scope="row">{{ row['id'] }}</td>
          <td scope="row">{{ row['name'] }}</td>
          <td scope="row">{{ row['species'] }}</td>
          <td scope="row">{{ row['water_interval_days'] }}</td>
          <td scope="row">
            <button type="button" class="btn btn-warning btn-sm" @click="">Warning</button>
            <button type="button" class="btn btn-danger btn-sm" @click="del(row['id'])">
              Danger
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
