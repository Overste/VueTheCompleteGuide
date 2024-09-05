<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>

<script setup>
    import { computed } from 'vue';
    import { useStore } from '../main.js';
    import { storeToRefs } from 'pinia'

    const store = useStore(); // Use the store
    const { userIsAuthenticated } = storeToRefs(store)

    const login = store.login;
    const logout = store.logout;

    const isAuth = computed(() => userIsAuthenticated.value);
</script>
<style scoped>
</style>