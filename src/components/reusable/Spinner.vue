<template>
  <div class="spinner-square">
    <div class="square-1 square"></div>
    <div class="square-2 square"></div>
    <div class="square-3 square"></div>
  </div>
</template>
<script>
export default {
  name: "LoadSpinner",
};
</script>
<style scoped>
.spinner-square {
  display: flex;
  flex-direction: row;
  width: 90px;
  height: 80px;
}

.spinner-square > .square {
  width: 12px;
  height: 40px;
  margin: auto auto;
  border-radius: 4px;
}

.square-1 {
  animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s
    infinite;
}

.square-2 {
  animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms
    infinite;
}

.square-3 {
  animation: square-anim 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms
    infinite;
}

@keyframes square-anim {
  0% {
    height: 40px;
    background-color: rgb(81, 179, 138);
  }

  20% {
    height: 40px;
  }

  40% {
    height: 80px;
    background-color: rgb(81, 200, 138);
  }

  80% {
    height: 40px;
  }

  100% {
    height: 40px;
    background-color: rgb(81, 179, 138);
  }
}
</style>
