<template>
    <p>{{ msg }}</p>
</template>

<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: ''
  }
});
</script>
