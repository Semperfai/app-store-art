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
        <label for="inp_3">
            <input
                id="inp_3"
                type="text"
                v-model="text"
            >
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const headerData = ref('');

const text = ref('');

const textContent = 'Test header';

const items = [1, 2, 3, 4];

const functionCall = () => {
};

</script>
