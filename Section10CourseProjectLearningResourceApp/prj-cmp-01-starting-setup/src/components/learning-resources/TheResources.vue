<template>
    <base-card>
        <base-button @click="setSelectedTab('stored-resources')" type="button" :mode="storedResBtnMode">Stored
            Resources</base-button>
        <base-button @click="setSelectedTab('add-resource')" type="button" :mode="addResBtnMode">Add
            Resource</base-button>
    </base-card>
    <!-- 
        Components allow us to split the UI into independent and reusable pieces, and think about each piece in isolation. 
        When switching between multiple components with <component :is="...">, 
        a component will be unmounted when it is switched away from. 
        
        We can force the inactive components to stay "alive" with the built-in <KeepAlive> component.
     -->
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>
<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue';

export default {
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource
    },
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to Google...',
                    link: 'https://google.com'
                }
            ]
        };
    },
    /**
     * Computed properties allows you to declare a value that depends on other values. 
     * They are similar to methods but are optimized for performance and reactivity. 
     * Computed properties are cached based on their dependencies, 
     * meaning they only re-evaluate when some of their reactive dependencies have changed. 
     * This makes them ideal for calculations that depend on reactive data properties.
     * 
     * 
     */
    computed: {
        storedResBtnMode() {
            return this.isTabActive('stored-resources') ? null : 'flat'
        },
        addResBtnMode() {
            return this.isTabActive('add-resource') ? null : 'flat'
        },
    },
    provide() {
        return {
            storedResources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        isTabActive(tab) {
            return this.selectedTab === tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }

            this.storedResources.unshift(newResource);
            this.selectedTab('stored-resources');
        },
        removeResource() {
            const resIndex = this.storedResources.findIndex(res => res.id);
            this.storedResources.splice(resIndex, 1);
        }
    }
}
</script>