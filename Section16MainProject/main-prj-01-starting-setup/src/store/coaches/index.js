import { defineStore } from 'pinia';
import state from './state';
import getters from './getters';
import actions from './actions';

export const coachStore = defineStore({
    id: 'coach',
    state: () => state(),
    getters: getters,
    actions: actions,
});