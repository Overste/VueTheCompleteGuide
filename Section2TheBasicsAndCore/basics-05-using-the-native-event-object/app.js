const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullName: ''
    };
  },
  watch: {
    counter(countValue) {
      if (countValue > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);

        this.counter = 0;
      }
    }
    // name(name) {
    //   if (name === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = name + ' ' + 'Warbout';
    //   }
    // },
    // lastName(name) {
    //   if (name === '') {
    //     this.fullName = '';
    //   } else {
    //     this.fullName = this.name + ' ' + lastName;
    //   }
    // }   
  },
  computed: {
    fullName() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }

      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = '';
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
