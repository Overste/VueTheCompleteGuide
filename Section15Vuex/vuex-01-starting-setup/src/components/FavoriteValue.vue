<template>
    <h3>
      {{ counter }}  
    </h3>
    <p>we do more...</p>
</template>
<script setup>
import { useStore } from '../main.js';
import { computed } from 'vue';
// import { storeToRefs } from 'pinia'

const store = useStore(); // Use the store
// const { normalizedCounter } = storeToRefs(store)

// Access the 'count' property directly from the store's state
// Access the 'count' property directly from the store's state
// const counter = computed(() => normalizedCounter);
const counter = computed(() => store.normalizedCounter);
</script>