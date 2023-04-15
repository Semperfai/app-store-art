<template>
    <div>
        <HelloWorld
            v-model="headerData"
            is="header"
            v-once
            id="uniqueID"
            @click="functionCall"
            v-text="textContent"
            ref="header"
            my-prop="prop"
            v-for="item in items"
            :key="item"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './HelloWorld.vue';

const headerData = ref('');
const textContent = 'Test header';

const items = [1, 2, 3, 4];

const functionCall = () => {
  console.log(1);
};
</script>
