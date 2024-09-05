<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>
<script>
export default {
    /**
     * Vue components require explicit props declaration so that Vue knows 
     * what external props passed to the component should be treated as fallthrough attributes 
     * 
     * A "fallthrough attribute" is an attribute or v-on event listener that is passed to a component, 
     * but is not explicitly declared in the receiving component's props or emits. 
     * Common examples of this include class, style, and id attributes.
     * 
     * We declare long prop names using camelCase because this avoids having to use quotes when using them as property keys, 
     * and allows us to reference them directly in template expressions because they are valid JavaScript identifiers
     * 
     * All props form a one-way-down binding between the child property and the parent one: when the parent property updates, 
     * it will flow down to the child, but not the other way around. 
     * This prevents child components from accidentally mutating the parent's state, 
     * which can make your app's data flow harder to understand.
     */
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
}
</style>