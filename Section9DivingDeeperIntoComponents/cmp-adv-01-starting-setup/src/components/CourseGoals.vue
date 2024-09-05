<template>
    <ul>
        <li v-for="(goal, index) in goals" :key="index">
            <slot :item="goal" another-prop=".."></slot>
        </li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                goals: ['Finish the course', 'Learn Vue']
            }
        }
    }
</script>