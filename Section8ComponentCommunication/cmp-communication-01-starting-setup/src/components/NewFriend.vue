<template>
    <form @submit.prevent="submitNewFriend">
        <div>
            <label for="name">Name</label>
            <input v-model="friend.name" type="text" name="name" id="name">
        </div>
        <div>
            <label for="phone">Phone</label>
            <input v-model.number="friend.phone" type="number" name="phone" id="phone">
        </div>
        <div>
            <label for="email">Email</label>
            <input v-model.trim="friend.email" type="email" name="email" id="email">
        </div>
        <!-- <div>
            <label for="favorite">Toggle Favorite</label>
            <input v-model="friend.favorite" type="checkbox" name="favorite" id="favorite">
        </div> -->

        <button type="submit">Add contact</button>
    </form>
</template>

<script>
export default {
    // props: {
    //     id: {
    //         type: String,
    //         required: true
    //     },
    //     name: {
    //         type: String,
    //         required: true
    //     },
    //     phoneNumber: {
    //         type: String,
    //         required: true
    //     },
    //     emailAddress: {
    //         type: String,
    //         required: true
    //     },
    //     isFavorite: {
    //         type: Boolean,
    //         required: false,
    //         default: false,
    //     }
    // },
    emits: ['add-friend'],
    data() {
        return {
            friend: {
                name: '',
                email: '',
                phone: '',
                favorite: false,
            }
        }
    },
    methods: {
        submitNewFriend() {
            this.$emits('add-friend', this.friend);
        }
    },
}
</script>