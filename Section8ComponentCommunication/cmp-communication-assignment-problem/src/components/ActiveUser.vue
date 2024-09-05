<template>
    <li>
        <ul>
            <li>
                <h2>
                    <strong>Name</strong>
                    {{ name }}
                </h2>

            </li>
            <li>
                <h2>
                    <strong>Age</strong>
                    {{ age }}
                </h2>
            </li>
        </ul>
    </li>
</template>
<script>
    export default {
        props: {
            id: {
                type: String,
                required: true
            },
                name: {
                type: String,
                required: true
            },
                age: {
                type: Number,
                required: true
            },
        },
    }
</script>