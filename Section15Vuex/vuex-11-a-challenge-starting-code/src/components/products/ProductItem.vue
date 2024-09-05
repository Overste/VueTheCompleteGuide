<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ props.title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ props.price }}</h4>
        </base-badge>
        <p>{{ props.description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<!-- <script>
export default {
  // inject: ['addProductToCart'],
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.addProductToCart({
        id: this.id,
        image: this.image,
        title: this.title,
        price: this.price,
      });
    },
  },
};
</script> -->

<script setup>
import { defineProps } from 'vue';

// import { storeToRefs } from 'pinia';
import { cartStore } from '../../stores/cart';

// Initialize the store and extract the needed refs
const store = cartStore();
// const { addProductToCart } = storeToRefs(store);
// const addProduct = addProductToCart

// Define props using the `defineProps` function
const props = defineProps({
  id: String,
  image: String,
  title: String,
  price: Number,
  description: String,
});

function addToCart() {
  console.log("Add to cart");
  
  store.addProductToCart({
    id: props.id,
    image: props.image,
    title: props.title,
    price: props.price,
  })
}
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>