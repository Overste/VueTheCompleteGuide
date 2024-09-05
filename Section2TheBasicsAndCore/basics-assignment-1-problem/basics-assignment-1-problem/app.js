const app = Vue.createApp({
    data() {
        return {
            name: "Thomas",
            age: 32,
            ageInFiveYears: (this.age + 5),
            placeholder: "Enter some text here",
            link: "https://media.1815.io/topgear/i/width=892&height=502/2021/07/singer-dls.jpg"
        }
    },
    methods: {
        getAgeInFiveYears() { // Added a new method to calculate age in five years
            return this.age + 5;
        },
        randomNumber() {
            const randomNumber = Math.random();
            return randomNumber > 0.5 ? 1 : 0;
        }
    },
});

app.mount("#assignment")

