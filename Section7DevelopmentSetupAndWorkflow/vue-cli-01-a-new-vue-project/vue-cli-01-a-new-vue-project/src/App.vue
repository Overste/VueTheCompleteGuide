<template>
    <section>
        <header>
            <h2>Friend List</h2>
        </header>
    <ul>
        <friend-contact></friend-contact>
    </ul>
    </section>
</template>
<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'Manual',
                    name: 'Manuel Lopez',
                    phone: '123 456 789',
                    email: 'manual@local.com'
                },
                {
                    id: 'July',
                    name: 'July Jones',
                    phone: '890 567 123',
                    email: 'July@local.com'
                }
            ]
        }
    }
}
</script>