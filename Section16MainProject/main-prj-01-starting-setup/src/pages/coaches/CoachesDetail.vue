<template>
    <div>
        <section>
            <base-card>
                <h2>{{ fullName }}</h2>
                <h3>${{ rate }}/hour</h3>
            </base-card>
        </section>
        <section>
            <base-card>
                <h2>Interested? Reach out now!</h2>
                <base-button link :to="contactLink">Contact</base-button>
                <router-view></router-view>
            </base-card>
        </section>
        <section>
            <base-card>
                <base-badge v-for="area in areas" :key="area" :type="area" :title="area">{{ area }}</base-badge>
                <p>{{ description }}</p>
            </base-card>
        </section>
    </div>
</template>
<script setup>
import { onMounted, defineProps, computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { coachStore } from '../../store/coaches';

import BaseCard from '../../components/ui/BaseCard.vue'
import BaseButton from '../../components/ui/BaseButton.vue'
import BaseBadge from '../../components/ui/BaseBadge.vue';

const store = coachStore();
const route = useRoute();

const props = defineProps({
    id: String,
});

// Use a ref to hold the selectedCoach, so it is reactive.
const selectedCoach = ref(null);

// Fetch the coach data when the component is mounted.
onMounted(() => {
    selectedCoach.value = store.getCoaches.find(coach => coach.id === props.id);
});

// Compute properties based on the reactive selectedCoach ref.
const areas = computed(() => selectedCoach.value?.areas || []);
const rate = computed(() => selectedCoach.value?.hourlyRate || 0);
const description = computed(() => selectedCoach.value?.description || '');
const fullName = computed(() => {
    return selectedCoach.value ? `${selectedCoach.value.firstName} ${selectedCoach.value.lastName}` : '';
});
const contactLink = computed(() => `${route.path}/${props.id}/contact`);

</script>