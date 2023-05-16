<script setup lang='ts'>
import PageLayout from '@/shared/ui/Layout/PageLayout.vue';
import AppLogo from '@/shared/ui/AppLogo/AppLogo.vue';
import { ref } from 'vue';

const count = ref(0);
const counter = () => {
  count.value += 1;
};

</script>
<template>
    <PageLayout>
        <template #header>
            <AppLogo />
        </template>
        <template #default>
            <div
                class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
            >
                <h1 class=" text-3xl m-2 dark:text-slate-50 ">
                    My counter
                </h1>
                <p class="text-gray-600 dark:text-gray-400">
                    This is a simple example of a simple app.
                </p>
                <button
                    @click="counter"
                    class="py-2 px-4 m-2 bg-purple-600 text-sky-100 rounded-2xl font-serif text-2xl hover:bg-gray-700 dark:bg-amber-400 dark:text-lime-800"
                >
                    <i>CLICK</i>
                </button>
                <div class="p-3 px-5 rounded-full bg-teal-500 max-w-max m-auto dark:bg-gray-400 text-sm text-orange-800">
                    {{ count }}
                </div>
            </div>
        </template>

        <template #footer>
            <p>Counter app for example</p>
        </template>
    </PageLayout>
</template>
