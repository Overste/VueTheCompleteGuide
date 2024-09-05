import { createApp } from 'vue';
import { createPinia, defineStore } from 'pinia';

import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
// export const useStore = defineStore('store', {
//     state: () => ({ count: 0}),
// });

export const useStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        isLoggedIn: false
    }),
    getters: {
        finalCounter: (state) => state.count * 3,
        normalizedCounter() {
            const finalCounter = this.finalCounter
            if (finalCounter < 0) {
                return 0
            }
            if (finalCounter > 100) {
                return 100
            }

            return finalCounter
        },
        userIsAuthenticated() {
            return this.isLoggedIn;
        }
    },
    // mutations???
    actions: {
        async increment() {
            setTimeout(() => this.count++, 2000);
        },
        increase(value) {
            console.log("called");
            console.log("count", this.count);
            
            this.count = this.count + value;
        },
        setAuth(payload) {
            this.isLoggedIn = payload.isAuth;
        },
        login() {
            console.log("click");
            
            this.setAuth({isAuth: true});
        },
        logout() {
            this.setAuth({isAuth: false});
        }
    }
});


app.use(pinia);
app.mount('#app');
