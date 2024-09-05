const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
      console.log(this.$refs.userText.value);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  unmounted() {
    console.log("unmounted()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmounted;
}, 3000);

// const data = {
//     message:  'Hello',
//     longMessage: 'Hello World!'
// };

// const handler = {
//   set(target, key, value) {
//     console.log(target);
//     console.log(key);
//     console.log(value);

//     if (key == 'message') {
//       target.longMessage = value + 'world!'
//     }

//     target.message = value;
//   }
// }

// const proxy = new Proxy(data, handler);

// proxy.message += '!!!!!!! '

// console.log(proxy.longMessage);