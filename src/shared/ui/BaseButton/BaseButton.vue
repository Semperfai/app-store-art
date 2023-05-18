<script setup lang="ts">
defineProps<{
    disabled?: boolean;
    primary?: boolean;
    text?: string;
    backgroundColor?: string;
}>();

const styleList = 'mx-auto my-5 p-2  text-neutral-50 bg-blue-500 font-semibold rounded-sm hover:bg-blue-600';
</script>
<template>
    <button type="button" :class="styleList" :style="{ background: backgroundColor }">
        {{ text }}
    </button>
</template>

<style scoped></style>
