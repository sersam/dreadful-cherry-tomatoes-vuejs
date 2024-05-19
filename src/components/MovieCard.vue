<template>
    <div class="movieContainer">
        <img v-bind:src="image">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <p>{{ releaseYear }}</p>
    </div>

</template>


<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    title: String,
    description: String,
    releaseYear: String,
    image: String
})


</script>


<style>

</style>