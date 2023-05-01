<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const MyHello = defineAsyncComponent({
  loader: () => import('./MyHello.vue'),
  delay: 0
});

const showHello = ref(false);
</script>

<template>
    <div>
        <button @click="showHello = true">
            Show Hello
        </button>
        <div v-if="showHello">
            <div>Async component</div>
            <MyHello :count="1" />
        </div>
    </div>
</template>
