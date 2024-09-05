<template>
  <li>
    <div>
      <img :src="props.image" :alt="props.title" />
    </div>
    <div>
      <h3>{{ props.title }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>${{ props.price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ props.qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<!-- <script>
export default {
  inject: ['removeProductFromCart'],
  props: ['prodId', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    }
  },
  methods: {
    remove() {
      this.removeProductFromCart(this.prodId);
    }
  }
};
</script> -->
<script setup>
import { defineProps, computed } from 'vue';
import { cartStore } from '../../stores/cart';

// Define props using the `defineProps` function
const props = defineProps({
  prodId: String,
  title: String,
  image: String,
  price: Number,
  qty: Number, // Change to Number, since qty is typically a number
});

// Initialize the store
const store = cartStore();

// Computed property to calculate item total
const itemTotal = computed(() => (props.price * props.qty).toFixed(2));

// Method to remove an item from the cart
function remove() {
  store.removeProductFromCart(props.prodId);
}
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>