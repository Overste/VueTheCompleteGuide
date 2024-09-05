import { baseStore } from "..";

export default {
    getUserId() {
        const store = baseStore();
        return store.getUserId;
    },
    getRequests(state) {
        // return state.requests;
        const coachId = state.getUserId;
        console.log(state.requests);
        
        return state.requests.filter(req => req.coachId === coachId);
    },
    hasRequests(state) {
        // return state.requests && state.requests.length > 0;
        console.log(state);
        console.log(state.requests);
        console.log(state.getRequests);
        console.log(state.getUserId);
        console.log(state.getRequests && state.getRequests.length > 0);
        
        
        return state.getRequests && state.getRequests.length > 0;
    }
};