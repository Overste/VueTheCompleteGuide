<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !form.firstName.isInvalid }">
            <label for="firstName">Firstname</label>
            <input type="text" name="firstName" id="firstName" v-model.trim="form.firstName.val"
                @blur="clearValidity('firstName')">
            <p v-if="!form.firstName.isInvalid">Firstname must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !form.lastName.isInvalid }">
            <label for="lastName">Lastname</label>
            <input type="text" name="lastName" id="lastName" v-model.trim="form.lastName.val"
                @blur="clearValidity('lastName')">
            <p v-if="!form.lastName.isInvalid">Lastname must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !form.description.isInvalid }">
            <label for="description">Description</label>
            <textarea name="description" id="description" rows="5" v-model.trim="form.description.val"
                @blur="clearValidity('description')"></textarea>
            <p v-if="!form.description.isInvalid">Description must not be empty</p>
        </div>
        <div class="form-control" :class="{ invalid: !form.rate.isInvalid }">
            <label for="rate">Hourly Rate</label>
            <input type="number" name="rate" id="rate" v-model.number="form.rate.val" @blur="clearValidity('rate')">
            <p v-if="!form.rate.isInvalid">Hourly Rate must not be empty and more than 0</p>
        </div>
        <div class="form-control" :class="{ invalid: !form.areas.isInvalid }">
            <h3>Areas of Expertise</h3>
            <div>
                <input type="checkbox" name="frontend" id="frontend" value="frontend" v-model="form.areas.val"
                    @blur="clearValidity('areas')">
                <label for="frontend">Frontend Development</label>
            </div>
            <div>
                <input type="checkbox" name="backend" id="backend" value="backend" v-model="form.areas.val"
                    @blur="clearValidity('areas')">
                <label for="backend">Backend Development</label>
            </div>
            <div>
                <input type="checkbox" name="career" id="career" value="career" v-model="form.areas.val"
                    @blur="clearValidity('areas')">
                <label for="career">Career Development</label>
            </div>
            <p v-if="!form.areas.isInvalid">Expertise area must not be empty</p>
        </div>
        <p v-if="!form.isInvalid">Please fix the above errors and submit again</p>
        <base-button>Register</base-button>
    </form>
</template>
<script setup>
import BaseButton from '../ui/BaseButton.vue'

import { ref, defineEmits } from 'vue';

const form = ref({
    firstName: {
        val: '',
        isInvalid: true
    },
    lastName: {
        val: '',
        isInvalid: true
    },
    description: {
        val: '',
        isInvalid: true
    },
    rate: {
        val: null,
        isInvalid: true
    },
    areas: {
        val: [],
        isInvalid: true
    },
    isValid: false,
});

const emit = defineEmits(['save-data']);

const submitForm = () => {
    validateForm();

    if (!form.value.isValid) {
        return
    }

    const formData = {
        first: form.value.firstName.val,
        last: form.value.lastName.val,
        desc: form.value.description.val,
        rate: form.value.rate.val,
        areas: form.value.areas.val
        // areas: toRaw(form.value.areas)

    }
    console.log(formData);
    emit('save-data', formData);
}

const validateForm = () => {
    form.value.isValid = true;

    if (form.value.firstName.val === '') {
        form.value.firstName.isInvalid = false
        form.value.formIsValid = false;
    }

    if (form.value.lastName.val === '') {
        form.value.lastName.isInvalid = false
        form.value.formIsValid = false;
    }

    if (form.value.description.val === '') {
        form.value.description.isInvalid = false
        form.value.formIsValid = false;
    }

    if (form.value.rate.val <= 0) {
        form.value.rate.isInvalid = false
        form.value.formIsValid = false;
    }

    if (form.value.areas.val.length === 0) {
        form.value.areas.isInvalid = false
        form.value.formIsValid = false;
    }
}

const clearValidity = (inputName) => {
    const input = form.value[inputName];
    input.isInvalid = true; 
}
</script>
<style lang="css" scoped>
.form-control {
    margin: 0.5rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input[type='checkbox']+label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
}

input:focus,
textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
}

input[type='checkbox'] {
    display: inline;
    width: auto;
    border: none;
}

input[type='checkbox']:focus {
    outline: #3d008d solid 1px;
}

h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
}

.invalid label {
    color: red;
}

.invalid input,
.invalid textarea {
    border: 1px solid red;
}
</style>