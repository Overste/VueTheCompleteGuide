<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item v-for="member in members" :key="member.id" :name="member.fullName" :role="member.role"></user-item>
    </ul>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users', 'teams'],
  props: ['teamId'],
  data() {
    return {
      // teamName: 'Test',
      // members: [
      //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
      //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      // ],
      teamName: '',
      members: []
    };
  },

  /**
   * One thing to note when using routes with params is that when the user navigates from /users/oldId to /users/newId, 
   * the same component instance will be reused. Since both routes render the same component, 
   * this is more efficient than destroying the old instance and then creating a new one. 
   * However, this also means that the lifecycle hooks of the component will not be called.
   * 
   * To react to params changes in the same component, you can simply watch anything on the route object, 
   * in this scenario, the route.params
   * 
   *  watch(() => route.params.id, (newId, oldId) => {
   * react to route changes...
   * })
   */
  watch: {
    // $route(newRoute) {
    //   this.loadTeamMembers(newRoute);
    // }
    teamId(newId) {
      this.loadTeamMembers(newId);
    }
  },
  methods: {
    // loadTeamMembers(route) {
    loadTeamMembers(teamId) {
      
      //this.$route.path /teams/t1
      // const teamId = route.params.teamsId;
      console.log(this.teams);
      const selectedTeam = this.teams.find(team => team.id === teamId);
      const members = selectedTeam.members;
      const selectedMembers = [];

      Object.entries(members).forEach(([, member]) => {
        const selectedMember = this.users.find(user => user.id === member);
        selectedMembers.push(selectedMember);
      });

      this.members = selectedMembers;
      this.teamName = selectedTeam.name;
    }
  },
  created() {
    // this.loadTeamMembers(this.$route);
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  /**
   * called when the route that renders this component has changed, but this component is reused in the new route.
   * For example, given a route with params `/teams/:id`, when we navigate between `/teams/1` and `/teams/2`,
   * the same `TeamItem` component instance will be reused, and this hook will be called when that happens.
   * Because the component is mounted while this happens, the navigation guard has access to `this` component instance.
   */
  beforeRouteUpdate(to, from, next) {
    this.loadTeamMembers(to.params.teamId);
    next();
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>