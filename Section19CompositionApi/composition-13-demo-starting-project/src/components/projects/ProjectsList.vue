<template>
	<base-container v-if="props.user">
		<h2>{{ props.user.fullName }}: Projects</h2>
		<base-search v-if="hasProjects" @search="updateSearch" :search-term="enteredSearchTerm"></base-search>
		<ul v-if="hasProjects">
			<project-item v-for="prj in availableProjects" :key="prj.id" :title="prj.title"></project-item>
		</ul>
		<h3 v-else>No projects found.</h3>
	</base-container>
	<base-container v-else>
		<h3>No user selected.</h3>
	</base-container>
</template>

<script setup>
import { computed, defineProps, reactive, watch, toRefs } from 'vue';

import ProjectItem from './ProjectItem.vue'

const props = defineProps(['user']);

// Debugging output
console.log('User:', props.user);

const searchState = reactive({
	enteredSearchTerm: '',
	activeSearchTerm: '',
});

console.log(props);
console.log(props.user);

// const hasProjects = computed(() => props.user.projects && searchState.availableProjects.length > 0);
const hasProjects = computed(() => props.user && props.user.projects && props.user.projects.length > 0);
const availableProjects = computed(() => {
	if (searchState.activeSearchTerm) {
		return props.user.projects.filter((prj) =>
			prj.title.includes(searchState.activeSearchTerm)
		);
	}
	return props.user.projects;
});

function updateSearch(val) {
	searchState.enteredSearchTerm = val;
}

const enteredSearchTerm = computed(() => searchState.enteredSearchTerm)

watch(enteredSearchTerm, (newValue) => {
	setTimeout(() => {
		if (newValue === searchState.enteredSearchTerm) {
			searchState.activeSearchTerm = newValue;
		}
	}, 300);
});

const user = toRefs(props);

watch(user, () => {
	searchState.enteredSearchTerm = '';
});

// export default {
// 	components: {
// 		ProjectItem,
// 	},
// 	props: ['user'],
// 	data() {
// 		return {
// 			enteredSearchTerm: '',
// 			activeSearchTerm: '',
// 		};
// 	},
// 	computed: {
// 		hasProjects() {
// 			return this.user.projects && this.availableProjects.length > 0;
// 		},
// 		availableProjects() {
// 			if (this.activeSearchTerm) {
// 				return this.user.projects.filter((prj) =>
// 					prj.title.includes(this.activeSearchTerm)
// 				);
// 			}
// 			return this.user.projects;
// 		},
// 	},
// 	methods: {
// 		updateSearch(val) {
// 			this.enteredSearchTerm = val;
// 		},
// 	},
// 	watch: {
// 		enteredSearchTerm(val) {
// 			setTimeout(() => {
// 				if (val === this.enteredSearchTerm) {
// 					this.activeSearchTerm = val;
// 				}
// 			}, 300);
// 		},
// 		user() {
// 			this.enteredSearchTerm = '';
// 		},
// 	},
// };
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>