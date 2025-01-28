<template>
  <div class="loading-grid">
    <div v-for="i in rowsNumber" :key="i" class="loading-row">
      <div class="circle loading-shimmer"></div>
      <div class="line loading-shimmer"></div>
      <div class="line loading-shimmer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingTable",
  props: {
    rowsNumber: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style scoped>
.loading-grid {
  display: grid;
  gap: 16px;
}

.loading-row {
  display: grid;
  grid-template-columns: 50px auto 180px;
  align-items: center;
  gap: 16px;
}

.loading-shimmer {
  animation: shimmer 2s infinite linear;
  background: linear-gradient(
    to right,
    rgba(63, 184, 131, 0.6) 4%,
    rgba(47, 163, 111, 0.7) 25%,
    rgba(63, 184, 131, 0.6) 36%
  );
  background-size: 1000px 100%;
  border-radius: 16px;
}

/* Keyframes for shimmer animation */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }

  100% {
    background-position: 1000px 0;
  }
}

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.line {
  height: 20px;
  width: 100%;
}
</style>
