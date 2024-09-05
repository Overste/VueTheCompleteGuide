const app = Vue.createApp({
  data() {
    return {
      name: "",
      confirmedName: '',
      counter: 0,
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submit form');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(number) {
      this.counter = counter + number
    },
    subtract(number) {
      this.counter = this.counter - number;
    }
  }
});

app.mount('#events');
