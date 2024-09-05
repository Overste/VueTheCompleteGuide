export default {
    setCoaches(state, data) {
        state.coaches = data;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    },
    mapRegisterCoach(data) {
        return {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
    },
    async registerCoach(state, data) {
        const coachData = this.mapRegisterCoach(data);
        const userId = state.getUserId;

        const response = await fetch(
            // `https://vue-http-demo-85e9e.firebaseio.com/coaches/${userId}.json`,
            `https://vue-http-demo-b59fb-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`,
            {
                method: 'PUT',
                body: JSON.stringify(coachData)
            }
        );

        // const responseData = await response.json();

        if (!response.ok) {
            // error ...
        }

        // state.registerCoach(this, {
        //     ...coachData,
        //     id: coachData.id
        // });

        this.coaches.push({
            ...coachData,
            id: userId
        });

        // state.coaches.push(coachData);
    },
    async loadCoaches(state, data) {
        if (!data.forceRefresh && !state.shouldUpdate) {
            return;
        }

        console.log(data);
        

        const response = await fetch(
            // `https://vue-http-demo-85e9e.firebaseio.com/coaches.json`
            `https://vue-http-demo-b59fb-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`,

        );
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            coaches.push(coach);
        }

        console.log(coaches);
        

        // context.commit('setCoaches', coaches);
        // context.commit('setFetchTimestamp');
        state.setCoaches(state, coaches);
        state.setFetchTimestamp(state)
    }
};
