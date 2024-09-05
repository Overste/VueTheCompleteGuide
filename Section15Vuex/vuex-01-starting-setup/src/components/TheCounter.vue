<template>
    <h3>
      {{ counter }}  
    </h3>
</template>
<script setup>
import { useStore } from '../main.js';
import { computed } from 'vue';
import { storeToRefs } from 'pinia'

const store = useStore(); // Use the store
const { finalCounter } = storeToRefs(store)

// Access the 'count' property directly from the store's state
// const counter = computed(() => store.$state.count);
const counter = computed(() => finalCounter.value);
// const counter = computed(() => {
//   ...mapState(useCounterStore, ['doubleCount'])
// });

// const { finalCounter } = mapState(store, ['finalCounter']);

// const counter = computed(() => finalCounter.value);

</script>