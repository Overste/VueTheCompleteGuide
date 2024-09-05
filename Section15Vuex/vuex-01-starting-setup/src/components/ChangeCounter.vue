<template>
    <!-- <button @click="addOne">Add 1</button> -->
    <button @click="increment">Add 3</button>
    <button @click="increase">Add 10</button>
</template>

<script setup>
import { useStore } from '../main.js';
const store = useStore(); // Use the store
// import { mapState } from 'pinia'

// const addOne = () => store.$patch({count: store.count + 1});
// const addOne = () => store.increment();
// const addOne = () => store.$state.count++;
const increment = () => store.increment();
const increase = () => store.increase(7);
</script>
<style scoped>

</style>