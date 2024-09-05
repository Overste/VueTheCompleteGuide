const app = Vue.createApp({
    data() {
        return {
            areDetailsVisible: false,
            friends: [
                {
                    id: 'Manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'Julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                }
            ]
        }
    },
    computed: {
        toggleDetailBtnText() {
            return this.areDetailsVisible ? 'Hide' : 'Show';
        }
    },
    methods: {
        toggleDetails() {
            this.areDetailsVisible = !this.areDetailsVisible;
        }
    },
})

app.component('friend-contact', {
    template: `
    <li v-for="friend in friends" ::key="friend.id">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails">{{toggleDetailBtnText}} Details</button>
        <ul v-if="areDetailsVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'Manuel',
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com'
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible =!this.detailsAreVisible;
        }
    },
})

app.mount('#app');