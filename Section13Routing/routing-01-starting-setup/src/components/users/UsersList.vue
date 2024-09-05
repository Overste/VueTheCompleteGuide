<template>
  <button @click=confirmInput>Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      changesSaved: false
    }
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      /**
       * 
       */
      this.$router.push('/teams')
    },
    saveChanges() {
      this.changesSaved = true;
    }
  },
  /**
   * called when the route that renders this component is about to be navigated away from.
   * As with `beforeRouteUpdate`, it has access to `this` component instance.
   */
  beforeRouteLeave (to, from, next) {
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm("Are you shure? You got unsaved chanes!")
      next(userWantsToLeave);
    }
  },
  /**
   * called before the route that renders this component is confirmed.
   * does NOT have access to `this` component instance,
   * because it has not been created yet when this guard is called!
   */
  beforeRouteEnter (to, from, next) {
    next()
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>