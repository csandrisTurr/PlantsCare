<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link active">Dashboard</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/plants" class="nav-link">Plants</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/waterings" class="nav-link">Waterings</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss">
@import 'bootstrap/scss/bootstrap';

body {
  flex-direction: column;

  padding: 0;
}

#app {
  padding: 0;
}
</style>
