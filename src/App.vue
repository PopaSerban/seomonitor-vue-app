<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <AppHeader></AppHeader>
    <UserList></UserList>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import UserList from "./components/UserList.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    UserList,
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
</style>
