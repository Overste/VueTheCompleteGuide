<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" name="goal" id="goal" ref="goal">
        <button @click="setGoal">Set Goal</button>
        <teleport to='body' >
            <error-alert v-if="inputIsInvalid">
                <h2>Input is Invalid</h2>
                <p>Please enter at least a few characters...</p>
            </error-alert>
        </teleport>
    </div>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        'error-alert': ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false,
        }
    },
    methods: {
        setGoal() {
            const goal = this.$refs.goal.value;
            if (goal === '') {
                this.inputIsInvalid = true;
            }
        }
    }
}
</script>