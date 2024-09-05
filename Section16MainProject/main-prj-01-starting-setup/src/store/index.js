import { defineStore } from 'pinia';

export const baseStore = defineStore({
    id: 'base',
    state() {
        return {
            userId: 'c3'
        }
    },
    getters: {
        getUserId(state) {
            console.log(state);
            
            return state.userId;
        }
    }
});