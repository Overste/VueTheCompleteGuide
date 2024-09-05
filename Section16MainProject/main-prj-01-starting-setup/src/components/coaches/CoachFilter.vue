<template>
    <base-card>
        <h2>Find Your Coach</h2>
        <span class="filter-options">
            <input type="checkbox" name="frontend" id="frontend" checked @change="setFilter" />
            <label for="frontend">Frontend</label>
        </span>
        <span class="filter-options">
            <input type="checkbox" name="backend" id="backend" checked @change="setFilter" />
            <label for="backend">Backend</label>
        </span>
        <span class="filter-options">
            <input type="checkbox" name="career" id="career" checked @change="setFilter" />
            <label for="career">Career</label>
        </span>
    </base-card>
</template>
<script setup>
import BaseCard from '../ui/BaseCard.vue'

import { defineEmits } from 'vue';

// Destructure the emit function from the setup context
const emit = defineEmits(['change-filter']);

let filters = {
    frontend: true,
    backend: true,
    career: true
}

function setFilter(event) {
    const inputId = event.target.id;
    const isActive = event.target.checked;
    const updatedFilters = {
        ...filters,
        [inputId]: isActive
    }

    filters = updatedFilters; // make immutable (state)
    emit('change-filter', updatedFilters); // use emit to send the event
}
</script>
<style lang="css" scoped>
h2 {
    margin: 0.5rem 0;
}

.filter-option {
    margin-right: 1rem;
}

.filter-option label,
.filter-option input {
    vertical-align: middle;
}

.filter-option label {
    margin-left: 0.25rem;
}

.filter-option.active label {
    font-weight: bold;
}
</style>