<template>
  <div class="table-container">
    <div class="user-table">
      <div class="table-header">
        <div class="col-profile">Profile</div>
        <div class="col-name">Full Name</div>
        <div class="col-action">Actions</div>
      </div>
      <template v-if="isLoading">
        <LoadingTable :rows-number="10" />
      </template>
      <template v-else>
        <div v-for="user in users" :key="user.id" class="table-row">
          <div class="profile">
            <span>{{ getInitials(user.name) }}</span>
          </div>
          <div class="name">{{ user.name }}</div>
          <div class="action">
            <button @click="showDetails(user)" class="details-button">
              More Details
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import LoadingTable from "./reusable/LoadingTable.vue";

export default {
  name: "UserList",
  components: {
    LoadingTable,
  },
  computed: {
    users() {
      return this.$store.getters.loadedUsers;
    },
    isLoading() {
      return this.$store.getters.isFetchingUsers;
    },
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
  methods: {
    getInitials(name) {
      if (!name) return "";
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    },
    showDetails(user) {
      this.$emit("show-details", user);
    },
  },
};
</script>

<style scoped>
.table-container {
  display: flex;
  justify-content: center;
  margin: 1rem;
  padding: 2rem;
  overflow-x: auto;
}

.user-table {
  display: grid;
  width: 100%;
  max-width: 100%;
  border-radius: 8px;
  padding: 1rem 2rem;
  overflow: hidden;
  border: 1px solid #e0e0e0;
}

.table-header {
  display: grid;
  grid-template-columns: 100px 1fr 120px;
  font-weight: bold;
  padding: 12px;
  align-items: center;
  text-align: left;
}

.table-row {
  display: grid;
  grid-template-columns: 100px 1fr 120px;
  align-items: center;
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

.col-action {
  display: flex;
  align-items: center;
  justify-content: center;
}

.action {
  text-align: right;
}

.details-button {
  padding: 6px 12px;
  border: none;
  border-radius: 16px;
  background-color: #3fb883;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.details-button:hover {
  background-color: #369e71;
}
</style>
