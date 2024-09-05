const app = Vue.createApp({
    data() {
        return {
            inputOutput: "",
            confirmedInput: ""
        }
    },
    methods: {
        alertClick() {
            alert("Button Alert");
        },
        inputOutputKeyDown(event) {
            this.inputOutput = event.target.value;
        },
        inputOutputEnterKeyDown() {
            this.confirmedInput = this.inputOutput;
        }
    }
});

app.mount("#assignment")