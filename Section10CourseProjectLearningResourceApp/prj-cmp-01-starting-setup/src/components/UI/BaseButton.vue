<template>
  <button type="type" :class="mode">
    <!--
      Slots enables you to create more flexible 
      and reusable components by allowing content to be passed from a parent component into a child component. 
      This mechanism breaks away from the strict parent-child relationship, 
      enabling more complex and dynamic layouts within your application.

      A slot is defined in a child component using the <slot></slot> tag.
      Content placed between the opening 
      and closing tags of the child component in the parent template will be rendered in place of the <slot> tag.
    -->
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    mode: {
      type: String,
      required: false
    }
  }
}
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>