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
    <button
        type="button"
        :class="styleList"
        :style="{ background: backgroundColor }"
        @change="1"
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eius corporis
        molestias natus quisquam minima voluptates accusantium voluptatum nostrum
        obcaecati perferendis expedita veritatis eligendi consequuntur aliquam rem,
        maiores, ad minus?
    </button>
</template>

<style scoped></style>
