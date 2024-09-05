<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3  :class="{ hidden: computedVisibility }">{{ courseGoal.title }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->

</template>
<script setup>
import { reactive, computed } from 'vue';

// const courseGoal = ref('Learning Vue!');
// const isVisible = ref(true)
const courseGoal = reactive({
	title: 'Learning Vue!',
	isVisible: true
});

// const computedVisibility = computed(() => !isVisible.value)
// const toggleVisibility = () => isVisible.value = !isVisible.value
const computedVisibility = computed(() => !courseGoal.isVisible);
const toggleVisibility = () => courseGoal.isVisible = !courseGoal.isVisible;

// export default {
//   data() {
//     return {
//       courseGoal: {
//         title: 'Learning Vue!',
//         isVisible: true
//       },
//       isCourseGoalVisible: true
//     }
//   },
//   methods: {
//     toggleCourseGoalVisibility() {
//       this.isCourseGoalVisible = !this.isCourseGoalVisible
//     }
//   }
// }
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
.hidden {
  display: none;
}
</style>