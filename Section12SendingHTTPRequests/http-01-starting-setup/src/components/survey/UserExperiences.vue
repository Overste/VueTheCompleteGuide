<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>
			<div>
				<base-button @click="loadExperience">Load Submitted Experiences</base-button>
			</div>
			<p v-if="isLoading">Loading...</p>
			<p v-else-if="hasErrorAndIsNotLoading">{{ error }}</p>
			<p v-else-if="!hasResultsAndIsNotLoading">No Stored Experiences found. Start adding Experiences</p>
			<ul v-else-if="hasResultsAndIsNotLoading">				
				<survey-result v-for="result in results" :key="result.id" :name="result.name"
					:rating="result.rating"></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
	// props: ['results'],
	components: {
		SurveyResult,
	},
	data() {
		return {
			results: [],
			isLoading: false,
			error: null
		}
	},
	computed: {
		hasResultsAndIsNotLoading() {
			return !this.isLoading && this.results && this.results.length > 0;
		},
		hasErrorAndIsNotLoading() {
			return !this.isLoading && this.error;
		}
	},
	methods: {
		loadExperience() {
			this.isLoading = true;

			fetch('https://vue-http-demo-2c555-default-rtdb.europe-west1.firebasedatabase.app/surveys.json')
				.then((response) => {
					if (response.ok) {
						return response.json()
					}
				}).then((data) => {
					const results = [];

					Object.entries(data).forEach(([id, result]) => {
						results.push({
							id: id,
							name: result.name,
							rating: result.rating
						});
					});

					console.log("results", results);

					this.results = results;
				}).catch((error) => {
					console.error(error);
					this.error = error.message;
				}).finally(() => {
					this.isLoading = false;
				})
		}
	},
	mounted() {
		this.loadExperience();
	}
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>