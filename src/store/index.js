import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    selecteduser: null,
  },
  getters: {
    loadedUsers: (state) => state.users,
    selectedUser: (state) => state.selecteduser,
    loadedUsersCount: (state) => (state.users ? state.users.length : 0),
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSelectedUser(state, selectedUser) {
      state.selecteduser = selectedUser;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const users = await fetchUsersFromApi();
      setTimeout(() => commit("setUsers", users), 2000); //Added delay for loading states
    },
  },
  modules: {},
});

async function fetchUsersFromApi() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}
