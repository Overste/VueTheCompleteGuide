<template>
    <div>
        <base-dialog :show="!!coachesList.error" title="An error occurred!" @close="handleError">
			<p>{{ error }}</p>
		</base-dialog>
        <section>
            <coach-filter @change-filter="setFilters"></coach-filter>
        </section>
        <section>
            <base-card>
                <div class="controls">
                    <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
                    <!-- <router-link to="/register">Register a Coach</router-link> -->
                    <base-button v-if="!isCoach && !coachesList.isLoading" link to="/register">Register a
                        Coach</base-button>
                </div>
                <div v-if="coachesList.isLoading">
                    <base-spinner></base-spinner>
                </div>
                <ul v-else-if="hasCoaches">
                    <!-- <li v-for="coach in filteredCoaches" :key="coach.id">
                {{  coach.firstName }}
            </li> -->
                    <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id"
                        :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate"
                        :areas="coach.areas"></coach-item>
                </ul>
                <h3 v-else>No Coaches Found!</h3>
            </base-card>
        </section>
    </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';

// import { baseStore } from '../../store';
import { coachStore } from '../../store/coaches';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseCard from '../../components/ui/BaseCard.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

// Initialize the store
const store = coachStore();

const isCoach = computed(() => store.isCoach);
const hasCoaches = computed(() => !coachesList.value.isLoading && store.hasCoaches);

// Using store getters and methods
// const isCoach = computed(() => {    
//   const coaches = store.getCoaches; // Access getter directly
//   const userId = userStore.getUserId; // Access getter directly
//   return coaches.some(coach => coach.id === userId);
// });

const filteredCoaches = computed(() => {
    return store.getCoaches.filter(coach => {
        if (coachesList.value.activeFilters.frontend && coach.areas.includes('frontend')) return true;
        if (coachesList.value.activeFilters.backend && coach.areas.includes('backend')) return true;
        if (coachesList.value.activeFilters.career && coach.areas.includes('career')) return true;

        // Return false if none of the conditions are met
        return false;
    });
});

// const activeFilters = ref({
//     frontend: true,
//     backend: true,
//     career: true
// });

const coachesList = ref({
    isLoading: false,
    error: null,
    activeFilters: {
        frontend: true,
        backend: true,
        career: true,
    },
})

const setFilters = (updatedFilters) => coachesList.value.activeFilters = updatedFilters;
const loadCoaches = async (refresh = false) => {
    coachesList.value.isLoading = true;
    try {
        await store.loadCoaches(store, refresh)
    } catch (error) {
        coachesList.value.error = error.message || 'Something went wrong!';
    }
    coachesList.value.isLoading = false;
}

// const loadCoaches = async () => await store.loadCoaches(store, null);

onMounted(() => {
    loadCoaches()
});
</script>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.controls {
    display: flex;
    justify-content: space-between;
}
</style>