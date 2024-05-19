<script setup lang="ts">
import HeaderComponent from "./components/HeaderComponent.vue";
import MoviesList from "./components/MoviesList.vue";

import { exampleData } from './services/data-generator'
import { ref } from 'vue'

const movieList = exampleData.entries;
const filter = ref('');

function filterMovies() {
  return movieList.filter((movie) => movie.title.toLocaleLowerCase().includes(filter.value.toLocaleLowerCase()))
}
</script>

<template>
  <header>
    <HeaderComponent v-model="filter"/>
  </header>

  <main>
    <MoviesList v-bind:movieList="filterMovies()"></MoviesList>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

</style>
