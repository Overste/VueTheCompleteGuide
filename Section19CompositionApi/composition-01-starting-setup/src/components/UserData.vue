<template>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
</template>
<script setup>
import { defineProps, computed, inject, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

onBeforeMount(() => console.log("onBeforeMount"));
onMounted(() => console.log("onMounted"));
onBeforeUpdate(() => console.log("onBeforeUpdate"));
onUpdated(() => console.log("onUpdated"));
onBeforeUnmount(() => console.log("onBeforeUnmount"));
onUnmounted(() => console.log("onUnmounted"));

// const props = defineProps(['firstName', 'lastName', 'age'])
const props = defineProps(['firstName', 'lastName'])
const fullName = computed(() => props.firstName + ' ' + props.lastName);
const age = inject('age');
</script>