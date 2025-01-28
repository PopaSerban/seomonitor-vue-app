<template>
  <header>
    <h1>user management tool</h1>
    <p v-if="userFetchedCount === 0">Loading Users..</p>
    <p v-else>Total Users {{ userFetchedCount }}</p>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    userFetchedCount() {
      return this.$store.getters.loadedUsersCount;
    },
  },
};
</script>
<style scoped></style>
