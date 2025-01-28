/* eslint-disable */
<template>
  <header>
    <div class="header-container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <h1>user management tool</h1>
      <p>Total Users {{ userFetchedCount }}</p>
    </div>
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
<style scoped>
div.header-container {
  background: #5786de;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

img {
  max-width: 50px;
  max-height: 50px;
}
</style>
