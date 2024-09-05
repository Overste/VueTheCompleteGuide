<template>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">        
        <template #default>
            <p>Unfortunately, at least one input value is invalid.</p>
            <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
        </template>
        <template #actions>
            <base-button type="button" @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submit">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <textarea name="description" id="description" rows="3" ref="descriptionInput"></textarea>
            </div>
            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" name="link" id="link" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resources</base-button>
            </div>
        </form>
    </base-card>
</template>
<script>
export default {
    /**
     * To pass data from the parent to a child component, we use props. 
     * However, imagine the case where we have a large component tree, 
     * and a deeply nested component needs something from a distant ancestor component.
     * 
     * A parent component can serve as a dependency provider for all its descendants. 
     * Any component in the descendant tree, regardless of how deep it is, 
     * can inject dependencies provided by components up in its parent chain.
     */
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        submit() {
            /**
             * Refs are used to register references to DOM elements or child components within the template of your application. 
             * These references can then be accessed within the Vue instance, 
             * allowing for direct manipulation of these elements or components. 
             * The ref attribute serves as the key in the $refs object, 
             * making it possible to target specific elements or components efficiently.
             * 
            * To use a ref, you add the ref attribute to an HTML element or component in your template. 
            * This makes the element or component selectable by serving as the key in the parent $refs attribute. 
            * For example, adding a ref attribute to an input element will expose the parent DOM:
            * <input type="text" name="title" id="title" ref="titleInput">
             */
            const title = this.$refs.titleInput.value;
            const description = this.$refs.descriptionInput.value;
            const link = this.$refs.linkInput.value;

            if (title.trim() === '' || description.trim() === 0 || link.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }

            this.AddResource(title, description, link);
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>
<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>