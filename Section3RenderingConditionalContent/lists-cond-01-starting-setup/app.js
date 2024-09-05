const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [] 
    };
  },
  computed: {
    hasGoals() {
      return this.goals.length == 0;
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    }, 
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');
