/* eslint-disable */
<template>
  <header>
    <div class="left-header-container">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div class="welcome-container">
        <h4>Overview</h4>
        <h1>User management tool</h1>
      </div>
      <div class="users-container">
        <LoadSpinner v-if="userFetchedCount === 0"></LoadSpinner>
        <h3 v-else class="pill">Users fetched: {{ userFetchedCount }}</h3>
      </div>
    </div>
    <img alt="Github logo" src="../assets/github-mark.png" />
  </header>
</template>

<script>
import LoadSpinner from "./reusable/Spinner.vue";
export default {
  name: "AppHeader",
  components: {
    LoadSpinner,
  },
  computed: {
    userFetchedCount() {
      return this.$store.getters.loadedUsersCount;
    },
  },
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.left-header-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  margin-left: 1rem;
  padding: 1rem;
}

.welcome-container {
  display: flex;
  align-items: start;
  flex-direction: column;
}

.welcome-container :first-child {
  margin-bottom: 0;
}

.welcome-container :nth-child(2) {
  margin-top: 0;
}

.user-count {
  flex-grow: 1;
  text-align: start;
}

.users-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-left: 3rem;
}

.pill {
  background-color: #6bdfad;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}

img {
  max-width: 50px;
  max-height: 50px;
  margin-right: 1rem;
}
</style>
