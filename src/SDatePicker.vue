<template>
  <inclusive-dates :label="label" locale="en-US"></inclusive-dates>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>
