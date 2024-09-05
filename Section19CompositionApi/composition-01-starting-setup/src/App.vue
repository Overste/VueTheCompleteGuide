<template>
  <section class="container">
    <!-- <user-data :firstName="firstName" :lastName="lastName" :age="age"></user-data> -->
    <user-data :firstName="firstName" :lastName="lastName"></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <!-- <input type="text" name="firstName" id="firstName" @input="setFirstName" />
      <input type="text" name="lastName" id="lastName" @input="setLastName" /> -->
      <input type="text" name="firstName" id="firstName" v-model="firstName" />
      <!-- <input type="text" name="lastName" id="lastName" v-model="lastName" /> -->
      <input type="text" name="lastName" id="lastName" ref="lastNameInput" />
    </div>
    <button @click="setLastName">Set Last Name</button>
  </section>

</template>

<script setup>
import { reactive, ref, isReactive, isRef, toRefs, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
// 

const name = ref('Thomas'); 
const age = ref(33); 
const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);
// const user = ref({
//   name: 'Thomas',
//   age: 33
// })

provide('age', age)

const user = reactive({
  name: 'Thomas',
  age: 33
})
const userRefs = toRefs(user);

console.log(isRef(name));
console.log(isRef(age));
console.log(isReactive(user));
console.log(userRefs);

// const setNewAge = () => user.age = 25;
const setNewAge = () => age.value = 25;
// const setFirstName = (event) => firstName.value = event.target.value;
// const setLastName = (event) => lastName.value = event.target.value;
const setLastName = () => lastName.value = lastNameInput.value.value;

const fullName = computed(() => firstName.value + ' ' + lastName.value);

watch([age, fullName], (newValues, oldValues) => {
  console.log("Old age: " + oldValues[0]);
  console.log("Old age: " + newValues[0]);
  console.log("Old age: " + oldValues[1]);
  console.log("Old age: " + newValues[1]);
});

// setTimeout(() => {
//   // user.value.name = "Thomas Warbout";
//   // user.value.age = 25
//   user.name = "Thomas Warbout";
//   user.age = 25
// }, 2000)

// export default {
//   data() {
//     return {
//       userName: 'Maximilian',
//     };
//   },
// };
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>