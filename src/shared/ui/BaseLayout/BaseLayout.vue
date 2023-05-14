<script setup lang='ts'>
</script>
<template>
    <div class="container">
        <header>
            <slot name="header" />
        </header>
        <main>
            <slot name="default" />
        </main>
        <footer>
            <slot name="footer" />
        </footer>
    </div>
</template>

<style scoped>
</style>
