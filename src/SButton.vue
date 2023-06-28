<script setup>
// variable
const msg = "Hello!";

// functions
function log() {
  console.log(msg);
}
</script>

<template>
  <button class="my-button" @click="log">{{ msg }}</button>
</template>

<style scoped>
.my-button {
  background: blue;
  padding: 1rem;
}
</style>
