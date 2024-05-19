<script setup lang="ts">
import { defineProps } from 'vue'
import MovieCard from './MovieCard.vue'

defineProps({
    movieList: Object
})

</script>

<template>
    <div class="movieListContainer">
        <div v-for="movie of movieList" :key="movie.title" class="movieCard">
            <MovieCard v-bind:title="movie.title" v-bind:description="movie.description"
                v-bind:releaseYear="movie.releaseYear" v-bind:image="movie.images.posterArt.url" />
        </div>
    </div>

</template>

<style>
.movieListContainer {
    display: flex;
    flex: 1 1 auto;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: black;

}

.movieCard {
    border: 1px solid white;
    border-radius: 3%;
    width: 20%;
    margin: 2rem;
    padding: 1rem;
    color: white;

    img {
        display: flex;
        width: 100%;
        border-radius: 10%;
    }
}
</style>