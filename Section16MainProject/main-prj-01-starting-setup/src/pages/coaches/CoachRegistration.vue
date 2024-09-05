<template>
    <section>
        <base-card>
            <h2>Register as a Coach Now!</h2>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>
<script setup>
import CoachForm from '../../components/coaches/CoachForm.vue';
import BaseCard from '../../components/ui/BaseCard.vue'

import { coachStore } from '../../store/coaches';

import { useRouter } from 'vue-router';

const store = coachStore();
const router = useRouter();

const saveData = (data) => {
    store.registerCoach(store, data);
    router.replace({ path: '/coaches' })
}

</script>
