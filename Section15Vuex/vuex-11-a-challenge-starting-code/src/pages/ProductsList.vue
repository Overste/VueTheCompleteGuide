<template>
  <section>
    <ul>
      <product-item v-for="prod in products" :key="prod.id" :id="prod.id" :title="prod.title" :image="prod.image"
        :description="prod.description" :price="prod.price"></product-item>
    </ul>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { productsStore } from '../stores/products';
import ProductItem from '../components/products/ProductItem.vue'; // Import the component

// Initialize the store and extract the needed refs
const store = productsStore();
const { getProducts } = storeToRefs(store);

// Make the products available to the template
// const products = getProducts;
const products = computed(() => getProducts.value);
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>