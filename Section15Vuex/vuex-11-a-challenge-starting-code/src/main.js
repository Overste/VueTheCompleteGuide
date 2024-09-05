import { createApp } from 'vue';
import { createPinia } from 'pinia';

// import { mainStore } from './stores/index.js'
// import { cartStore } from './stores/cart.js';
// import { productsStore } from './stores/products.js';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';

const app = createApp(App)
const pinia = createPinia();


app.use(router);
app.use(pinia)
// app.use(mainStore)
// app.use(cartStore)
// app.use(productsStore)

app.component('base-badge', BaseBadge);

app.mount('#app');
