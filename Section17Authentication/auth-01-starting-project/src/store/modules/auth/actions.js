let timer;

export default {
    async login(state, data) {
        return state.dispatch('auth', {
            ...data,
            mode: 'login'
        });
    },
    async signup(state, data) {
        return state.dispatch('auth', {
            ...data,
            mode: 'signup'
        });
    },
    async auth(state, data) {
        const mode = data.mode;
        let url =
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByhzt3bpS6lAKG0PrUM3_-UbGO8oEeZC0';

        if (mode === 'signup') {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByhzt3bpS6lAKG0PrUM3_-UbGO8oEeZC0';
        }
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: data.email,
                password: data.password,
                returnSecureToken: true
            })
        });

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(
                responseData.message || 'Failed to authenticate. Check your login data.'
            );
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function () {
            state.dispatch('autoLogout');
        }, expiresIn);

        state.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });
    },
    tryLogin(state) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        const expiresIn = +tokenExpiration - new Date().getTime();

        if (expiresIn < 0) {
            return;
        }

        timer = setTimeout(function () {
            state.dispatch('autoLogout');
        }, expiresIn);

        if (token && userId) {
            state.commit('setUser', {
                token: token,
                userId: userId
            });
        }
    },
    logout(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);

        state.commit('setUser', {
            token: null,
            userId: null
        });
    },
    autoLogout(state) {
        state.dispatch('logout');
        state.commit('setAutoLogout');
    }
};
