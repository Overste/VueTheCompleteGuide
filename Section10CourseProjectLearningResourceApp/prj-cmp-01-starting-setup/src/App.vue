<template>
    <!-- 
      To pass all the properties of an object as props, you can use v-bind 
      without an argument (v-bind instead of :prop-name).
     -->
    <the-header title="RememberMe"></the-header>
    <the-resources></the-resources>
</template>

<script>
    import TheHeader from './components/layouts/TheHeader.vue'
    import TheResources from './components/learning-resources/TheResources.vue';

    export default {
        components: {
            'the-header': TheHeader,
            'the-resources': TheResources
        }
    };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
