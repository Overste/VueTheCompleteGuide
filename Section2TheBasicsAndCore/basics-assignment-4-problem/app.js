const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            isVisible: true,
            backgroundColorStyle: '',
        }
    },
    computed: {
        paragraphClasses() {
            return this.inputClass.toLowerCase() === 'user1' || 'user2' ? this.inputClass : '';
        },
        toggleVisibilityClasses(){
            return this.isVisible ? 'visible' : 'hidden';
        }
    },
    methods: {
        toggleVisibility() {
            this.isVisible = !this.isVisible;
        }
    },
});

app.mount("#assignment");