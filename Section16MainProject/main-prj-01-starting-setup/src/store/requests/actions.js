export default {
    addRequest(state, data) {
        state.requests.push(data);
    },
    setRequests(state, requests) {
        state.requests = requests;
    },

    async contactCoach(state, data) {    
        const newRequest = {
            userEmail: data.email,
            message: data.message
        };
        const response = await fetch(`https://vue-http-demo-b59fb-default-rtdb.europe-west1.firebasedatabase.app/requests/${data.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.');
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = data.coachId;

        state.addRequest(state, newRequest);
    },
    async fetchRequests(state) {
        console.log("fetchRequests");
        
        const coachId = state.getUserId;
        // const response = await fetch(`https://vue-http-demo-85e9e.firebaseio.com/requests/${coachId}.json`);
        const response = await fetch(`https://vue-http-demo-b59fb-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
        console.log(response);
        
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests.');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };
            requests.push(request);
        }

        state.setRequests(state, requests);
        // context.commit('setRequests', requests);
    }
};