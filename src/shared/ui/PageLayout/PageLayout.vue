<script setup lang="ts"></script>
<template>
    <div class="max-w-7xl p-4 m-auto flex flex-col">
        <header class="flex justify-between">
            <slot name="header" />
        </header>
        <main>
            <slot name="default" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
        <div />
    </div>
</template>

<style scoped></style>
