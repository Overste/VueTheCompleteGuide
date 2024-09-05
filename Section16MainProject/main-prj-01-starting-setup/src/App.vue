<template>
	<the-header></the-header>
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/layouts/TheHeader.vue';

</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
	box-sizing: border-box;
}

html {
	font-family: "Roboto", sans-serif;
}

body {
	margin: 0;
}
</style>
