<template>
  <div class="user-list" v-if="users.length">
    <h2>User List</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        <button @click="selectuser(user)">View Details</button>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.user-list {
  padding: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

button {
  margin-left: 1rem;
}
</style>
<script>
export default {
  name: "UserList",
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    users() {
      return this.$store.getters.loadedUsers;
    },
  },
};
</script>
