<template>
	<section>
		<h2>{{ title }}</h2>
		<h3>${{ price }}</h3>
		<p>{{ description }}</p>
		<router-link to="/products/p2">Product 2</router-link>
	</section>
</template>

<script setup>
// import { computed, defineProps, inject, useRoute } from 'vue';
import { computed, inject, useRoute } from 'vue';

const route = useRoute();

// const pid = defineProps(['pid']);

const products = inject('products');
const selectedProduct = computed(() => products.value.find(product => product.id === route.params.pid));
const title = computed(() => selectedProduct.value.title);
const price = computed(() => selectedProduct.value.price);
const description = computed(() => selectedProduct.value.description);

// const title = ref('');
// const price = ref(null);
// const description = ref('');
</script>


<style scoped>
section {
	margin: 3rem auto;
	max-width: 40rem;
	padding: 1rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>