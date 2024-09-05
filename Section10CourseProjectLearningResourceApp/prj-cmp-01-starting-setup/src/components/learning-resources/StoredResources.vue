<template>
  <ul>
    <learning-resource v-for="storedResource in storedResources" :key="storedResource.id" :id="storedResource.id"
      :title="storedResource.title" :description="storedResource.description"
      :link="storedResource.link"></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './LearningResource.vue';

export default {
  /**
   * To use a child component, we need to import it in the parent component. 
   * Assuming we placed our counter component inside a file called LearningResource.vue, 
   * the component will be exposed as the file's default export:
   */
  components: {
    'learning-resource': LearningResource,
  },
  /**
   * In Vue.js, inject is a function used within the Composition API to access data provided by an ancestor component. 
   * It allows you to retrieve values that were made available via the provide option in a parent component. 
   */
  inject: ['storedResources'],
  // inject: {
  //   storedResources: {
  //     type: Array,
  //     required: true,
  //     validator: function (value) {
  //       return value.every(item => 
  //         typeof item === 'object' &&
  //         item!== null &&
  //         typeof item.id === 'string' &&
  //         typeof item.title === 'string' &&
  //         typeof item.description === 'string' &&
  //         typeof item.link === 'string'
  //       );
  //     }
  //   }
  // }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>