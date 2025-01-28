<template>
  <div class="table-container">
    <div class="transaction-table">
      <div class="table-header">
        <div class="col-profile">Profile</div>
        <div class="col-name auto">Full Name</div>
        <div class="col-action">Actions</div>
      </div>
      <div v-if="users.length === 0">
        <LoadingTable class="table-rows" :rowsNumber="10"></LoadingTable>
      </div>
      <div v-else v-for="user in users" :key="user.id" class="table-row">
        <div class="profile">
          <span>{{ getInitials(user.name) }}</span>
        </div>
        <div class="name auto">{{ user.name }}</div>
        <div class="action">
          <button @click="showDetails(user)">More Details</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 2rem;
  overflow-x: auto;
}

.transaction-table {
  display: grid;
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.table-header {
  display: grid;
  grid-template-columns: 100px auto 120px;
  font-weight: bold;
  padding: 12px;
  align-items: center;
  text-align: left;
}

.table-row {
  display: grid;
  grid-template-columns: 100px auto 120px;
  align-items: left;
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

.profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #6c5ce7;
  color: white;
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
}

.name {
  font-size: 16px;
  color: #333;
  text-align: left;
}

.auto {
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 12px;
}

.col-action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.action {
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 6px 12px;
  border: none;
  border-radius: 16px;
  background-color: #3fb883;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #369e71;
}
</style>
<script>
import LoadingTable from "./reusable/LoadingTable.vue";

export default {
  name: "UserList",
  components: {
    LoadingTable,
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    users() {
      return this.$store.getters.loadedUsers;
    },
  },
  methods: {
    getInitials(name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    },
    showDetails(transaction) {
      alert(`Showing details for ${transaction.name}`);
    },
  },
};
</script>
