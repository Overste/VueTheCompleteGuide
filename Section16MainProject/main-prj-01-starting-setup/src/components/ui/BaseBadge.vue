<template>
    <span class="badge" :class="type">
        {{ text }}
    </span>
</template>
<script setup>
import { defineProps, computed } from 'vue';

// Define props using the `defineProps` function
const props = defineProps({
    type: String,
    title: String
});

const text = computed(() => props.title.toUpperCase());
</script>
<style scoped>
.badge {
    background-color: #ccc;
    color: #252525;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
}

.frontend {
    background-color: #3d008d;
    color: white;
}

.backend {
    background-color: #71008d;
    color: white;
}

.career {
    background-color: #8d006e;
    color: white;
}
</style>