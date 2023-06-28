<script setup>
import { ref } from "vue";
import { logEvent } from "histoire/client";
import SButton from "../src/SButton.vue";

const text = ref("Click me");
</script>

<template>
  <Story>
    <SButton @click="logEvent('click', $event)">
      {{ text }}
    </SButton>

    <template #controls>
      <HstText title="default slot" v-model="text" />
    </template>
  </Story>
</template>
