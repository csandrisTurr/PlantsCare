<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, type Ref } from 'vue'

const data: Ref<Array<object>> = ref([])
const name = ref('')
const species = ref('')
const interval = ref('')

function savePlant() {
  axios.post('http://localhost:3000/api/plants', {
    name: name.value,
    species: species.value,
    waterIntervalDays: parseInt(interval.value),
  })

  location.reload()
}

function del(id: string) {
  axios.delete(`http://localhost:3000/api/plants/${id}`)
}

onMounted(async () => {
  data.value = (await axios.get('http://localhost:3000/api/plants')).data
})
</script>

<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Species</th>
        <th scope="col">Watering interval</th>
        <th scope="col">Operations</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in data">
        <td scope="row">{{ row['id'] }}</td>
        <td scope="row">{{ row['name'] }}</td>
        <td scope="row">{{ row['species'] }}</td>
        <td scope="row">{{ row['water_interval_days'] }}</td>
        <td scope="row">
          <button type="button" class="btn btn-warning btn-sm" @click="">Edit</button>
          <button type="button" class="btn btn-danger btn-sm" @click="del(row['id'])">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <main>
    <h1>Plants managemenet</h1>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="name" placeholder="" v-model="name" />
      <label for="floatingInput">Plant's name</label>
    </div>
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="species" placeholder="" v-model="species" />
      <label for="floatingInput">Plant's species</label>
    </div>
    <div class="form-floating mb-3">
      <input type="number" class="form-control" id="watering" placeholder="" v-model="interval" />
      <label for="floatingInput">Watering interval days</label>
    </div>
    <div class="d-flex">
      <button type="button" class="btn btn-primary btn-sm" @click="savePlant">Save plant</button>
      <button type="button" class="btn btn-secondary btn-sm p-2">Back to plants list</button>
    </div>
  </main>
</template>

<style></style>
