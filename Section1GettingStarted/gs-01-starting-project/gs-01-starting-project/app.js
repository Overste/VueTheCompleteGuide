Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
}).mount("#app");

// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const ul = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = input.value
//     const listItem = document.createElement('li');
//     listItem.textContent = enteredValue;
//     ul.appendChild(listItem);

//     input.value = '';
// }

// button.addEventListener('click', addGoal);