<script setup lang='ts'>
defineProps<{
 text?: string,
 disabled?: boolean,
 textColor?: string
}>();
</script>
<template>
    <button>
        <slot>Button</slot>
    </button>
</template>

<style scoped>
</style>
