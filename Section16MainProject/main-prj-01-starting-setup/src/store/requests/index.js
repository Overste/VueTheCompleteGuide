import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

export const requestsStore = defineStore({
    id: 'requests',
    state() {
        return {
            requests: []
        };
    },
    getters: getters,
    actions: actions,
});