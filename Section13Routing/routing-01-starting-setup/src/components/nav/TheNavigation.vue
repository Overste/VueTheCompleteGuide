<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- 
            stead of using regular <a> tags, we use the custom component RouterLink to create links. 
            This allows Vue Router to change the URL without reloading the page, 
            handle URL generation, encoding, and various other features. 
            
            The RouterView component tells Vue Router where to render the current route component. 
            That's the component that corresponds to the current URL path. 
            It doesn't have to be in App.vue, you can put it anywhere to adapt it to your layout, 
            but it does need to be included somewhere, otherwise Vue Router won't render anything.

           -->
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<!-- <script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script> -->

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

/* button { */
a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

/* button:hover,
button:active { */
a:hover,
a.active,
a:active,
a.router-link-active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
</style>