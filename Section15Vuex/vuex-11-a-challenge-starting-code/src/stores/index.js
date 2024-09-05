import { defineStore } from 'pinia';

export const mainStore = defineStore({
  id: 'main',
  state: () => ({
    isLoggedIn: false,
  }),
  getters: {
    // Renaming the getter to avoid conflict with the state property
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  }
});
