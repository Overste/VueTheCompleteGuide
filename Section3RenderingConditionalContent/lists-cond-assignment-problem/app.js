const app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            isVisible: true
        }
    },
    computed: {
        hasTasks() {
            return this.tasks.length > 0;
        },
        toggleVisibilityBtnText() {
            return this.isVisible && this.hasTasks ? 'Hide' : 'Show List';
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
        },
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
});

app.mount("#assignment");