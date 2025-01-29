<template>
  <div class="user-details-container">
    <template v-if="user">
      <h2>User Details</h2>
      <div class="details-container">
        <div v-for="(value, key) in userToRender" :key="key" class="row">
          <template v-if="typeof value === 'object'">
            <div class="segment">
              <h3>{{ key }}</h3>
              <div
                v-for="(subValue, subKey) in value"
                :key="subKey"
                class="sub-row"
              >
                <p>
                  <strong>{{ subKey }}:</strong> {{ subValue }}
                </p>
              </div>
            </div>
          </template>
          <template v-else>
            <p>
              <strong>{{ key }}:</strong> {{ value }}
            </p>
          </template>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="no-user-selected-container">
        <img
          class="sad-logo"
          src="../assets/disappointed-face.png"
          alt="Sad logo"
        />
        <p>No user selected.</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "UserDetails",
  data() {
    return {
      userToRender: {},
    };
  },
  computed: {
    user() {
      return this.$store.state.selectedUser;
    },
  },
  watch: {
    user(newUser) {
      if (newUser) {
        //we asume that we know the user contract
        this.userToRender = this.softFlattenUser(newUser);
      }
    },
  },
  methods: {
    //we flatten de user from 3lvls deep to 2lvls deep directly.
    //  as only geo is 3lvls deep
    softFlattenUser(user) {
      const flattenedUser = { ...user };
      if (flattenedUser.address && flattenedUser.address.geo) {
        flattenedUser.address.geo = `${user.address.geo.lat}, ${user.address.geo.lng}`;
      }
      return flattenedUser;
    },
  },
};
</script>

<style scoped>
.user-details-container {
  padding: 1rem;
  margin-right: 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
}

.user-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sad-logo {
  max-width: 100px;
  max-height: 100px;
  filter: hue-rotate(66deg);
  /* Adjust the hue shift */
}
</style>
