<template>
    <div class="header">
        <h1>Dreadful Cherry Tomatoes Vuejs</h1>
        <div class="searchField">
            <span>
                <i />
                <InputText v-model="model" placeholder="Search" />
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const model = defineModel()
</script>

<style>
.header {
    background-color: red;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
}
</style>
