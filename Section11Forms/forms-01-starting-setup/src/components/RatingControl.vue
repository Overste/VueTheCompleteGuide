<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}"><button type="button" @click="active('poor')">Poor</button></li>
        <li :class="{active: activeOption === 'average'}"><button type="button" @click="active('average')">Average</button></li>
        <li :class="{active: activeOption === 'great'}"><button type="button" @click="active('great')">Great</button></li>
    </ul>
</template>
<script>
export default {
    /**
     * This line declares that the component accepts a prop named modelValue. 
     * When a value is passed to a prop attribute, it becomes a property on that component instance. 
     * ModelValue is expected to be passed from the parent component to the child component. 
     * This allows the parent to control the initial value of the component and pass data into it.
     */
    props: ['modelValue'],
    /**
     * This line specifies the events that the component can emit to communicate back to its parent. 
     * Emitting an event allows a child component to notify its parent about something happening, 
     * such as a change in state or a user interaction. 
     * Here, the component is configured to emit an event named update:modelValue.
     * 
     * The naming convention update:modelValue follows Vue's pattern for updating bound values. 
     * When a component needs to update a value that is bound to it via a prop, 
     * it should emit an event with the name update:<propName>. 
     * This tells Vue that the component wants to update the value of the specified prop in the parent component.
     * 
     * modelValue Prop: This prop is automatically used by Vue when a component is bound with v-model. 
     * It represents the current value of the model. 
     * For example, if you have a custom input component and you want it to support v-model, 
     * you would accept a modelValue prop to get the current value of the input.
     */
    emits: ['update:modelValue'],
    // data() {
    //     return {
    //         activeOption: this.modelValue
    //     }
    // },
    computed: {
        activeOption() {
            return this.modelValue;
        }
    },
    methods: {
        active(option) {
            this.activeOption = option;
            this.$emit('update:modelValue', option);
        }
    }
}
</script>
<style scoped>
.active {
    border-color: green;
}

.active button {
    color: green;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>