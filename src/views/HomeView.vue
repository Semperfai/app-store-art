<template>
    <div class="home">
        <div>
            <p>Count: {{ counter.count }}</p>
            <p>Double count: {{ counter.doubleCount }}</p>
            <p>Name: {{ counter.name }}</p>
            <button @click="incrementCounter">
                Increment
            </button>
            <my-form />
        </div>
        <img
            alt="Vue logo"
            src="../assets/logo.png"
        >
        <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
        <my-header />
    </div>
</template>

<script setup lang="ts">
import MyForm from '@/components/MyForm.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import MyHeader from '@/components/MyHeader.vue';
import { useCounterStore } from '@/stores';

const counter = useCounterStore();

const incrementCounter = () => {
  counter.increment();
};

</script>
