<script setup>
import { ref } from "vue";
import { logEvent } from "histoire/client";
import SDatePicker from "../src/SDatePicker.vue";

const text = ref("Click me");
</script>

<template>
  <Story>
    <SDatePicker @click="logEvent('click', $event)"> </SDatePicker>
  </Story>
</template>
