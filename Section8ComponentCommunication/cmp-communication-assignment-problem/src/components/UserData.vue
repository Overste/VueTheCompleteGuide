<template>
    <form @submit.prevent="submitUser">
        <div>
            <label for="name">Name</label>
            <input v-model="user.name" type="text" name="name" id="name">
        </div>
        <div>
            <label for="age">Age</label>
            <input v-model.number="user.age" type="number" name="age" id="age">
        </div>
        <button type="submit">Submit user</button>
    </form>
</template>
<script>
    export default {
        emits: {
            'add-user': (params) => {
                const isEmptyString = this.isEmpty(params.name);
                const isAgeZero = this.isEmpty(params.age);

                if (!isEmptyString && !isAgeZero) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        data() {
            return {
                user: {
                    name: '',
                    age: null
                }
            }
        },
        methods: {
            submitUser() {
                this.$emit('add-user', this.user);
            },
            isEmpty(value) {
                return (value == null || (typeof value === "string" && value.trim().length === 0));
            }
        },
    }
</script>