import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    selecteduser: null,
    isFetchingUsers: false,
  },
  getters: {
    loadedUsers: (state) => state.users,
    selectedUser: (state) => state.selecteduser,
    loadedUsersCount: (state) => (state.users ? state.users.length : 0),
    isFetchingUsers: (state) => state.isFetchingUsers,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    setSelectedUser(state, selectedUser) {
      state.selecteduser = selectedUser;
    },
    setFetchingUsersState(state, isFetching) {
      state.isFetchingUsers = isFetching;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      commit("setFetchingUsersState", true);

      try {
        const users = await new Promise((resolve) => {
          setTimeout(async () => {
            const data = await fetchUsersFromApi();
            resolve(data);
          }, 2000);
        });
        commit("setUsers", users);
      } catch (error) {
        console.error("Error fetching users:", error);
        commit("setUsers", []);
      } finally {
        commit("setFetchingUsersState", false);
      }
    },
  },
  modules: {},
});

async function fetchUsersFromApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
}
