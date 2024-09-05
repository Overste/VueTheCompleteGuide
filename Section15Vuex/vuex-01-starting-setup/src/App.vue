<template>
  <base-container title="Pinia" v-if="isAuth">
    <favorite-value></favorite-value>
    <the-counter></the-counter>
    <button @click="incrementCount">Add 1</button>
    <change-counter> </change-counter>
    <!-- <button @click="store.increment">Add 1</button> -->
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script setup>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { useStore } from './main.js';

import { storeToRefs } from 'pinia'
import { computed } from 'vue';
// access the `store` variable anywhere in the component
const store = useStore();
const { userIsAuthenticated } = storeToRefs(store)

const incrementCount = store.increment;
const isAuth = computed(() => userIsAuthenticated.value);
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>