<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ rate }}/hour</h4>
        <div>
            <!-- <span v-for="area in areas" :key="area">{{ area }}</span> -->

            <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</base-badge>
        </div>
        <div class="actions">
            <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailLink">View Details</base-button>
        </div>
    </li>
</template>
<script setup>
import { defineProps, computed } from 'vue';

import BaseBadge from '../ui/BaseBadge.vue';
import BaseButton from '../ui/BaseButton.vue'

// Define props using the `defineProps` function
const props = defineProps({
    id: String,
    firstName: String,
    lastName: String,
    rate: Number,
    areas: Array,
});

const fullName = computed(() => (props.firstName + ' ' + props.lastName));
const coachContactLink = computed(() => ('/coaches/' + props.id + '/contact'));
const coachDetailLink = computed(() => ('/coaches/' + props.id));
</script>
<style lang="css" scoped>
li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
}

h3 {
    font-size: 1.5rem;
}

h3,
h4 {
    margin: 0.5rem 0;
}

div {
    margin: 0.5rem 0;
}

.actions {
    display: flex;
    justify-content: flex-end;
}
</style>