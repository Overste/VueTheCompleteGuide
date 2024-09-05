<template>
	<base-container>
		<h2>Active Users</h2>
		<base-search @search="updateSearch" :search-term="searchState.enteredSearchTerm"></base-search>
		<div>
			<button @click="sort('asc')" :class="{ selected: sorting === 'asc' }">Sort Ascending</button>
			<button @click="sort('desc')" :class="{ selected: sorting === 'desc' }">Sort Descending</button>
		</div>
		<ul>
			<user-item v-for="user in displayedUsers" :key="user.id" :user-name="user.fullName" :id="user.id"
				@list-projects="listProjects(user)"></user-item>
		</ul>
	</base-container>
</template>

<script setup>
import { computed, defineProps, defineEmits, reactive, ref, watch } from 'vue';

import UserItem from './UserItem.vue';

const emits = defineEmits(['list-projects'])

const listProjects = (user) => {
	console.log(user);
	
  emits('list-projects', user);
};


const props = defineProps({
  users: Array
});

const searchState = reactive({
	enteredSearchTerm: '',
	activeSearchTerm: '',
});

const sorting = ref(null);

const availableUsers = computed(() => {
	let users = [];

	console.log("availableUsers ", props.users);
	

	if (searchState.activeSearchTerm) {
		users = props.users.filter((usr) =>
			usr.fullName.includes(searchState.activeSearchTerm)
		);

		console.log("users", users);
		
	} else if (props.users) {
		users = props.users;
	}
	return users;
});


const displayedUsers = computed(() => {
  console.log("sorting", sorting);
  
  if (!sorting.value) {
    return availableUsers.value; // Access the actual array value
  }

  return availableUsers.value.slice().sort((u1, u2) => {
    if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
      return 1;
    } else if (sorting.value === 'asc') {
      return -1;
    } else if (sorting.value === 'desc' && u1.fullName > u2.fullName) {
      return -1;
    } else {
      return 1;
    }
  });
});

// console.log(displayedUsers);
// console.log(props.users);
// console.log(props.users.value);
// console.log(availableUsers);



function updateSearch(val) {
	searchState.enteredSearchTerm = val;
}

function sort(mode) {
	sorting.value = mode;
}

const searchTerm = computed(() => searchState.enteredSearchTerm);

watch(searchTerm, (newValue) => {
    setTimeout(() => {
        if (newValue === searchState.enteredSearchTerm) {
            searchState.activeSearchTerm = newValue;
        }
    }, 300);
});

// export default {
//   components: {
//     UserItem,
//   },
//   props: ['users'],
//   data() {
//     return {
//       enteredSearchTerm: '',
//       activeSearchTerm: '',
//       sorting: null,
//     };
//   },
//   computed: {
//     availableUsers() {
//       let users = [];
//       if (this.activeSearchTerm) {
//         users = this.users.filter((usr) =>
//           usr.fullName.includes(this.activeSearchTerm)
//         );
//       } else if (this.users) {
//         users = this.users;
//       }
//       return users;
//     },
//     displayedUsers() {
//       if (!this.sorting) {
//         return this.availableUsers;
//       }
//       return this.availableUsers.slice().sort((u1, u2) => {
//         if (this.sorting === 'asc' && u1.fullName > u2.fullName) {
//           return 1;
//         } else if (this.sorting === 'asc') {
//           return -1;
//         } else if (this.sorting === 'desc' && u1.fullName > u2.fullName) {
//           return -1;
//         } else {
//           return 1;
//         }
//       });
//     },
//   },
//   methods: {
//     updateSearch(val) {
//       this.enteredSearchTerm = val;
//     },
//     sort(mode) {
//       this.sorting = mode;
//     },
//   },
//   watch: {
//     enteredSearchTerm(val) {
//       setTimeout(() => {
//         if (val === this.enteredSearchTerm) {
//           this.activeSearchTerm = val;
//         }
//       }, 300);
//     }
//   },
// };
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>