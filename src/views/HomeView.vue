<template>
    <div class="home">
        <div>
            <p>Count: {{ counter.count }}</p>
            <p>Double count: {{ counter.doubleCount }}</p>
            <p>Name: {{ counter.name }}</p>
            <p>Age: {{ counter.age }}</p>
            <p>Age*2: {{ counter.doubleAge }}</p>

            <button @click="incrementCounter">
                Increment
            </button>
            <my-form />
        </div>
        <hello-world :msg="message" />
        <my-header />
        <my-input />
    </div>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import MyForm from '@/components/MyForm.vue';
import MyHeader from '@/components/MyHeader.vue';
import MyInput from '@/components/MyInput.vue';
import { ref } from 'vue';

import { useCounterStore } from '@/stores';

const message = ref('Welcome to Your Vue.js + TypeScript App');

const counter = useCounterStore();

const incrementCounter = () => {
  counter.increment();
};

</script>
