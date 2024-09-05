import { baseStore } from "..";

export default {
    getCoaches(state) {        
        return state.coaches
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0
    },
    getUserId() {
        const store = baseStore();
        return store.getUserId;
    },
    isCoach(state) {
        const coaches = state.getCoaches;
        const userId = state.getUserId;
        return coaches.some(coach => coach.id === userId);
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;
        if (!lastFetch) {
          return true;
        }
        const currentTimeStamp = new Date().getTime();
        return (currentTimeStamp - lastFetch) / 1000 > 60;
      }
}