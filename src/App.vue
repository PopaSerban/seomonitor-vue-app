<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <AppHeader></AppHeader>
    <div class="dashboard-container">
      <UserList @show-details="userSelected"></UserList>
      <UserDetails></UserDetails>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import UserList from "./components/UserList.vue";
import UserDetails from "./components/UserDetails.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    UserList,
    UserDetails,
  },
  methods: {
    userSelected(user) {
      this.$store.commit("setSelectedUser", user);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

/* Global Reset of borders and outline */
* {
  border: none;
  outline: none;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.dashboard-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.dashboard-container :first-child {
  flex: 4;
}

.dashboard-container :nth-child(2) {
  flex: 1;
}
</style>
