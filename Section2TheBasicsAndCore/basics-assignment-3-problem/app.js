const app = Vue.createApp({
    data() {
        return {
            timeoutId: null,
            targetValue: 37,
            result: 0,
        }
    },
    computed: {
        displayResults() {
            if (this.result < this.targetValue) {
                return 'Not there yet'
            } else if (this.result > 37) {
                return 'Too much!';
            } else {
                return this.result;
            }
        }
    },
    watch: {
        result() {
            const that = this;
            clearTimeout(that.timeoutId);

            that.timeoutId = setTimeout(() => {
                this.result = 0;
            }, 5000);
        }
    },
    methods: {
        increaseByFive() {
            this.result = this.result + 5;
            console.log(this.result);
        },
        increaseByOne() {
            this.result++;
            console.log(this.result);
        }
    },
});
app.mount('#assignment')