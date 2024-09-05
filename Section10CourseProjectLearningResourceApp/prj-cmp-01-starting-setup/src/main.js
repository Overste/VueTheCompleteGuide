import { createApp } from 'vue';
// import the root component App from a single-file component
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

/**
 * We use PascalCase for component tags when possible because it improves template readability 
 * by differentiating Vue components from native elements.
 */

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
