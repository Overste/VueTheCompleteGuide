<template>
    <div>
        <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
            <p>{{ error }}</p>
        </base-dialog>
        <section>
            <base-card>
                <header>
                    <h2>Requests Received</h2>
                </header>
                <base-spinner v-if="requests.isLoading"></base-spinner>
                <ul v-else-if="hasRequests && !requests.isLoading">
                    <request-item v-for="req in receivedRequests" :key="req.id" :email="req.userEmail"
                        :message="req.message"></request-item>
                </ul>
                <h3 v-else>You haven't received any requests yet!</h3>
            </base-card>
        </section>
    </div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import { requestsStore } from '../../store/requests';

import BaseCard from '../../components/ui/BaseCard.vue';
import RequestItem from '../../components/requests/RequestItem.vue';
import BaseDialog from '../../components/ui/BaseDialog.vue';

const store = requestsStore();

const requests = ref({
    isLoading: false,
    error: null,
})

const receivedRequests = computed(() => store.getRequests);
const hasRequests = computed(() => {
    console.log(store.hasRequests);
    
    return store.hasRequests
});

onMounted(async () => await loadRequests());

const loadRequests = async() => {
    requests.value.isLoading = true;
    try {
        await store.fetchRequests(store);
    } catch (error) {
        requests.value.error = error.message || 'Something failed!';
    }
    requests.value.isLoading = false;
}

function handleError() {
    requests.value.error = null;
}
</script>

<style scoped>
header {
    text-align: center;
}

ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
}

h3 {
    text-align: center;
}
</style>